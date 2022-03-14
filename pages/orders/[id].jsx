import React from 'react'
import styles from '../../styles/Orders.module.css'
import Image from 'next/image'

const Orders = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
     <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
          <tr>
            <td className={styles.orderId}>12347652752826</td>
            <td className={styles.customer}>Juliet Doe</td>
            <td className={styles.address}>112, leeway str, Yaba</td>
            <td className={styles.total}>$93.2</td>
          </tr>
           
        </table>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/images/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/images/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/images/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/images/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
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

export default Orders