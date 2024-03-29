import React, {useState, useEffect} from "react"
import navlogo from "../../images/drone-logo.svg"
import closebtn from "../../images/close-btn.svg"
import { links } from "./data"
import shoppingCart from "../../images/shopping-cart2.svg"
import menubtn from "../../images/menu-btn.svg"
import searchIcon from "../../images/search-icon.svg"

const Header = () => {
    const [showMobMenu, setShowMobMenu] = useState(false)
    const [showSearchForm, setShowSearchForm] = useState(false)
    const [srollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY >= 50) {
                setScrollHeader(true)
            }
            else {
                setScrollHeader(false)
            }
        };
        window.addEventListener("scroll", scroll)

        return () => {
            window.removeEventListener("scroll", scroll)
        }
    }, [])

    const openMobMenu = () => {
        setShowMobMenu(true)
        if (showSearchForm) {
            setShowSearchForm(false)
        }
    }

    const closeMobMenu = () => {
        setShowMobMenu(false)
    }

    const toggleSearchForm = () => {
        setShowSearchForm(!showSearchForm)
    }

    return (
        <header className={`header ${srollHeader && "scroll-header"}`} id="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">
                    <img src={navlogo} alt="nav logo" width="50px" height="50px"/>
                </a>
                <div className={`nav__menu ${showMobMenu && "show-menu"}`}>
                    <ul className="nav__list">
                        {links.map(link => {
                            const { id, url, text } = link;
                            return (
                                <li key={id} className="nav__item" onClick={closeMobMenu}>
                                    <a href={url} className="nav__link">
                                        {text}
                                    </a>
                                </li>
                            )
                       })}
                    </ul>
                    <button className="nav__close" onClick={closeMobMenu}>
                       <img src={closebtn} alt="close btn" width="40px" height="40px"/>
                    </button>
                </div>
                <menu className="nav__btns">
                    <button className="nav__search" onClick={toggleSearchForm}>
                       <img src={searchIcon} alt="search icon" width="30px" height="30px"/>
                    </button>
                    <button className="nav__shop">
                       <img src={shoppingCart} alt="shopping cart" width="40px" height="40px"/>
                    </button>
                    <button className="nav__toggle" onClick={openMobMenu}>
                        <img src={menubtn} alt="menu btn" width="30px" height="30px"/>
                    </button>
                </menu>
                <div className={`nav__search-form ${showSearchForm && "active-form"}`}>
                    <input type="search" className="nav__search-input" placeholder="search here..."/>
                </div>
            </nav>
        </header>
    )
}

export default Header;