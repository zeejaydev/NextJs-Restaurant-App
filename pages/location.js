import styles from '../styles/Location.module.css';
import Footer from './components/footer';
import Nav from './components/navBar'
import FloatingButton from './components/floatingButton'

export default function Location (){
    return(
       <div>
           <div className={styles.bg}>
                <Nav />
                <h1 className={styles.title}>VISIT US</h1>
           </div>

           <div className='container mx-auto max-w-screen-lg pt-2'>
                
                <div className='grid grid-cols-1 gap-1 md:grid-cols-2 mad:gap-5'>
                    <div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12115.310782010944!2d-74.1679366302246!3d40.611625100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24c5aaa944d4b%3A0x54c8501a9277e236!2sChili&#39;s%20Grill%20%26%20Bar!5e0!3m2!1sen!2sus!4v1643651295447!5m2!1sen!2sus" 
                            style={{position: "relative", height: 450, width: "100%", padding:10}}
                            loading="lazy">

                        </iframe>
                    </div> 
                    <div className='flex justify-center items-center p-5'>
                       <div>    
                            <h1>Restaurant Name</h1>
                            <address className='py-1'>4187 Benedum Drive<br/>  Wappingers Falls<br/> NY, 12590</address>
                            <h2>Phone Number</h2>
                            <a href="tel:+845-298-2447">845-298-2447</a>
                       </div>
                    </div>
                </div>
           </div>
            <FloatingButton/>
           <Footer/>
       </div>
    )
}