import Nav from "./components/navBar";
import styles from '../styles/OrderPage.module.css'
import { useSelector } from 'react-redux'
import Image from "next/image";
import Footer from "./components/footer";
import { useDispatch } from 'react-redux'
import { decrement   } from '../redux/bagSlice'
import emptybag from '../public/empty-bag.png'
import Link from "next/link";
import Modal from "./components/modal";
import { useState , useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

export default function Checkout (){
    const bag = useSelector(state => state.bag)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    // const [clientSecret, setClientSecret] = useState("");

    const stripePromise = loadStripe(
        "pk_test_pLjuIrW2QxFzfBfXrtBZmHil00SnxKJpbM"
      );

    const hide = ()=>{
        setShowModal(false)
    }
    
    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("api/payment", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ price:  1400 }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setClientSecret(data.clientSecret));
    //   }, []);
    //   const appearance = {
    //     theme: 'stripe',
    //   };
    //   const options = {
    //     clientSecret,
    //     appearance,
    //   };
    return(
        
        <div>
            <Elements stripe={stripePromise}>
                <Modal show = {showModal} hide={hide} total={bag.cartTotal}/>
            </Elements>
             
            <div className={styles.bg}>
                <Nav/>
                <h1 className={styles.title}>Your Order</h1>
            </div>
           
            {
                    bag.totalItems == 0 ?
                        <div className="flex justify-center py-10">
                            <Image
                                src={emptybag}
                            />
                        </div>
                        :
                        <div className="container max-w-screen-lg mx-auto py-5">
                             <h1 className='text-xl text-center uppercase'>ADD MORE </h1>
                            <div className="flex w-full items-center justify-center font-bold pb-3">
                                <Link href={'/order/categories/Appetizers'}>
                                    <a className="underline underline-offset-4 font-bold px-2 py-1">Appetizers</a>
                                </Link>
                                {'-'}
                                <Link href={'/order/categories/Plates'}>
                                    <a className="underline underline-offset-4 font-bold px-2 py-1">Plates</a>
                                </Link>
                                {'-'}
                                <Link href={'/order/categories/sandwiches'}>
                                    <a className="underline underline-offset-4 font-bold px-2 py-1">Sandwiches</a>
                                </Link>
                                {'-'}
                                <Link href={'/order/categories/sweets'}>
                                    <a className="underline underline-offset-4 font-bold px-2 py-1">Sweets</a>
                                </Link>
                            </div>
                           <div className="pb-1">
                            <   div className="flex flex-1 border-b pb-1">
                                    <h3 className="pl-2 md:pl-0 flex-auto w-3/4 text-xl uppercase">Items</h3>
                                    <h3 className="invisible md:visible md:flex-auto md:w-1/5 md:text-md md:uppercase md:text-center">Qty</h3>
                                    <h3 className=" flex-auto md:w-20 text-md uppercase md:text-center">Price</h3>
                                </div>
                           </div>
                            {
                                bag.items.map((bagItem,index)=>{
                                    return(
                                        <div className="grid grid-cols-1 md:flex flex-1 py-3 " key={index}>
                                            <div className="flex flex-auto w-3/4 gap-2">
                                                <div>
                                                    {
                                                        <Image
                                                            src={bagItem.i.img}
                                                            width={200}
                                                            height={150}
                                                        />
                                                    }
                                                </div>
                                                <div>
                                                    <h1 className={styles.checkoutFoodTitle}>{bagItem.i.title}</h1>
                                                    {/* <h2 className={styles.foodTitle}>{bagItem.meat?bagItem.meat:null}</h2>
                                                    <h1 className={styles.checkoutFoodTitle}>Drinks</h1>
                                                    <h2 className={styles.foodTitle}>{bagItem.beverage}</h2> */}
                                                    <ul className='list-disc list-inside'>
                                                    {bagItem.meat? <li className={styles.foodTitle}>{bagItem.meat}</li>:null}
                                                        <li className={styles.foodTitle}>{bagItem.beverage}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pt-2 md:pt-0 flex-auto w-full md:w-1/5 ">
                                                <div className="flex justify-around md:block md:text-center">
                                                    <h2 className={styles.foodPrice}><span className="pr-3 md:hidden">Qty</span>{bagItem.qty}</h2>
                                                    <button onClick={()=>dispatch( decrement({bagItem,index}) )} className="border-2 border-gray px-2 text-sm w-1/2">Remove</button>
                                                    
                                                    <div className="md:hidden">
                                                    {bagItem.beverage ==="Coke"||bagItem.beverage==="Sprite" ? 
                                                    <h2 className={styles.foodPrice}>${(parseFloat(bagItem.i.price.replace('$',0))+2.70).toFixed(2)}</h2>
                                                    :bagItem.beverage === "No Drinks"?
                                                    <h2 className={styles.foodPrice}>{(parseFloat(bagItem.i.price.replace('$',0))).toFixed(2)}</h2>
                                                    :<h2 className={styles.foodPrice}>${(parseFloat(bagItem.i.price.replace('$',0))+3).toFixed(2)}</h2>}
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="hidden md:block md:flex-auto md:w-20 md:text-center">
                                                {bagItem.beverage ==="Coke"||bagItem.beverage==="Sprite" ? 
                                                <h2 className={styles.foodPrice}>${(parseFloat(bagItem.i.price.replace('$',0))+2.70).toFixed(2)}</h2>
                                                :bagItem.beverage === "No Drinks"?
                                                <h2 className={styles.foodPrice}>{(parseFloat(bagItem.i.price.replace('$',0))).toFixed(2)}</h2>
                                                :<h2 className={styles.foodPrice}>${(parseFloat(bagItem.i.price.replace('$',0))+3).toFixed(2)}</h2>}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="pt-5">
                                <div className="flex flex-1 border-t pt-1">
                                    <h3 className="pl-2 md:pl-0 flex-auto w-3/4 text-xl uppercase">Total</h3>
                                    <h3 className="flex-auto w-1/5"></h3>
                                    {bag.totalItems>0?<h3 className="flex-auto w-20 md:text-center">${bag.cartTotal.toFixed(2)}</h3>:<h3 className="flex-auto w-20">$0</h3>}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button onClick={()=>setShowModal(true)} type="button" className="border w-full md:w-1/2 text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 ">CHECKOUT</button>
                            </div>
                        </div>
                    
            }
            
            
            <Footer/>
        </div>
    )
}