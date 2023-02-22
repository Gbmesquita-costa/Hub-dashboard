import React, { useEffect, useState } from 'react'

import Pagination from '@mui/material/Pagination'
import { Axios } from '../../services/api'

import { Container, UserTable } from './styles'

interface BusinessWithProps {
    values: [{
        id:         string;
        name:       string;
        cnpj:       string;
        created_at: string;
    }]

    xtotalcount: [{
        id:         string;
        name:       string;
        cnpj:       string;
        created_at: string;
    }]
}

interface XtotalAcountWithProps {
    id:         string;
    name:       string;
    cnpj:       string;
    created_at: string;
}

interface BusinessFormatData {
    id:   string;
    name: string;
    cnpj: string;
    date: string;
}

export function Business() {
    const [page, setPage] = useState<any>(1)

    const [business, setBusiness] = useState<BusinessFormatData[]>([])
    const [totalCount, setTotalCount] = useState<XtotalAcountWithProps[]>([])

    useEffect(() => {
        Axios<BusinessWithProps>({
            method: "get", withCredentials: true, url: "/getbusiness", params: {
                page: page
            }
        }).then((response) => {

            function formatDate(event: string) {
                return new Date(event).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                })
            }

            const gettingBusiness = response.data.values.map((business) => {
                return {
                    id: business.id,
                    name: business.name,
                    cnpj: business.cnpj,
                    date: formatDate(business.created_at),
                    isComplete: false
                }
            })

            setBusiness(gettingBusiness)
            setTotalCount(response.data.xtotalcount)
        })
    }, [page])

    function handlePage (p: any, n: any) {
        setPage(n)
    }

    return (
        <Container>
            <h1>Empresas</h1>
            <UserTable>
                <thead>
                    <tr>
                        <th></th>
                        <th>Empresa</th>
                        <th>CNPJ Empresa</th>
                        <th>Data de criação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        business?.map((business) => (
                            <tr key={business.id}>
                                <td></td>
                                <td>
                                    <strong>{business.name}</strong>
                                </td>
                                <td>
                                    <strong>{business.cnpj}</strong>
                                </td>
                                <td>
                                    <strong>{business.date}</strong>
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
