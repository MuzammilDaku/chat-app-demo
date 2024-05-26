import Image from "next/image"
import Link from "next/link"
import styles from './navbar.module.css'
export default function Navbar () {
    return (
        <div className="px-2 ">
            <div className="d-flex justify-content-between ">
                <div className="header-image">
                    <Image src={'/makb.png'} alt="Logo" height={90} width={100}></Image>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                    <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>Home</Link>
                    <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>Blog</Link>
                    <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>Contact</Link>
                    <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>About</Link>
                    <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>Pricing</Link>

                </div>
                <div className="d-flex justify-content-between align-items-center">
                <Link className={`text-decoration-none mx-2 text-dark ${styles['nav-link']}`} href={'/'}>Login</Link>
                <button className="btn btn-warning mx-2 text-light">Get Started Free</button>
  
                </div>
            </div>
        </div>
    )
}
