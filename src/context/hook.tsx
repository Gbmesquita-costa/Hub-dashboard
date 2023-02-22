import React, { useContext, createContext, ReactNode, useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import swal from "sweetalert2"

import Point from "../effects/ponto.mp4"
import { Axios } from "../services/api";

interface ContextProps {
    children: ReactNode
}

export interface HandleFormProps {
    empresa:                     string;
    cnpj:                        string;
    descricao:                   string;
    nome:                        string;
    cep:                         string;
    bairro:                      string;
    logradouro:                  string;
    localidade:                  string;
    numero:                      string;
    uf:                          string;
    name_responsible:            string;
    name_secondary_responsible:  string;
    responsible_telephone:       string;
    cep_information:             string;
    bairro_responsible:          string;
    logradouro_responsible:      string;
    localidade_responsible:      string;
    uf_responsible:              string;
    numero_responsible:          string;
}

interface BusinessProps {
    empresa:   string;
    descricao: string;
    cnpj:      string;
}

interface LocalProps {
    cep:        string;
    bairro:     string;
    logradouro: string;
    localidade: string;
    numero:     string;
    uf:         string;
}

interface ResponsibleProps {
    name_responsible:           string;
    name_secondary_responsible: string;
    responsible_telephone:      string;
}

interface ResponsibleInformation {
    cep_information:        string;
    bairro_responsible:     string;
    logradouro_responsible: string;
    localidade_responsible: string;
    uf_responsible:         string;
    numero_responsible:     string;
}

interface ContextWithProps {
    page:  number;
    setPage:  any;
    count: number;
    setCount: any;
    NextPage: () => void;
    PreviousPage: () => void;
    HandleForm: (event: HandleFormProps) => void;
    handleUser: (event: UserWithProps) => Promise<void>;
    LogOut: () => void;
    businessValues:             BusinessProps;
    setBusinnesValues:                    any;
    localValues:                   LocalProps;
    setLocalValues:                       any;
    responsibleValues:       ResponsibleProps;
    setResponsibleValues:                 any;
    informationValues: ResponsibleInformation;
    setInformationValues:                 any;
    isLoading:                        boolean;
    loadingForm:                      boolean;
    user:                         User | null;
    isAuthenticated:                  boolean;
    play:                             boolean;
    setPlay:                              any;
}

interface UserWithProps {
    name:     string;
    email:    string;
    password: string;
}

interface LoginUserProps {
    tokenSign:    string;
    user: {
        name:     string;
        email:    string;
        password: string;
    }
    message:      Error;
}

interface UserWithProps {
    id?:      string;
    name:     string;
    email:    string; 
    password: string;
}

interface User {
    email: string;
    name:  string;
}

export const createContextApi = createContext({} as ContextWithProps)

export function Context ({ children }: ContextProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loadingForm, setLoadingForm] = useState<boolean>(false)
    const [play, setPlay] = useState<boolean>(false)

    const [user, setUser] = useState<User | null>(null)
    const isAuthenticated = !!user
    
    const navigate = useNavigate()
    
    function LogOut(): void {
        destroyCookie(undefined, "user_token")
        navigate("/")
    }

    useEffect(() => {
        const { "user_token": token } = parseCookies() 
        
        if (token) {
            Axios<UserWithProps>({ 
                method: "get", 
                withCredentials: true, 
                url: "/user/user_id" 
            }).then((response) => {
                const { email, name } = response.data
                setUser({ email: email, name: name})
            })
        }
    }, [])

    async function handleUser(event: UserWithProps): Promise<void> {
        try {
            setIsLoading(true)

            setTimeout(async () => {
                const userLogin = {
                    name: event.name,
                    email: event.email,
                    password: event.password
                }

                const { data } = await Axios<LoginUserProps>({
                    method: "post",
                    withCredentials: true,
                    url: "/user/authenticate",
                    data: userLogin
                })

                if (data.message) {
                    swal.fire("Erro", `${data.message}`, "error")
                    setIsLoading(false)
                }  

                setIsLoading(false)
                setPlay(true)
                setUser(data.user)

                swal.fire("Sucesso", `Seja bem-vindo(a) ${data.user.name} 😊`, "success")
                
                setCookie(undefined, "user_token", data.tokenSign, {
                    maxAge: 60 * 60 * 1, // 1 hour
                })
                
                Axios.defaults.headers["Authorization"] = `Bearer ${data}`
                
                navigate("/dashboard")
            }, 2000)

        } catch (error) {
            swal.fire("Erro", `${error}`, "error")
        }
    }

    const [page, setPage] = useState(1)
    const [count, setCount] = useState(3)

    const [ businessValues, setBusinnesValues ] = useState({} as BusinessProps)
    const [ localValues, setLocalValues ] = useState({} as LocalProps)

    const [ responsibleValues, setResponsibleValues ] = useState<ResponsibleProps>({} as ResponsibleProps)
    const [ informationValues, setInformationValues ] = useState<ResponsibleInformation>({} as ResponsibleInformation)

    function NextPage(): void {
        setPage(page + 1)
    }
        
    function PreviousPage (): void {
        setPage(page - 1)
    }

    async function HandleFormSubmit (event: ResponsibleInformation): Promise<void> {
        try {
            setLoadingForm(true)

            const audio = new Audio()
            audio.src = Point

            setTimeout(async () => {
                const bussinessInformation = {
                    name: businessValues.empresa,
                    cnpj: businessValues.cnpj, 
                    description: businessValues.descricao 
                }

                const localInformation = {
                    neighborhood: localValues.bairro, 
                    publicplace: localValues.logradouro, 
                    state: localValues.uf, 
                    locality: localValues.localidade, 
                    number: localValues.numero 
                }

                const responsibleInformation = {
                    principal_name: responsibleValues.name_responsible, 
                    secondary_name: responsibleValues.name_secondary_responsible, 
                    telephone: responsibleValues.responsible_telephone
                }

                const responsibleAddress = {
                    neighborhood: event.bairro_responsible, 
                    publicplace: event.logradouro_responsible, 
                    state: event.uf_responsible, 
                    locality: event.localidade_responsible, 
                    number: event.numero_responsible
                }

                await Axios({ method: "post", withCredentials: true, url: "/business", data: bussinessInformation })
                await Axios({ method: "post", withCredentials: true, url: "/local", data: localInformation, params: {
                    cnpj: bussinessInformation.cnpj
                }})
                await Axios({ method: "post", withCredentials: true, url: "/responsible", data: responsibleInformation, params: {
                    cnpj: bussinessInformation.cnpj, 
                    state: localInformation.state, 
                    locality: localInformation.locality, 
                    number: localInformation.number
                }})
                await Axios({ method: "post", withCredentials: true, url: "/address", data: responsibleAddress, params: {
                    principal_name: responsibleInformation.principal_name
                }})

                audio.play()
                setLoadingForm(false)

                const pressButton = swal.fire(
                    "Sucesso", 
                    `Empresa cadastrada com sucesso! Obrigado por embarcar conosco 😃🚀`,
                    "success"
                )

                if ((await pressButton).isConfirmed) {
                    navigate("/dashboard/business")
                }
                
        }, 2000)
        } catch (error) {
            swal.fire("Erro", `${error}`, "error")
        }
    }

    function HandleForm(event: HandleFormProps): void | false {
        switch (page) {
            case 1 : 
                setBusinnesValues(event)
                break;
            case 2 : 
                setLocalValues(event)
                break;
            case 3 : 
                setLocalValues(event)
                break;
            case 4 : 
                setResponsibleValues(event)
                break;
            case 5 : 
                setInformationValues(event)
                break;
            case 6 : 
                HandleFormSubmit(event)
                break;
        }

        return page <= 5 ? NextPage() : false
    }

    return (
        <createContextApi.Provider 
            value={{ 
                page, setPage, count, setCount, NextPage, 
                PreviousPage, HandleForm, businessValues, 
                setBusinnesValues, localValues, setLocalValues,
                responsibleValues, setResponsibleValues, isLoading,
                handleUser, user, isAuthenticated, 
                LogOut, play, setPlay, informationValues, 
                setInformationValues, loadingForm
            }}>
            {children}
        </createContextApi.Provider>
    )
}

export function UseContext () {
    const hook = useContext(createContextApi)
    return hook
}