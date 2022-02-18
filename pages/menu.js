import Head from 'next/head'
import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import hummus from '../public/hummus.png'
import kabobo from '../public/plate.png'
import falafel from '../public/falafel.png'
import Nav from '../components/navBar'
import Footer from '../components/footer'
import FloatingButton from '../components/floatingButton'
export default function Menu(){
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
            title:'MAIN Plates',
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
        }

    ]

    return (
        <>
        <Head>
            <title>Restaurant Menu</title>
            <meta name="description" content="My Restaurant Menu" />
        </Head>
            <div className={styles.bg}>
                
                {/* Nav bar component */}
                <Nav/>
                {/* nav bar end */}


                <h1 className={styles.title}> OUR MENU</h1>

            </div>

            <div className={styles.container}>

                {   
                    data.map((cat,index)=>{
                        const half = Math.ceil(cat.items.length / 2)  
                        const firstHalf = cat.items.slice(0, half)
                        const secondHalf = cat.items.slice(-half)
                        return(
                            <div key={index}>
                                <h2 className={styles.menuTitle}>{cat.title}</h2>
                                <div className='grid grid-cols-1 gap-1 md:pb-10 md:grid-cols-3 md:gap-10'>
                        
                                {
                                    cat.title === "MAIN Plates" ? null
                                    :
                                    <>
                                        <div className='hidden md:flex items-center justify-center'>
                                        {
                                            cat.title === "MAIN Plates" ? <Image
                                            src={cat.img}
                                        />:
                                        <Image
                                            src={cat.img}
                                            width={200}
                                            height={205}
                                        />

                                        }
                                        </div>
                                    </>
                                }
                                <div>
                                    {

                                        firstHalf.map((item,index)=>{

                                            return(
                                                <div className='p-2' key={index}>
                                                    <div className='flex justify-between border-b'>
                                                        <div>
                                                            <h2 className={styles.foodTitle}>{item.title}</h2>
                                                            <p className={styles.foodDes}>{item.desc}</p>
                                                        </div>
                                                        <div>
                                                            <h2 className={styles.foodPrice}>{item.price}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>   
                                <div>
                                    {
                                        secondHalf.map((item,index)=>{

                                            return(
                                                <div className='p-2' key={index}>
                                                    <div className='flex justify-between border-b'>
                                                        <div>
                                                            <h2 className={styles.foodTitle}>{item.title}</h2>
                                                            <p className={styles.foodDes}>{item.desc}</p>
                                                        </div>
                                                        <div>
                                                            <h2 className={styles.foodPrice}>{item.price}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div> 
                                {
                                    cat.title === "MAIN Plates"?
                                    <div className='hidden md:flex items-center justify-center'>
                                        <Image src={kabobo}/>
                                    </div>
                                    
                                    :null
                                }  
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <FloatingButton/>
            {/* Footer component */}
            <Footer/>
            {/* Footer End */}
        </>
    )
}