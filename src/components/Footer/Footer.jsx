import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="divFooter">
                <Link className="palabraFooter" to='/'><p>Facebook</p></Link>
                <Link className="palabraFooter" to='/'><p>Instagram</p></Link>
                <Link className="palabraFooter" to='/'><p>Whatsapp</p></Link>
                <Link className="palabraFooter" to='/'><p>Contacto</p></Link>
                <spam className="spam">@copyright2023</spam>
            </div>
        </footer>
    </>

}