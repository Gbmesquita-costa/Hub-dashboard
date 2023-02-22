import React from 'react'

import { LoginContainer, Form, SignOutComponent, HubImage } from "./styles"
import { Button, CircularProgress, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { UseContext } from '../../context/hook'

interface UserWithProps {
    name:     string;
    email:    string;
    password: string;
}

const userLogin = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória").min(8, "A senha deve conter no mínimo 8 caracteres").max(12, "A senha deve conter no máximo 12 caracteres")
})

export function LoginUser() {
    const { handleUser, isLoading } = UseContext()

    const { register, handleSubmit, formState: { errors } } = useForm<UserWithProps>({
        resolver: yupResolver(userLogin)
    })

    return (
        <LoginContainer>
            <Form>
                <HubImage>
                    <div>
                        <img src="/assets/icons/favicon.png" alt="Hub_Image" />
                        {
                            isLoading ? (
                                <CircularProgress color='secondary' size={30} />
                            ) : (
                                <span>Login</span>
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
                    Login
                </Button>

                <SignOutComponent>
                    <p>Não possui um cadastro?</p>

                    <Link to={"/register"}>
                        <span>
                            Cadastre-se
                        </span>
                    </Link>
                </SignOutComponent>

            </Form>
        </LoginContainer>
    )
}