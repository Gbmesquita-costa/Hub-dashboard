import React, { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

import swal from "sweetalert2"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom'

import { Axios } from '../../../services/api';
import { RegisterContainer, Form, HubImage } from './styles'

interface UserWithProps {
    name:     string;
    email:    string;
    password: string;
}

const userRegister = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória").min(8, "A senha deve conter no mínimo 8 caracteres").max(12, "A senha deve conter no máximo 12 caracteres")
})

export function Register() {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<UserWithProps>({
        resolver: yupResolver(userRegister)
    })

    async function handleUser(event: UserWithProps): Promise<void> {
        try {
            setIsLoading(true)

            setTimeout(async () => {
                const registeruser = {
                    name: event.name,
                    email: event.email,
                    password: event.password
                }
    
                const { data } = await Axios({ 
                    method: "post", 
                    withCredentials: true, 
                    url: "/user/create", 
                    data: registeruser 
                })
    
                if (data.message) {
                    swal.fire("Erro", `${data.message}`, "error")
                } else {
                    swal.fire("Sucesso", `${data}`, "success")
                }
                
                setIsLoading(false)

            }, 2000)

        } catch (error) {
            swal.fire("Erro", `Erro: ${error}`, "error")
        }
    }

    return (
        <RegisterContainer>
            <Form>
                <HubImage>
                    <div>
                        <Link to={"/"}>
                            <ArrowBackIcon/>
                        </Link>
                        
                        {
                            isLoading ? (
                                <CircularProgress color='secondary' size={30}/>
                            ) : (
                                <span>Register</span>
                            )
                        }
                    </div>
                </HubImage>

                <div>
                    <TextField
                        {...register("name")}
                        label="Usuário"
                        name="name"
                        type={"text"}
                        variant='standard'
                        error={errors.name && Boolean(errors.name)}
                        helperText={errors.name && errors.name.message}
                    />
                    <TextField
                        {...register("email")}
                        name="email"
                        type={"email"}
                        label="E-mail"
                        variant='standard'
                        error={errors.email && Boolean(errors.email)}
                        helperText={errors.email && errors.email.message}
                    />
                    <TextField
                        {...register("password")}
                        name="password"
                        label="Senha"
                        variant='standard'
                        type={"password"}
                        error={errors.password && Boolean(errors.password)}
                        helperText={errors.password && errors.password.message}
                    />
                </div>

                <Button
                    type='button'
                    onClick={handleSubmit(handleUser)}
                >
                    Registre-se
                </Button>
            </Form>
        </RegisterContainer>
    )
}
