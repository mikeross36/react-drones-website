import React from "react";
import mailbox from "../../images/mail-box.svg"

const Subscribe = () => {
    return (
        <section className="subscribe section container">
            <h2 className="section__title">subscribe form</h2>
            <div className="subscribe__bg">
                <div>
                    <h2 className="subscribe__title">subscribe to <br />our newsletter</h2>
                    <p className="subscribe__description">
                        lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        placeat animi voluptatem assumenda cumque error odit accusamus, 
                        dolorum, sit porro tempora est repellendus quaerat aliquid nobis dolore.
                    </p>
                </div>
                <form action="" className="subscribe__form">
                    <img src={mailbox} alt="amilbox icon" width="80px" height="80px" />
                    <div>
                        <input type="email" placeholder="enter email..." className="subscribe__input" />
                        <button className="button">subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Subscribe;