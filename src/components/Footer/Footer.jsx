import React from 'react'
import './footer.scss'
export const Footer = () => {
    const date = new Date();
    let year = date.getFullYear()
    return (
        <footer className="footer">
            <div className="footer__content">
                <p> Designed and developed by Erik Carcelén </p>
                <p> All rights reserved &copy; { year } </p>
            </div>
        </footer>
    )
}
