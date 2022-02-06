import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import {useEffect, useState} from 'react';


export default function Modal ({show,hide,total}){
    const elements = useElements()
    const stripe = useStripe()
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
          .fetch("api/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({price: total})
          })
          .then(res => {
            return res.json();
          })
          .then(data => {
            setClientSecret(data.clientSecret);
          });
      }, []);

      const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
      };

     const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
        });

        if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
        } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        }
    };

    return(
        <>
            {show ? 
                (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t text-center">
                                <h3 className="text-xl text-center font-semibold ">
                                    Your Information
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    x
                                    </span>
                                </button>
                                </div>
                                {/*body*/}

                                <form className="relative p-6 " onSubmit={handleSubmit}>
                                    <div className="flex gap-3">
                                        <input type="text" className="border w-full rounded rounded-md p-2 my-2" id="name" placeholder="First Name"/>
                                        <input type="text" className="border w-full rounded rounded-md p-2 my-2" id="name" placeholder="Last Name"/>
                                    </div>
                                    <div className="grid grid-cols-1 w-fyll">
                                        <input type="text" className="border w-full rounded rounded-md p-2 my-2" id="name" placeholder="Address"/>
                                        <input type="text" className="border w-full rounded rounded-md p-2 my-2" id="name" placeholder="City"/>
                                        <input type="text" className="border w-full rounded rounded-md p-2 my-2" id="name" placeholder="State"/>
                                       {/* <div className="flex gap-2">
                                            <input type="text" className="border flex-auto w-full rounded rounded-md p-2 my-2" id="name" placeholder="Card Number"/>
                                            <input type="text" className="border flexauto w-20 rounded rounded-md p-2 my-2" id="name" placeholder="CVV"/>
                                       </div> */}
                                       <div className='p-2 my-2 border rounded rounded-md'>
                                       
                                       <CardElement onChange={handleChange} />

                                      
                                       
                                       </div>
                                     
                                       
                                    </div>
                                   
                                    <button
                                        disabled={processing || disabled || succeeded}
                                        className={`${processing?'bg-gray-700':'bg-black'} text-white flex justify-center w-full`}
                                    >
                                        <span className='flex items-center py-2 px-5'>
                                        {processing ? (
                                            <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing
                                            </>
                                        ) : (
                                            "Pay now"
                                        )}
                                        </span>
                                    </button>

                                    {/* Show any error that happens when processing the payment */}
                                    {error && (
                                        <div className="text-red-500 font-bold text-sm" role="alert">
                                        {error}
                                        </div>
                                    )}
                                    {/* Show a success message upon completion */}
                                    <p className={succeeded ? "text-lime-700 font-bold text-center" : "hidden"}>
                                        Payment succeeded
                                    </p>
                                </form>
                                
                                {/*footer*/}
                                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => hide()}
                                >
                                    Close
                                </button>
                                {/* <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Save Changes
                                </button> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) 
                : null
            }
        </>
    )
}