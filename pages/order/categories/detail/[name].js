import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../../styles/DetailsPage.module.css'
import Nav from '../../../components/navBar'
import Footer from '../../../components/footer'
import hummus from '../../../../public/hummusPlate.png'
import baba from '../../../../public/baba.png'
import fattoush from '../../../../public/fattoush.png'
import samosa from '../../../../public/samosa.png'
import jajik from '../../../../public/jajik.png'
import falafel from '../../../../public/5falafel.png'
import kabob from '../../../../public/kabob.jpg'
import shawarmaPlate from '../../../../public/shawarmaplate.png'
import dolma from '../../../../public/bg.png'
import quizze from '../../../../public/quize.png'
import beryani from '../../../../public/beryani.png'
import fasoulya from '../../../../public/fas.png'
import shawarmaSand from '../../../../public/sand.jpeg'
import kabobSand from '../../../../public/kabobsand.png'
import falafelSand from '../../../../public/falfelsand.png'
import tikkaSand from '../../../../public/tikka.png'
import burgerSand from '../../../../public/burger.png'
import Image from 'next/image'
import FloatingButton from '../../../components/floatingButton'
import { useDispatch } from 'react-redux'
import { addToBag , increment  } from '../../../../redux/bagSlice'
import { FaAngleLeft } from 'react-icons/fa'
import BreadCrumbs from '../../../components/breadcrumbs'
const items = [
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

export default function Details(){
    const router = useRouter()
    const [ beverage , setBeverage ] = useState('No Drinks')
    const [ meat , setMeat ] = useState('Choose One')
    const dispatch = useDispatch()
    const { name,cat } = router.query
   
    
    const handleDispatch = (i)=>{
        // const bag = useSelector(state => state.bag)
        // const match = bag.items.find( item=>item.i.title === i.title && item.meat === meat)
        if(i.title==='Kabob Platter' || 
            i.title==='Shawarma Sandwich' || 
            i.title==='Kabob Sandwich' || 
            i.title==='Tikka Sandwich' || 
            i.title==='Burger' || 
            i.title==='Shawarma Platter'){
                if(meat==='Choose One'){
                    alert('Choose your meat please')
                }
                // else if (match){ enable if wanted to not add the matched items, it will just update qty
                //     dispatch(increment({i,meat}))
                // }
                else{
                    dispatch(addToBag({beverage,meat,i,qty:1}))
                }
        }else{
            dispatch(addToBag({beverage,i,qty:1}))
        }
        
    }
    return(
        <div>
            <div className={styles.bg}>
                <Nav/>
                <h1 className={styles.title}>Place Your Order</h1>
            </div>
            
            <div className='container max-w-screen-lg mx-auto'>
                
            <h1 className='text-xl text-center py-5 uppercase'>{cat}</h1>
                <BreadCrumbs itemDetail={name} catName={cat}/>
                
                {
                    items.filter(item=>item.title === name?item:null).map(((i,index)=>{
                        return(
                            <div className='grid grid-cols-1 p-5 gap-5 justify-items-center md:grid-cols-2 lg:gap-0' key={index}>
                                <div className='w-full md:w-3/4'>
                                    <Image 
                                        src={i.img}
                                        width={455}
                                        height={303}
                                    />
                                </div>
                                <div className='w-3/4 w-full'>
                                    <h1 className={styles.foodTitle}>{i.title}</h1>
                                    <p className={styles.foodDes}>{i.desc}</p>
                                    <h2 className={styles.foodPrice}>{i.price}</h2>

                                    {
                                        i.title==='Kabob Platter' || 
                                        i.title==='Shawarma Sandwich' || 
                                        i.title==='Kabob Sandwich' || 
                                        i.title==='Tikka Sandwich' || 
                                        i.title==='Burger' || 
                                        i.title==='Shawarma Platter'? 
                                        <>
                                            <h2 className={styles.subtitle}>Chosse your meat</h2>
                                            <div className='flex flex-col py-2'>
                                                <label htmlFor="i" className='text-xs'>MEAT CHOICE</label>
                                                <select
                                                    onChange={(i)=>setMeat(i.target.value)} 
                                                    value={meat}
                                                    className='border border-gray p-2 rounded'
                                                >
                                                    <option value="Choose One">Choose One</option>
                                                    <option value="Beef">Beef</option>
                                                    <option value="Chicken">Chicken</option>
                                                </select>
                                            </div>
                                        </>:
                                        null
                                    }

                                    <h2 className={styles.subtitle}>Additional Items</h2>
                                    <div className='flex flex-col py-2'>
                                        <label htmlFor="i" className='text-xs'>BEVERAGE</label>
                                        <select onChange={(i)=>setBeverage(i.target.value)} name="items" id="i" className='border border-gray p-2 rounded'>
                                            <option value="No Drinks"> No Thanks</option>
                                            <option value="Coke"> Coke ($2.70)</option>
                                            <option value="Sprite"> Sprite ($2.70)</option>
                                            <option value="Laban"> Laban ($3.00)</option>
                                        </select>
                                    </div>
                                    
                                    <button onClick={() => handleDispatch(i)} className='p-2 bg-black w-full text-white'>
                                        ADD TO ORDER
                                    </button>
                                </div>
                            </div>
                            
                        )
                    }))
                }                
            </div>
            <FloatingButton/>
            <Footer/>
        </div>
    )
}