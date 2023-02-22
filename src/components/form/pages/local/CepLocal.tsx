import React, { useState } from 'react'
import Swal from "sweetalert2"

import { Button } from '@mui/material'
import { Input, ButtonProps } from './styles'

import { useForm } from "react-hook-form";

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios';

import { HandleFormProps, UseContext } from '../../../../context/hook';
import { InputPropsElement } from '../Input/input';
import { mask, unMask } from "remask"

interface CepOptions {
    cep:        string;
    bairro:     string;
    logradouro: string;
    localidade: string;
    uf:         string;
}

const localInfomation = yup.object().shape({
    cep: yup.string().required("O CEP do local é obrigatório").min(9, "Inválido, CEP deverá conter 8 caracteres"),
})

export default function CepLocal(): JSX.Element {
    const [maskedCep, setMaskedCep] = useState<string>("")
    const [cepError, setCepError] = useState<boolean>(false)

    const { HandleForm, PreviousPage, page } = UseContext()

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<HandleFormProps>({
        resolver: yupResolver(localInfomation)
    })

    const checkCep = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): Promise<void> => {
        const values = unMask(event.target.value)
        const maskedValue = mask(values, ["99999-999"])

        setMaskedCep(maskedValue)

        const { data } = await axios<CepOptions>({ method: "get", url: `https://viacep.com.br/ws/${maskedValue}/json/`})

        if (!data.cep) {
            Swal.fire("Erro", "CEP não foi encontrado 😔: Digite novamente!", "error")
            setCepError(true)
            return
        }

        page === 5 ?
            Object.assign(data, {
                bairro: setValue("bairro_responsible", data.bairro),
                logradouro: setValue("logradouro_responsible", data.logradouro),
                localidade: setValue("localidade_responsible", data.localidade),
                uf: setValue("uf_responsible", data.uf),
            }) : Object.assign(data, {
                    bairro: setValue("bairro", data.bairro),
                    logradouro: setValue("logradouro", data.logradouro),
                    localidade: setValue("localidade", data.localidade),
                    uf: setValue("uf", data.uf),
        })

        Swal.fire("Sucesso", "CEP foi encontrado 😊: Clique em próximo passo", "success")
        setCepError(false)
    }

    return (
        <>
            <Input>
                <InputPropsElement
                    {...register("cep")}
                    name="cep"
                    label="CEP"
                    placeholder="Digite o CEP do local"
                    onChange={checkCep}
                    value={maskedCep}
                    error={errors.cep}
                />
            </Input>

            <ButtonProps>
                <Button
                    type="button"
                    color="secondary"
                    variant="contained"
                    style={{ marginTop: "30px" }}
                    onClick={PreviousPage}
                >
                    Voltar
                </Button>
                <Button
                    type="button"
                    color="secondary"
                    variant="contained"
                    style={{ marginTop: "30px" }}
                    onClick={handleSubmit(HandleForm)}
                    disabled={cepError}
                >
                    Próximo Passo
                </Button>
            </ButtonProps>
        </>
    )
}
