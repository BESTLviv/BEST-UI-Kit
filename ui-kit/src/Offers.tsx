import {ReactNode } from "react"

interface Props{
    children: ReactNode;
    title: string
}


export default function Offers({children, title}: Props) {
    return (
        <section className="offers">
            <div className="offers__container">
                <h2 className="offers__title">{title}</h2>
                <div className="offers__items items-offer">
               {children}

                </div>
                
            </div>
        </section>
    )
}

