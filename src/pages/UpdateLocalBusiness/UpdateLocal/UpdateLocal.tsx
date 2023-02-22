import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

import Swal from "sweetalert2";
import { Button, TextField } from "@mui/material";

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

import Lottie from 'react-lottie';

import { Axios } from '../../../services/api';
import Rocket from "../../../animations/rocket.json"

import { Container, Form } from './styles';

interface BusinessLocalWithProps {
    id?:          string;
    neighborhood: string;
    publicplace:  string;
    state:        string;
    locality:     string;
    number:       string;
    businessId?:  string;
}

const localInformation = yup.object().shape({
    neighborhood: yup.string()
        .required("Campo obrigatório! Caso queira atualizar somente um campo específico, repita os valores antigos, e atualize os novos 😃"),
    publicplace: yup.string()
        .required("Campo obrigatório! Caso queira atualizar somente um campo específico, repita os valores antigos, e atualize os novos 😃"),
    state: yup.string()
        .required("Campo obrigatório! Caso queira atualizar somente um campo específico, repita os valores antigos, e atualize os novos 😃"),
    locality: yup.string()
        .required("Campo obrigatório! Caso queira atualizar somente um campo específico, repita os valores antigos, e atualize os novos 😃"),
    number: yup.string()
        .required("Campo obrigatório! Caso queira atualizar somente um campo específico, repita os valores antigos, e atualize os novos 😃")
})

export function UpdateLocal() {
    const { register, handleSubmit, formState: { errors } } = useForm<BusinessLocalWithProps>({
        resolver: yupResolver(localInformation)
    })

    const [local, setLocal] = useState<BusinessLocalWithProps>({} as BusinessLocalWithProps)
    const { id } = useParams()

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        Axios({ method: "get", withCredentials: true, url: `/getId/${id}` }).then((response) => {
            const localData = response.data
            setLocal(localData)
        })
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Rocket,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    async function handleSubmitForm(event: BusinessLocalWithProps): Promise<void> {
        setIsLoading(true)

        try {
            setTimeout(async () => {
                const submitData = {
                    neighborhood: event.neighborhood,
                    publicplace: event.publicplace,
                    state: event.state,
                    locality: event.locality,
                    number: event.number
                }

                const { data } = await Axios({ method: "put", withCredentials: true, url: `/updateLocal/${id}`, data: submitData })

                if (!data) {
                    Swal.fire("Erro", "Não foi possível atualizar os seus dados! Por favor, tente novamente", "error")
                    return
                }

                const pressButton = Swal.fire(
                    "Sucesso",
                    "Dados atualizados com sucesso!",
                    "success"
                )


                if ((await pressButton).isConfirmed) {
                    navigate("/dashboard/update")
                }

            }, 4000);
        } catch (error) {
            Swal.fire("Erro", `Error: ${error} 😞`, "error")
        }
    }

    return (
        <Container>
            <h1>Atualização local : {local.locality}</h1>

            {
                isLoading ? (
                    <Form>
                        <Lottie
                            options={defaultOptions}
                            width={"230px"}
                            height={"230px"}
                        />
                        <div>
                            <p>Atualizando os seus dados! Por favor aguarde....</p>
                        </div>
                    </Form>
                ) : (
                    <Form>
                        <Button
                            type='button'
                            onClick={handleSubmit(handleSubmitForm)}
                        >
                            Atualizar
                        </Button>

                        <div>
                            <TextField
                                label="Bairro"
                                variant='standard'
                                error={errors.neighborhood && Boolean(errors.neighborhood.message)}
                                helperText={errors.neighborhood && errors.neighborhood.message}
                                {...register("neighborhood")}
                                name="neighborhood"
                            />
                            <TextField
                                label="Logradouro"
                                variant='standard'
                                error={errors.publicplace && Boolean(errors.publicplace.message)}
                                helperText={errors.publicplace && errors.publicplace.message}
                                {...register("publicplace")}
                                name="publicplace"
                            />
                            <TextField
                                label="Estado"
                                variant='standard'
                                error={errors.state && Boolean(errors.state.message)}
                                helperText={errors.state && errors.state.message}
                                {...register("state")}
                                name="state"
                            />
                            <TextField
                                label="Localidade"
                                variant='standard'
                                error={errors.locality && Boolean(errors.locality.message)}
                                helperText={errors.locality && errors.locality.message}
                                {...register("locality")}
                                name="locality"
                            />
                            <TextField
                                label="Número"
                                variant='standard'
                                error={errors.number && Boolean(errors.number.message)}
                                helperText={errors.number && errors.number.message}
                                {...register("number")}
                                name="number"
                            />
                        </div>
                    </Form>
                )
            }

        </Container>
    )
}