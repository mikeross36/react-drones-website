import nextId from "react-id-generator"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

export const footerSocials = [
    {
        id: nextId(),
        url: "https://www.facebook.com/",
        image: facebook
    },
    {
        id: nextId(),
        url: "https://www.twitter.com/",
        image: twitter
    },
    {
        id: nextId(),
        url: "https://www.instagram.com/",
        image: instagram
    },
]