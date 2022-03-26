import React from 'react'
import styles from '../../styles/Orders.module.css'
import Image from 'next/image'
import axios from 'axios';

const Orders = ({order}) => {
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
            <td className={styles.orderId}>{order._id}</td>
            <td className={styles.customer}>{order.customer}</td>
            <td className={styles.address}>{order.address}</td>
            <td className={styles.total}>{order.total}</td>
          </tr>
           
        </table>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/images/paid.png"  width={25} height={25} alt="" />
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
            <h4 className={styles.item}>Subtotal: <span className={ styles.amount} >${order.total}</span></h4>
          </div>
          <div className={styles.itemContainer}> 
            <h4 className={styles.item}>Discount: <span className={ styles.amount} >$0.00</span></h4>
          </div>
          <div className={styles.itemContainer}> 
            <h4 className={styles.item}>Total: <span className={ styles.amount} >${order.total}</span></h4>
          </div>
          
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps = async({params})=>{
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
  return{
    props: {
      order: res.data
    }
  }
}

export default Orders