import React, { useState } from 'react'

import { Button } from '@mui/material'
import { useForm } from "react-hook-form";

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { mask, unMask } from "remask"

import { HandleFormProps, UseContext } from '../../../../context/hook';
import { InputPropsElement } from '../Input/input';

import { Input, ButtonProps } from '../styles'

const responsibleInfomation = yup.object().shape({
    name_responsible: yup.string().required("O nome do responsável principal é obrigatório"),
    name_secondary_responsible: yup.string().optional(),
    responsible_telephone: yup.string().required("O telefone do responsável é obrigatório").
        min(14, "Número de telefone deve ter no mínimo 8 digitos")
        .max(15, "Número de telefone tem no máximo 9 digitos"),
})

export default function Responsible(): JSX.Element {
    const [ telephone, setTelephone ] = useState<string>("")
    const { PreviousPage, HandleForm, setResponsibleValues, responsibleValues } = UseContext()

    const { register, handleSubmit, formState: { errors } } = useForm<HandleFormProps>({
        resolver: yupResolver(responsibleInfomation)
    })

    function BusinessInputMask(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const values = unMask(event.target.value)
        const maskedValue = mask(values, ["(99) 9999-9999", "(99) 99999-9999"])

        setTelephone(maskedValue)
    }

    return (
        <>
            <Input>
                <InputPropsElement
                    {...register("name_responsible")}
                    name="name_responsible"
                    label="Nome"
                    placeholder="Nome do Responsável principal. Ex: Gabriel Mesquita da Costa"
                    onChange={(event) => setResponsibleValues(event.target.value)}
                    value={responsibleValues.name_responsible}
                    error={errors.name_responsible}
                />

                <InputPropsElement
                    {...register("name_secondary_responsible")}
                    name="name_secondary_responsible"
                    label="Nome do outro responsável"
                    placeholder="Nome de outra pessoa responsável, opcional"
                    onChange={(event) => setResponsibleValues(event.target.value)}
                    value={responsibleValues.name_secondary_responsible}
                />

                <InputPropsElement
                    {...register("responsible_telephone")}
                    name="responsible_telephone"
                    label="Telefone"
                    placeholder="Telefone, ex: (31) 98863-6363"
                    onChange={BusinessInputMask}
                    value={telephone}
                    error={errors.responsible_telephone}
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
