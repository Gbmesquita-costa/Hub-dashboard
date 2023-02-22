import { Button } from '@mui/material'
import React, { useState } from 'react'

import { useForm } from "react-hook-form";

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { mask, unMask } from "remask"

import { Input, ButtonProps } from "../styles"
import { HandleFormProps, UseContext } from '../../../../context/hook';
import { InputPropsElement } from '../Input/input';

const businessInfomation = yup.object().shape({
    empresa: yup.string().required("O nome da empresa é obrigatório"),
    cnpj: yup.string().required("CNPJ é obrigatório").min(18 ,"Inválido, CNPJ deverá conter 14 caracteres"),
    descricao: yup.string().required("Descrição da empresa é obrigatória")
})

export default function Business() {
    const [ businessCnpj, SetBusinessCnpj ] = useState<string>("")

    const { page, HandleForm, businessValues, setBusinnesValues } = UseContext()

    const { register, handleSubmit, formState: { errors } } = useForm<HandleFormProps>({
        resolver: yupResolver(businessInfomation)
    })

    function BusinessInputMask(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const values = unMask(event.target.value)
        const maskedValue = mask(values, ["99.999.999/9999-99"])

        SetBusinessCnpj(maskedValue)
    }

    return (
        <>
            <Input>
                <InputPropsElement
                    {...register("empresa")}
                    name='empresa'
                    label='Empresa'
                    placeholder="Nome da empresa"  
                    onChange={(event) => setBusinnesValues(event.target.value)}
                    value={businessValues.empresa}
                    error={errors.empresa}
                />
                <InputPropsElement
                    {...register("cnpj")}
                    name='cnpj'
                    label='CNPJ'
                    placeholder="Exemplo: 00.000.000/0000-00"
                    onChange={(event) => BusinessInputMask(event)}
                    value={businessCnpj}
                    error={errors.cnpj}  
                />
                <InputPropsElement
                    {...register("descricao")}
                    name='descricao'
                    label='Descrição'
                    placeholder='Ex: Ímpeto, venda de roupas...'
                    onChange={(event) => setBusinnesValues(event.target.value)}
                    value={businessValues.descricao}
                    error={errors.descricao}  
                />
            </Input>

            <ButtonProps>
                <Button
                    type="button"
                    color="secondary"
                    variant="contained"
                    style={{ marginTop: "30px" }}
                    disabled={page === 1}
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
