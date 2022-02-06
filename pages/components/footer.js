import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import grub from '../../public/grub.png'
import uber from '../../public/uber.svg'
import doordash from '../../public/doordash.png'
import {FaFacebookF,FaInstagram} from 'react-icons/fa'

export default function Footer(){
    return(
        <section className={styles.footer}>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
          <div>
            <h1 className='pt-10 text-xl'>Restaurant name</h1>
            <address className='py-1'>4187 Benedum Drive<br/>  Wappingers Falls<br/> NY, 12590</address>
    
              <a href="tel:+845-298-2447">845-298-2447</a>
            <div className='pt-3'>
            <h2>Follow us on</h2>
            <ul className='flex justify-center gap-3'> 
              <li className={styles.facebook}><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF style={{fontSize:25,margin:5}}/></a></li>
              <li className={styles.insta}><a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram style={{fontSize:30,margin:5}}/></a></li>
            </ul>
            </div>
          </div>
          <div>
            <h2 className='pt-10'>Hours</h2>
            <ol className='py-1'>
              <li>Monday | 10:00am - 8:00pm</li>
              <li>Tuesday | 10:00am - 8:00pm</li>
              <li>Wedensday | 10:00am - 8:00pm</li>
              <li>Thursday | 10:00am - 8:00pm</li>
              <li>Friday | 10:00am - 8:00pm</li>
              <li>Saturday | Closed</li>
              <li>Sunday | Closed</li>
            </ol>
          </div>
          <div className='block'>
            <h2 className='pt-10'>Delivery</h2>
            <div className='py-1'>
            <Image
              src={grub}
              width={150}
              height={42}
            />
            </div>
            <br/>
            <div className='py-1'>
            <Image
              src={uber}
              width={150}
            />
            </div>
            <br/>
            <div className='py-1'>
            <Image
              src={doordash}
              width={150}
            />
            </div>
          </div>
        </div>
      </section>
    )
}