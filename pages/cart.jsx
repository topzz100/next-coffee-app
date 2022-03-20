import React from 'react'
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

const cart = () => {
  const products = useSelector(selectProducts)
  const total = useSelector(selectTotal)
  const dispatch = useDispatch()

  const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};

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
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
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
          
          <button className={styles.button}>
            CHECKOUT NOW
          </button>
           <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
        </div>
      </div>
    </div>
  )
}

export default cart