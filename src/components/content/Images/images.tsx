import React from 'react'
import { Images } from '../styles'

type ImageWithProps = {
    folder: string;
    name: string;
}

const images = [
    {folder: "/assets/images/google.png", name: "Google"},
    {folder: "/assets/images/exame.png", name: "Exame"},
    {folder: "/assets/images/negocios.png", name: "Negocios"},
    {folder: "/assets/images/tilt.png", name: "Tilti"},
    {folder: "/assets/images/Tiinside.png", name: "Tiinside"}
]

export function ImagesComponent() {
    return (
        <Images>
            {
                images.map((image: ImageWithProps) => (
                    <div key={image.name}>
                        <img src={image.folder} alt={image.name} />
                    </div>
                ))
            }
        </Images>
    )
}
