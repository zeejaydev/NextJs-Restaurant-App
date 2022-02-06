import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import bg from '../public/bg.png'
import kabob from '../public/kabob.jpg'
import falafel from '../public/falafel.jpg'
import shawarma from '../public/shawarma.jpg'
import about from '../public/about.jpg'
import Link from 'next/link'
import Nav from './components/navBar'
import Footer from './components/footer'
import FloatingButton from './components/floatingButton'
export default function Home() {
  const featuerd = [
    {
      name:'DOLMA',
      title: 'Famous Domla',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint autem eius dolores modi ducimus vero cumque reprehenderit',
      image:bg
    },
    {
      name:'KABOB',
      title: 'Shish Kabob',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint autem eius dolores modi ducimus vero cumque reprehenderit',
      image:kabob
    },
    {
      name:'FALAFEL',
      title: 'Falafel Sandwich',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint autem eius dolores modi ducimus vero cumque reprehenderit',
      image:falafel
    },
    {
      name:'SHAWARMA',
      title: 'Shawarma Wraps',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint autem eius dolores modi ducimus vero cumque reprehenderit',
      image:shawarma
    },
  ]
  return (
    <div>
      <Head>
        <title>Restaurant Name</title>
        <meta name="description" content="Welcome to my restaurant" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.bg}>
          
          <Nav/>

          <div className={styles.titleContainer}>
            <br/>
            <br/>
            <h1 className={styles.title}> RESTAURANT</h1>
            <h2 className={styles.subtitle}>Best restaurnt in town</h2>
            <br/>    
            <Link href='/order'><a className='transition ease-in-out delay-150 border border-white py-2 px-5 text-white hover:bg-black hover:border-black hover:-translate-y-1 hover:scale-110 duration-300'>Order Now</a></Link>
          </div>
      </div>

      <div className={styles.container}>
        <div className='grid gird-cols-1 md:grid-cols-2 gap-5 py-10 '>
          <div className={styles.aboutSec}>
            <h2 className={styles.about}>OUR STORY</h2>
            <p className={styles.aboutUs}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ipsam fugiat dolore quae provident aliquid facere aspernatur non suscipit dicta error, 
              quia voluptatum sequi laboriosam et dignissimos quidem nisi? Autem, illum.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ipsam fugiat dolore quae provident aliquid facere aspernatur non suscipit dicta error, 
              quia voluptatum sequi laboriosam et dignissimos quidem nisi? Autem, illum.
            </p> 
          </div>
          <Image
            src={about}
            width={900}
            height={600}
          />
        </div>
        
        <hr className='divide-solid' />
        
        <div className='py-10 '>
          <h1 className={styles.header}>Featuerd Food</h1>
          
         <div className='grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 '>

            {
              featuerd.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className={styles.img}>
                      <Image
                        src={item.image}
                        width={350}
                        height={200}
                      />
                    </div>
                    <h2 className='bg-black text-white w-20 text-center m-auto z-10 relative uppercase text-xs'>{item.name}</h2>
                    <h3 className='text-center py-3 text-lg'>{item.title}</h3>
                    <p className='text-center text-xs px-5'>{item.text}</p>
                  </div>
                )
              })
            }
         </div>
        </div>
      </div>
          <FloatingButton/>
      <Footer/>
    </div>
  )
}
