import React from 'react'

import { UseContext, HandleFormProps } from '../../../../../context/hook';
import { Button } from '@mui/material'

import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { InputPropsElement } from '../../Input/input';
import { Input, ButtonProps } from '../../styles'

const addressInfomation = yup.object().shape({
    bairro: yup.string().required("Bairro é obrigatório"),
    logradouro: yup.string().required("Logradouro é obrigatório"),
    localidade: yup.string().required("Cidade é obrigatório"),
    uf: yup.string().required("Estado do local é obrigatório"),
    numero: yup.string().required("Número do local é obrigatório"),
})

export default function Address(): JSX.Element {
    const { HandleForm, PreviousPage, localValues, setLocalValues } = UseContext()

    const { register, handleSubmit, formState: { errors } } = useForm<HandleFormProps>({
        resolver: yupResolver(addressInfomation)
    })

    return (
        <>
            <Input>
                <InputPropsElement
                    {...register("bairro")}
                    name="bairro"
                    label="Bairro"
                    placeholder="Bairro do local"
                    onChange={(event) => setLocalValues(event.target.value)}
                    value={localValues.bairro}
                    error={errors.bairro}
                />
                <InputPropsElement
                    {...register("logradouro")}
                    name="logradouro"
                    label="Logradouro"
                    placeholder="Logradouro do local"
                    onChange={(event) => setLocalValues(event.target.value)}
                    value={localValues.logradouro}
                    error={errors.logradouro}
                />
                <InputPropsElement
                    {...register("uf")}
                    name="uf"
                    label="UF"
                    placeholder="Uf da cidade"
                    onChange={(event) => setLocalValues(event.target.value)}
                    value={localValues.uf}
                    error={errors.uf}
                />
                <InputPropsElement
                    {...register("localidade")}
                    name="localidade"
                    label="Localidade"
                    placeholder="Localidade"
                    onChange={(event) => setLocalValues(event.target.value)}
                    value={localValues.localidade}
                    error={errors.localidade}
                />
                <InputPropsElement
                    {...register("numero")}
                    name="numero"
                    label="Número"
                    placeholder="Digite o número do local"
                    onChange={(event) => setLocalValues(event.target.value)}
                    value={localValues.numero}
                    error={errors.numero}
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
                >
                    Próximo Passo
                </Button>
            </ButtonProps>
        </>
    )
}