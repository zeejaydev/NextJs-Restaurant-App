import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../../styles/OrderPage.module.css'
import Nav from '../../../components/navBar'
import Footer from '../../../components/footer'
import hummus from '../../../public/hummusPlate.png'
import baba from '../../../public/baba.png'
import fattoush from '../../../public/fattoush.png'
import samosa from '../../../public/samosa.png'
import jajik from '../../../public/jajik.png'
import falafel from '../../../public/5falafel.png'
import kabob from '../../../public/kabob.jpg'
import shawarmaPlate from '../../../public/shawarmaplate.png'
import dolma from '../../../public/bg.png'
import quizze from '../../../public/quize.png'
import beryani from '../../../public/beryani.png'
import fasoulya from '../../../public/fas.png'
import shawarmaSand from '../../../public/sand.jpeg'
import kabobSand from '../../../public/kabobsand.png'
import falafelSand from '../../../public/falfelsand.png'
import tikkaSand from '../../../public/tikka.png'
import burgerSand from '../../../public/burger.png'
import Image from 'next/image'
import Link from 'next/link'
import FloatingButton from '../../../components/floatingButton'
import BreadCrumbs from '../../../components/breadcrumbs'

const data = [
    {
        title:'Appetizers',
        items: [
            {
                title:'Hummus Plate',
                desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet fuga odit voluptate exercitationem incidunt et.',
                price:'$7.50',
                img:hummus
            },
            {
                title:'Baba Ganuog',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iste?',
                price:'$7',
                img:baba
            },
            {
                title:'Fattoush',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati eius saepe voluptates porro earum soluta inventore cum neque aperiam.',
                price:'$8',
                img:fattoush
            },
            {
                title:'Sambusak',
                desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam!',
                price:'$6',
                img:samosa
            },
            {
                title:'Jajik',
                desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ratione illum veritatis provident labore. Sunt?',
                price:'$8.5',
                img:jajik
            },
            {
                title:'5 Peice Falafel',
                desc:'Lorem ipsum dolor sit amet.',
                price:'$9',
                img:falafel
            },
        ]
    },
    {
        title:'Plates',
        items:[
            {
                title:'Kabob Platter',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae maiores ipsa ad exercitationem. Porro similique quod qui soluta molestiae.',
                price:'$15',
                img:kabob
            },
            {
                title:'Shawarma Platter',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sint?',
                price:'$11',
                img:shawarmaPlate
            },
            {
                title:'Dolma',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat eaque aperiam ipsum velit soluta!',
                price:'$17',
                img:dolma
            },
            {
                title:'Quzze Plate',
                desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, vel.',
                price:'$25',
                img:quizze
            },
            {
                title:'Fasulya Soup And Rice',
                desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, pariatur.',
                price:'$16',
                img:fasoulya 
            },
            {
                title:'Beryani Plate',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam voluptatibus voluptate aut mollitia aliquam nesciunt dolores velit asperiores pariatur!',
                price:'$22',
               img:beryani
            },
        ]
    },
    {
        title:'sandwiches',
        items:[
            {
                title:'Shawarma Sandwich',
                desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, ab.',
                price:'$10',
                img:shawarmaSand
            },
            {
                title:'Kabob Sandwich',
                desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sapiente quos numquam.',
                price:'$12',
                img:kabobSand
            },
            {
                title:'Tikka Sandwich',
                desc:'Lorem ipsum dolor sit amet.',
                price:'$12',
                img:tikkaSand
            },
            {
                title:'Falafel Sandwich',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                price:'$10',
                img:falafelSand
            },
            {
                title:'Burger',
                desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus autem fugit esse aliquam?',
                price:'$11',
                img:burgerSand
            },
        ]
    },
    {
        title:'sweets',
        items:[]
    },

]

export default function Categories(){
    const router = useRouter()
    const { cat } = router.query
    const obj = data.find((d)=>d.title === cat ? d : null)

    if (!obj){
        return(
            <div>
                <Head>
                    <title>Order-Online</title>
                    <meta name="description" content="My Restaurant Online Order" />
                </Head>
                <div>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                </div>
            </div>
        )
    }
    return(
      <div>
          <Head>
                <title>Order-Online</title>
                <meta name="description" content="My Restaurant Online Order" />
            </Head>
            <div className={styles.bg}>
                <Nav/>
                <h1 className={styles.title}>Place Your Order</h1>
            </div>

            <div className='container max-w-screen-lg mx-auto '>
                <h1 className='text-xl text-center py-5 uppercase'>{cat}</h1>
                <BreadCrumbs catName = {cat}/>
                <div className='grid grid-cols-1 justify-items-center gap-5 p-5 md:grid-cols-3'>
                    {
                        obj.items.map((item,index)=>{
                            
                            return(
                                <div className='flex flex-col w-full md:w-3/4 justify-between' key={index}>
                                    <div className='pb-1 w-full relative '>
                                        {item.img ? 
                                        <Link href={{
                                            pathname: `detail/${item.title}`,
                                            query: { cat: `${cat}` },
                                        }}>
                                        <a>
                                        <Image 
                                            src={item.img}
                                            // width={500}
                                            // height={375}
                                            layout='responsive'
                                            className='rounded-lg'
                                        />
                                        </a>
                                        </Link>
                                    :
                                    null
                                    }
                                    </div>
                                    
                                    <h3 className={styles.foodTitle}>{item.title}</h3>
                                    <p className={styles.foodDes}> {item.desc}</p>
                                    <h2 className={styles.foodPrice}>{item.price}</h2>
                                    <Link href={{
                                                pathname: `detail/${item.title}`,
                                                query: { cat: `${cat}` },
                                            }}><a className={styles.buttonTitle}>Order</a></Link>
                                </div>
                            )
                        })
                    }
                </div>
                <br/>
            </div> 
            
            <FloatingButton/>

            <Footer /> 
      </div>
    )
}