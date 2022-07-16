import React, {useState} from "react";
import { slides } from "./data";
import leftArrow from "../../images/left-arrow.svg"
import rightArrow from "../../images/right-arrow.svg"
import testimonial2 from "../../images/testimonial2.jpg"

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        let newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide)
    }

    const prevSlide = () => {
        let newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide)
    }

    return (
        <main className="main">
            <section className="testimonial section container">
                <h2 className="section__title">testimonials</h2>
                <div className="testimonial__container">
                    <div className="testimonial__slider">
                        <div className="slider__wrapper">
                            {slides.map((slide, index) => {
                                const { id, quote, description, date, image, name, detail } = slide;

                                let position = "next-slide";

                                if (index === currentSlide) {
                                    position = "active-slide"
                                }
                                else if (index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)) {
                                    position = "prev-slide"
                                }

                                return (
                                    <div key={id} className={`testimonial__slide ${position}`}>
                                        <div className="testimonial__quote">
                                            <img src={quote} alt="quote" width="30px" height="30px" />
                                        </div>
                                        <p className="testimonial__description">{description}</p>
                                        <h3 className="testimonial__date">{date}</h3>
                                        <div className="testimonial__profile">
                                            <img src={image} alt="profile pic" className="testimonial__profile-img" />
                                            <div className="testimonial__profile-data">
                                                <span className="testimonila__profile-name">{name}</span>
                                                <span className="testimonial__profile-detail">{detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="slider__button-prev" onClick={prevSlide}>
                            <img src={leftArrow} alt="" width="30px" height="30px"/>
                        </button>
                        <button className="slider__button-next" onClick={nextSlide}>
                            <img src={rightArrow} alt="" width="30px" height="30px"/>
                        </button>
                    </div>
                    <div className="testimonial__images">
                        <div className="testimonial__overlay"></div>
                        <img src={testimonial2} alt="testimonial" className="testimonial__img" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Testimonial;