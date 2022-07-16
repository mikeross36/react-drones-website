import nextId from "react-id-generator"
import featured3 from "../../images/featured3.png"
import featured4 from "../../images/featured4.png"
import featured5 from "../../images/featured5.png"

export const drones = [
    {
        id: nextId(),
        tag: "sale",
        image: featured3,
        name: "some drone",
        price: "1050 €"
    },
    {
        id: nextId(),
        tag: "sale",
        image: featured4,
        name: "some drone",
        price: "1050 €"
    },
    {
        id: nextId(),
        tag: "sale",
        image: featured5,
        name: "some drone",
        price: "1050 €"
    },
]