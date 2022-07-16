import React from "react"
import bannerbcg from "../../images/home-bcg5.jpg"
import Button from "../buttons/Button"

const Banner = () => {
    return (
        <main className="main">
            <section className="banner" id="banner">
                <div className="banner__container container">
                    <div className="banner__img-bcg">
                        <img src={bannerbcg} alt="banner" className="banner__img"/>
                    </div>
                    <div className="banner__social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="banner__social-link">facebook</a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="banner__social-link">twitter</a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="banner__social-link">instagram</a>
                    </div>
                    <div className="banner__data">
                        <h1 className="banner__title">the best drones<br />for 2022</h1>
                        <p className="banner__description">
                            a high-quality quadcopter is a serious investment, and an easy way to add production value to a film project or get a unique view for your travel vlog.
                        </p>
                        <div className="banner__btns">
                            <a href="#banner" className="button button--gray button--small">
                                discover
                            </a>
                            <Button>go there</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Banner;