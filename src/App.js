import React from "react"
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Featured from "./components/featured/Featured";
import OurStory from "./components/story/OurStory";
import Products from "./components/products/Products";
import Testimonial from "./components/testimonial/Testimonial";
import News from "./components/news/News";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Featured />
      <OurStory />
      <Products />
      <Testimonial />
      <News />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App;