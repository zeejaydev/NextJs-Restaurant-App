import Link from "next/link"
import { useState } from "react"
import {FaBars,FaTimes} from 'react-icons/fa'
import styles from '../../styles/Nav.module.css'

export default function Nav(){
    const [show , setShow] = useState(false)
    const button = ()=>{
        setShow(prev=>!prev)
      }
    return(
        <>
            {/* MOBILE NAV */}
            <nav className='flex justify-between py-8 px-5 items-center smd:hidden'>
                <div>
                <h1 className={styles.mobileLogo}>Restaurant</h1>
                </div>
                <button onClick={button}>
                <FaBars style={{fontSize:30,color:'white'}}/>
                </button>
            </nav>

            {/* MOBILE DRAWER */}
            <div className={
                show ? "w-1/2 backdrop-blur-xl bg-white/60 fixed min-h-screen z-50 right-0 top-0 smd:hidden" :
                "hidden w-1/2 backdrop-blur-xl bg-white/60 fixed min-h-screen z-50 right-0 smd:hidden "
                }>
                <div className={styles.close}>
                    <button onClick={()=>setShow((prev)=>!prev)}>
                        <FaTimes  />
                    </button>
                </div>
                <ul className="block text-center pt-3">
                    <li className={styles.mlinks}><Link href='/'><a>Home</a></Link></li>
                    <li className={styles.mlinks}><Link href='/menu'><a>Menu</a></Link></li>
                    <li className={styles.mlinks}> <Link href='/location'><a>Location</a></Link></li>
                    <li className={styles.mlinks}><Link href='/order'><a>Order-Online</a></Link></li>
                </ul>
            </div>
            
            {/* BIG SCREENS NAVBAR */}
            <div className='hidden smd:flex pt-10 justify-center items-center'>
                <ul className='flex'>
                    <li className={styles.links}><Link href='/'><a>Home</a></Link></li>
                    <li className={styles.links}><Link href='/menu'><a>Menu</a></Link></li>
                </ul>
                <h1 className={styles.logo}>Restaurant</h1>
                <ul className='flex'>                
                <li className={styles.links}><Link href='/location'><a>Location</a></Link></li>
                <li className={styles.links}><Link href='/order'><a>Order-Online</a></Link></li>
                </ul>
            </div>            
        </>
    )
}