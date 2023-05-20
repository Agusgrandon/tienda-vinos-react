import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="d-flex">
                <Link className="p-2" to='/'><i class="bi bi-facebook"></i></Link>
                <Link className="p-2" to='/'><i class="bi bi-instagram"></i></Link>
                <Link className="p-2" to='/'><i class="bi bi-whatsapp"></i></Link>
                <Link className="p-2" to='/'><i class="bi bi-wechat"></i></Link>
            </div>
            <spam className="spam p-2 flex-grow-1">@copyright2023</spam>
        </footer>
    </>

}