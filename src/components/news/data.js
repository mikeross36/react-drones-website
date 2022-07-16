import nextId from "react-id-generator"
import drone6 from "../../images/drone6.png"
import drone8 from "../../images/drone8.png"
import drone9 from "../../images/drone9.png"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

export const items = [
    {
        id: nextId(),
        tag: "new",
        image: drone6,
        title: "some drone",
        price: "980 €",
    },
    {
        id: nextId(),
        tag: "new",
        image: drone8,
        title: "some drone",
        price: "980 €",
    },
    {
        id: nextId(),
        tag: "new",
        image: drone9,
        title: "some drone",
        price: "980 €",
    },
    {
        id: nextId(),
        tag: "new",
        image: drone6,
        title: "some drone",
        price: "980 €",
    },
]

export const socials = [
    {
        id: nextId(),
        url: "https://www.facebook.com/",
        icon: facebook
    },
    {
        id: nextId(),
        url: "https://twitter.com/",
        icon: twitter
    },
    {
        id: nextId(),
        url: "https://www.instagram.com/",
        icon: instagram
    },
]