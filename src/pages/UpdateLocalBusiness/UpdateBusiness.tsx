import React, { useEffect, useState } from "react"

import Pagination from '@mui/material/Pagination'
import { Checkbox } from "@mui/material";

import Button from "@mui/material/Button";
import Swal from "sweetalert2";

import { Axios } from '../../services/api'
import { Container, UserTable } from './styles'
import { NavigateOptions, useNavigate } from "react-router";

interface BusinessLocalWithProps {
    values: [{
        id?:          string;
        neighborhood: string;
        publicplace:  string;
        state:        string;
        locality:     string;
        number:       string;
        created_at:   string;
    }]

    xtotalcount: [{
        id?:          string;
        neighborhood: string;
        publicplace:  string;
        state:        string;
        locality:     string;
        number:       string;
        created_at:   string;
    }]
}

interface XtotalAcountWithProps {
    id?:          string;
    neighborhood: string;
    publicplace:  string;
    state:        string;
    locality:     string;
    number:       string;
    created_at:   string;
}

interface FormatBusinessLocal {
    id?:          string;
    neighborhood: string;
    publicplace:  string;
    state:        string;
    locality:     string;
    number:       string;
    date:         string;
    isComplete:  boolean;
}

export function UpdateBusiness() {
    const [page, setPage] = useState<any>(1)

    const [ localBusiness, setLocalBusiness ] = useState<FormatBusinessLocal[]>([])
    const [ totalCount, setTotalCount ] = useState<XtotalAcountWithProps[]>([])
    const navigate = useNavigate()
    
    useEffect(() => {
        Axios<BusinessLocalWithProps>({ method: "get", withCredentials: true, url: "/getlocal", params: {
            page: page
        }}).then((response) => {

            function formatDate (event: string) {
                return new Date(event).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                })
            }
            
            const gettingBusiness = response.data.values.map((local) => {
                return {
                    id: local.id,
                    neighborhood: local.neighborhood,
                    publicplace: local.publicplace,
                    state: local.state,
                    locality: local.locality,
                    number: local.number,
                    date: formatDate(local.created_at),
                    isComplete: false
                }
            })

            setLocalBusiness(gettingBusiness)
            setTotalCount(response.data.xtotalcount)
        })
    }, [page])

    function IsChecked (business: FormatBusinessLocal) {
        const businessLocal = localBusiness.map((value) => {
            return value.id === business.id ? {
                ...value,
                isComplete: !value.isComplete
            }: value
        })

        setLocalBusiness(businessLocal)
    }

    function UpdateLocal(business: FormatBusinessLocal): NavigateOptions | any {
        if (!business.isComplete) {
            Swal.fire("Aviso", "Clique na caixinha CheckBox para atualizar! 😃", "warning")
            return
        }

        return navigate(`/dashboard/${business.id}`)
    }

    function handlePage (p: any, n: any) {
        setPage(n)
    }

    return (
        <Container>
            <h1>Empresas-Local</h1>
            <UserTable>
                <thead>
                    <tr>
                        <th></th>
                        <th>Bairro</th>
                        <th>Logradouro</th>
                        <th>Estado</th>
                        <th>Localidade</th>
                        <th>Número</th>
                        <th>Data de criação</th>
                        <th>Atualizar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        localBusiness?.map((business) => (
                            <tr key={business.id}>
                                <td>
                                    <Checkbox
                                        checked={business.isComplete}
                                        onClick={() => IsChecked(business)}
                                    />
                                </td>
                                <td>
                                    <strong>{business.neighborhood}</strong>
                                </td>
                                <td>
                                    <strong>{business.publicplace}</strong>
                                </td>
                                <td>
                                    <strong>{business.state}</strong>
                                </td>
                                <td>
                                    <strong>{business.locality}</strong>
                                </td>
                                <td>
                                    <strong>{business.number}</strong>
                                </td>
                                <td>
                                    <strong>{business.date}</strong>
                                </td>   
                                <td>
                                    <Button
                                        onClick={() => UpdateLocal(business)}
                                    >
                                        Atualizar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </UserTable>
            <div>
                {
                    (totalCount.length > 0 && totalCount.length > 10) && (
                        <Pagination page={page} count={Math.ceil(totalCount.length / 10)} onChange={handlePage} color="primary" shape="rounded" />
                    )
                }
            </div>
        </Container>
    )
}
