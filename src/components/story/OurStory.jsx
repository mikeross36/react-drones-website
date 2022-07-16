import React from "react"
import storyimg from "../../images/home-bcg2.jpg"

const OurStory = () => {
    return (
        <main className="main">
            <section className="story section container">
                <div className="story__container">
                    <div className="story__data">
                        <h2 className="section__title story__section-title">
                            our story
                        </h2>
                        <h1 className="story__title">
                            you can trust our reviews
                        </h1>
                        <p className="story__description">
                            we've flown plenty, and these are the best drones in our tests.
                            since 1982, we have tested and rated thousands of products to help you make better buying decisions.
                        </p>
                        <a href="#home" className="button button--small">discover</a>
                    </div>
                    <div className="story__images">
                        <img src={storyimg} alt="story" className="story__img" />
                        <div className="story__overlay"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OurStory;