"use client";
import Image from "next/image"
import Link from "next/link"
import styles from './navbar.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navbars() {
    return (
        <Navbar expand="lg" >
            <div className="container">
                <Navbar.Brand href="#home">
                    <Image src={'/makb.png'} alt="Logo" height={90} width={100}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end align-items-center"  id="basic-navbar-nav">
                    <Nav>
                        <div className=" class-nav">
                        <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>Home</Link>
                        <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>Blog</Link>
                        <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>Contact</Link>
                        <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>About</Link>
                        <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/pricing'}>Pricing</Link>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/auth/login'}>Login</Link>
                            <button className="btn btn-warning mx-2 text-light">Get Started Free</button>

                        </div>
                        </div>
                    </Nav>
                   
                </Navbar.Collapse>
            </div>
        </Navbar>

    )
}
