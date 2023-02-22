import React from 'react'

import { Button } from '@mui/material'

import { useForm } from "react-hook-form";

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { UseContext, HandleFormProps } from '../../../../../context/hook';
import { InputPropsElement } from '../../Input/input';
import { Input, ButtonProps } from '../../styles'

const responsibleAddressInfomation = yup.object().shape({
    bairro_responsible: yup.string().required("Bairro é obrigatório"),
    logradouro_responsible: yup.string().required("Logradouro é obrigatório"),
    localidade_responsible: yup.string().required("Cidade é obrigatório"),
    uf_responsible: yup.string().required("Estado do local é obrigatório"),
    numero_responsible: yup.string().required("Número do local é obrigatório"),
})

export function ResponsibleAddress (): JSX.Element {
    const { PreviousPage, HandleForm, informationValues, setInformationValues } = UseContext()

    const { register, handleSubmit, formState: { errors } } = useForm<HandleFormProps>({
        resolver: yupResolver(responsibleAddressInfomation)
    })

    return (
        <>
            <Input>
                <InputPropsElement
                    {...register("bairro_responsible")}
                    name="bairro_responsible"
                    label="Bairro"
                    placeholder="Bairro do responsável"
                    onChange={(event) => setInformationValues(event.target.value)}
                    value={informationValues.bairro_responsible}
                    error={errors.bairro_responsible}
                />
                <InputPropsElement
                    {...register("logradouro_responsible")}
                    name="logradouro_responsible"
                    label="Logradouro"
                    placeholder="Logradouro do responsável"
                    onChange={(event) => setInformationValues(event.target.value)}
                    value={informationValues.logradouro_responsible}
                    error={errors.logradouro_responsible}
                />
                <InputPropsElement
                    {...register("uf_responsible")}
                    name="uf_responsible"
                    label="UF"
                    placeholder="Uf da cidade do responsável"
                    onChange={(event) => setInformationValues(event.target.value)}
                    value={informationValues.uf_responsible}
                    error={errors.uf_responsible}
                />
                <InputPropsElement
                    {...register("localidade_responsible")}
                    name="localidade_responsible"
                    label="Localidade"
                    placeholder="Localidade do responsável"
                    onChange={(event) => setInformationValues(event.target.value)}
                    value={informationValues.localidade_responsible}
                    error={errors.localidade_responsible}
                />
                <InputPropsElement
                    {...register("numero_responsible")}
                    name="numero_responsible"
                    label="Número"
                    placeholder="Digite o número do local"
                    onChange={(event) => setInformationValues(event.target.value)}
                    value={informationValues.numero_responsible}
                    error={errors.numero_responsible}
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
                    Enviar
                </Button>
            </ButtonProps>
        </>
    )
}