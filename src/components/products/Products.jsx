import React from "react";
import { products } from "./data";

const Products = () => {
    return (
        <main className="main">
            <section className="products section container" id="products">
                <h2 className="section__title">products</h2>
                <div className="products__container">
                    {products.map(product => {
                        const { id, image, title, price } = product;
                        return (
                            <article key={id} className="products__card">
                                <img src={image} alt="product" className="products__img" />
                                <h3 className="products__title">{title}</h3>
                                <span className="products__price">{price}</span>
                                <a href="#home" className="button button--gray button--small">
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

export default Products;