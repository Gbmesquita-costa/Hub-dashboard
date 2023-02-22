import React from "react"

import Lottie from "react-lottie"

import Location from "../../animations/location.json"
import { ImagesComponent } from "./Images/images"

import { Banner } from "./styles"

export function Content () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Location,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        } 
    }

    return (
        <Banner>
            <div>
                <Lottie 
                    width={"230px"}
                    height={"230px"}
                    style={{ marginTop: "50px", textAlign: "center" }}
                    options={defaultOptions}
                />
            </div>

            <div>
                <h1>Seu negócio encontrado em toda a internet.</h1>
            </div>

            <div>
                <span>9.000 casos de sucesso! entre para esse time!</span>
            </div>

            <ImagesComponent/>
        </Banner>
    )
}