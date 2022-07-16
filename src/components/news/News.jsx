import React from "react";
import { items } from "./data"
import {socials} from "./data"

const News = () => {
    return (
        <main className="main" id="news">
            <section className="new section container">
                <h2 className="section__title">new arrivals</h2>
                <div className="new__container">
                    {items.map(item => {
                        const { id, tag, image, title, price } = item;
                        return (
                            <article key={id} className="new__card">
                                <span className="new__tag">{tag}</span>
                                <img src={image} alt="new" className="new__img" />
                                <div className="new__data">
                                    <h3 className="new__title">{title}</h3>
                                    <span className="new__price">{price}</span>
                                </div>
                                <ul className="new__social">  
                                    {socials.map(social => {
                                        const { id, url, icon } = social;
                                        return (
                                            <li key={id}>
                                                <a href={url} className="new__social-link" target="_blank" rel="noreferrer">
                                                    <img src={icon} alt="social icon" width="30px" height="30px"/>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </article>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default News;