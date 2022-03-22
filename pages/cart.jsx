import React, { useState } from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { reset, selectProducts, selectTotal } from '../redux/cartSlice'
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from 'axios'
import  { useRouter } from 'next/router'
import Payment from '../components/Payment'

const cart = () => {
  const products = useSelector(selectProducts)
  const total = useSelector(selectTotal)
  const dispatch = useDispatch()
 const amount = total;
  const currency = "USD";
  const style = {"layout":"vertical"};
  const [show, setShow] = useState(false)
  const router = useRouter()

  const handleOrder = async(data) => {
     try{
       const res = await axios.post('http://localhost:3000/api/orders', data)
       if(res.status === 201){
        router.push('/orders/'+res.data._id)
        
       dispatch(reset())
       }
     }catch(err){
       console.log(err) 
     }

  }

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        // Your code here after capture the order
                      const shipping = details.purchase_units[0].shipping;
                      handleOrder({
                        customer: shipping.name.full_name,
                        address: shipping.address.address_line_1,
                        total: total,
                        method: 1,
                      });
                      console.log(details)
                    });
                }}
            />
        </>
    );
}

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {
            products.map((p) => (
              <tr key={p._id}>
                <td>
                <Image src ={p.img} width='100px' height='100px' objectFit='contain'/>
                </td>
                <td className={styles.name}>{p.title}</td>
                <td className={styles.extras}>
                  {
                    p.extras.map((ex,i)=>(
                      <span key ={i}>{ex}, </span>
                    ))
                  }
                </td>
                <td className={styles.price}>${p.price}</td>
                <td className={styles.quantity}>{p.quantity}</td>
                <td className={styles.total}>${p.quantity*p.price}</td>
              </tr>
            ))
          }
          
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.rightWrapper}>

          <div className={styles.title}>
            CART TOTAL
          </div>
          <div className={styles.itemContainer}> 
            <h4 className={styles.item}>Subtotal: <span className={ styles.amount} >${total.toFixed(2)}</span></h4>
          </div>
          <div className={styles.itemContainer}> 
            <h4 className={styles.item}>Discount: <span className={ styles.amount} >$0.00</span></h4>
          </div>
          <div className={styles.itemContainer}> 
            <h4 className={styles.item}>Total: <span className={ styles.amount} >{total.toFixed(2)}</span></h4>
          </div>
          {
            show?
            (
                <>
              <button className={styles.cash}>
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id": "AThXcbNJwbf6yW8K5TExe2jbg2uS0uLS85TYVpiOnxWrjfLRAt7ZDyM-M7xu3WpkcAEFYNPFTZpmwRu_",
                  components: "buttons",
                  currency: "USD"
                }}
                >
                <ButtonWrapper
                  currency={currency}
                  showSpinner={false}
                  />
              </PayPalScriptProvider>
                  </>
            ):
                  <button className={styles.button} onClick ={()=> setShow(true)}>
                   CHECKOUT NOW
                 </button>
          }
          
         
           
        </div>
      </div>
      <Payment/>
    </div>
  )
}

export default cart