import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr>
            <th>Product</th>
            <th>Nmae</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
            <Image src = '/images/product.jpg' width='100px' height='100px' objectFit='contain'/>
            </td>
            <td className={styles.name}>EXPRESSO</td>
            <td className={styles.extras}>Double, Extra Milk</td>
            <td className={styles.price}>$23.30</td>
            <td className={styles.quantity}>4</td>
            <td className={styles.total}>$93.2</td>
          </tr>
           <tr>
            <td>
            <Image src = '/images/product.jpg' width='100px' height='100px' objectFit='contain'/>
            </td>
            <td className={styles.name}>EXPRESSO</td>
            <td className={styles.extras}>Double, Extra Milk</td>
            <td className={styles.price}>$23.30</td>
            <td className={styles.quantity}>4</td>
            <td className={styles.total}>$93.2</td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.rightWrapper}>

          <div className={styles.title}>
            CART TOTAL
          </div>
          <div className={styles.itemContainer}> 
            <h4 className={styles.item}>Subtotal: <span className={ styles.amount} >$112.4</span></h4>
          </div>
          <div className={styles.itemContainer}> 
            <h4 className={styles.item}>Discount: <span className={ styles.amount} >$0.00</span></h4>
          </div>
          <div className={styles.itemContainer}> 
            <h4 className={styles.item}>Total: <span className={ styles.amount} >$112.4</span></h4>
          </div>
          
          <button className={styles.button}>
            CHECKOUT NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default cart