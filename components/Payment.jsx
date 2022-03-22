import React from 'react'
import styles from '../styles/Payment.module.css'

const Payment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        
        <label htmlFor="fullName">Fullname</label>
        <input placeholder='Enter your fullname' type="text" className={styles.fullName} id='fullName' />
        <label htmlFor="address"></label>
        <textarea  placeholder= 'enter your address' className={styles.address} id='address'></textarea>
        <button className={styles.button}>Send</button>
      </div>
    </div>
  )
}

export default Payment