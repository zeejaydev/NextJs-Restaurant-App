import Link from 'next/link'
import {FaAngleDown, FaShoppingBag } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { hide, show} from '../../redux/bagSlice'
import { useDispatch } from 'react-redux'
import styles from '../../styles/Card.module.css'
import { useRouter } from 'next/router'


export default function FloatingButton(){
    const dispatch = useDispatch()
    const router = useRouter()
    const bag = useSelector(state => state.bag.totalItems)
    const bag2 = useSelector(state => state.bag)
    

    return(
            <div   className={`fixed right-10 bottom-10 md:right-20 md:bottom-20 bg-black h-20 w-20  breder rounded-full ${bag>0?'flex':'hidden'} justify-center items-center z-20`}>
                
                <div className={`${!bag2.show?'block':'hidden'} absolute -left-2 -top-1 bg-red-400 h-8 w-8 rounded-full text-center text-sm text-white flex justify-center items-center`}>
                {bag}
                </div>
                
                <div  className={`${!bag2.show || bag === 0?'hidden':''}`}>
                    <div className={styles.card}>
                        <h1 className='text-center text-xl py-2'>Your Order</h1>
                        <div className='flex justify-between border-b  border-b px-1'>
                            <div>
                            <h1 className='text-xs'>Item</h1>
                            </div>
                            <div>
                            <h2 className='text-xs'>Qty</h2>
                            </div>
                        </div>
                        <div className='overflow-hidden'>
                        {
                            bag2.items.map((item,index)=>{
                                return(
                                    <div className='flex justify-between px-2 border-b border-gray' key={index}>
                                    <div>
                                    <h1 className='text-sm py-2 '>{item.i.title}</h1>
                                    </div>
                                    <div>
                                        <h2 className='text-sm py-2'>{item.qty}</h2>
                                    </div>
                                </div>
                                )
                                
                            })
                        }
                        </div>
                        <div className='pt-3'>
                        <Link href='/checkout'>
                            <a>
                            <div className='border border-black w-full text-center text-white bg-black'>View Cart</div>
                            </a>
                            
                        </Link>
                        </div>
                        <div className='pt-1'>
                            <button onClick={()=>dispatch(hide())} className='border border-black w-full text-center text-white bg-black'>Close</button>
                        </div>
                        
                    </div>
                </div>
                <FaAngleDown 
                    style={{
                        position:'absolute',
                        top:-12,
                        right:30,
                        fontSize:25,
                        color:'white',
                        zIndex:-1,
                        display:!bag2.show?'none':'block',
                        }}/>
                <FaShoppingBag onClick={()=>dispatch(show())} style={{fontSize:40,color:'white'}}/>
            </div>
    )
}