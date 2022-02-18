import Head from 'next/head'
import styles from '../../styles/OrderPage.module.css'
import hummus from '../../public/mezza.jpeg'
import kabobo from '../../public/main.jpeg'
import falafel from '../../public/sand.jpeg'
import sweets from '../../public/sweets.jpeg'
import Nav from '../../components/navBar'
import Image from 'next/image'
import Link from 'next/link'
import FloatingButton from '../../components/floatingButton'
import Footer from '../../components/footer'
import BreadCrumbs from '../../components/breadcrumbs'


 const data = [
    {
        title:'Appetizers',
        img:hummus,
        items:[{
                title:'Hummus Plate',
                desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet fuga odit voluptate exercitationem incidunt et.',
                price:'$7.50'
            },
            {
                title:'Baba Ganuog',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iste?',
                price:'$7'
            },
            {
                title:'Fatush',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati eius saepe voluptates porro earum soluta inventore cum neque aperiam.',
                price:'$8'
            },
            {
                title:'Sambusak',
                desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam!',
                price:'$6'
            },
            {
                title:'Ja jeek',
                desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ratione illum veritatis provident labore. Sunt?',
                price:'$8.5'
            },
            {
                title:'5 Peice Falafel',
                desc:'Lorem ipsum dolor sit amet.',
                price:'$9'
            },]
    },
    {
        title:'Plates',
        img:kabobo,
        items:[
            {
                title:'Kabob Platter',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae maiores ipsa ad exercitationem. Porro similique quod qui soluta molestiae.',
                price:'$15'
            },
            {
                title:'Shawarma Platter',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sint?',
                price:'$11'
            },
            {
                title:'Dolma',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat eaque aperiam ipsum velit soluta!',
                price:'$17'
            },
            {
                title:'Quzze Plate',
                desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, vel.',
                price:'$25'
            },
            {
                title:'Fasulya Soup And Rice',
                desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, pariatur.',
                price:'$16'
            },
            {
                title:'Beryani Plate',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam voluptatibus voluptate aut mollitia aliquam nesciunt dolores velit asperiores pariatur!',
                price:'$22'
            },
        ]
    },
    {
        title:'sandwiches',
        img:falafel,
        items:[
            {
                title:'Shawarma Sandwich',
                desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, ab.',
                price:'$10'
            },
            {
                title:'Kabob Sandwich',
                desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sapiente quos numquam.',
                price:'$12'
            },
            {
                title:'Tikka Sandwich',
                desc:'Lorem ipsum dolor sit amet.',
                price:'$12'
            },
            {
                title:'Falafel Sandwich',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                price:'$10'
            },
            {
                title:'Mix Sandwich',
                desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus autem fugit esse aliquam?',
                price:'$11'
            },
        ]
    },
    {
        title:'sweets',
        img:sweets,
        items:[]
    },

]

export default function OrderPage(){



    return(
        <div>
            <Head>
                <title>Order-Online</title>
                <meta name="description" content="My Restaurant Order Online Page" />
            </Head>
            <div className={styles.bg}>
                <Nav/>
                <h1 className={styles.title}>Place Your Order</h1>
            </div>
            
            <div className='container mx-auto max-w-screen-lg'>
                <h1 className='text-xl text-center py-5'>Choose Category</h1>
                <BreadCrumbs/>
                <div className='grid grid-cols-1 gap-5 p-5  md:grid-cols-3'>
                    {
                        data.map((cat,index)=>{
                            return(
                                <div className=' w-full smd:3/4' key={index}>
                                    <div>
                                        <Link href={`order/categories/${cat.title}`}>
                                        <a>
                                        <Image 
                                            src={cat.img}
                                            width={500} 
                                            height={375}
                                            className='rounded-lg'
                                        />
                                        </a>
                                        </Link>
                                        
                                    </div>
                                    <h1 className={styles.subtitle}>{cat.title}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
            <FloatingButton/>
            <Footer/>
        </div>
    )
}