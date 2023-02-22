import React from "react"

import { CircularProgress } from "@mui/material"

import { Steps } from "../steps/steps";
import Business from "./pages/business/business";
import CepLocal from "./pages/local/CepLocal";

import Responsible from "./pages/responsible/responsible";
import Address from "./pages/local/address/address";
import { ResponsibleAddress } from "./pages/responsible/address/responsibleAddress";

import { Content } from "../content/content"
import { UseContext } from "../../context/hook";
import { Form, NameProps, StepsProps, FormContainer } from "./styles";

export function InicialForm(): JSX.Element {
    const { page, loadingForm } = UseContext()

    const steps = [
        { index: 1, name: "Empresa" },
        { index: 2, name: "CEP Local" },
        { index: 3, name: "Endereço-Local" },
        { index: 4, name: "Responsável" },
        { index: 5, name: "CEP Responsável" },
        { index: 6, name: "Endereço-Responsável" },
    ]

    function SwitchForm(): JSX.Element | undefined {
        switch (page) {
            case 1:
                return <Business />
            case 2:
                return <CepLocal />
            case 3:
                return <Address />
            case 4:
                return <Responsible />
            case 5:
                return <CepLocal />
            case 6:
                return <ResponsibleAddress />
            default:
                return <Business />
        }
    }

    return (
        <div className="main">
            <Form>
                <NameProps>
                    {
                        steps.map((items) => {
                            if (items.index === page) {
                                return (
                                    <div key={items.index} style={{ display: "flex", alignItems: "center" }}>
                                        <h1>{items.name}</h1>

                                        {
                                            loadingForm && (
                                                <CircularProgress style={{ marginLeft: "30px" }} color="warning" size={30} />
                                            )
                                        }

                                    </div>
                                )
                            }
                        })
                    }
                </NameProps>

                <StepsProps style={{ display: "flex", flexDirection: "row" }}>
                    {
                        steps.map((item) => (
                            <Steps key={item.index} index={item.index} active={page === item.index} />
                        ))
                    }
                </StepsProps>
                
                <FormContainer>
                    {SwitchForm()}
                </FormContainer>

            </Form>
            <Content />
        </div>
    )
}