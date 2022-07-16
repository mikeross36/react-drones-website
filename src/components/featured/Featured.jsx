import React from "react"
import {drones} from "./data"

const Featured = () => {
    return (
        <main className="main" >
            <section className="featured section container" id="featured">
                <h2 className="section__title">featured</h2>
                <div className="featured__container">
                    {drones.map(drone => {
                        const { id, tag, image, name, price } = drone;
                        return (
                            <article key={id} className="featured__card">
                                <span className="featured__tag">{tag}</span>
                                <img src={image} alt="featured" className="featured__img" />
                                <div className="featured__data">
                                    <h3 className="featured__title">{name}</h3>
                                    <span className="featured__price">{price}</span>
                                </div>
                                <a href="#banner" className="button featured__button button--gray button--small">
                                    discover
                                </a>
                            </article>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Featured;