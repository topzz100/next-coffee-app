import { Close } from '@material-ui/icons'
import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { selectTotal } from '../redux/cartSlice'
import styles from '../styles/Payment.module.css'

const Payment = ({ total, handleOrder, setShowModal}) => {
  const [customer, setCustomer] = useState('')
  const [address, setAddress] = useState('')
  // const total= useSelector(selectTotal)
  const handleSubmit = () => {
    
       handleOrder({ customer, address, total, method: 0 })
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div onClick={()=> setShowModal(false)}>
          <Close/>
        </div>
        <h4 className={styles.header} > You will pay a $5 charge on delivery</h4>
        <label htmlFor="fullName" className={styles.label}>Fullname</label>
        <input placeholder='Enter your fullname' type="text" className={styles.fullName} id='fullName' onChange={(e)=>setCustomer(e.target.value)}/>
        <label htmlFor="phone" className={styles.label}>Phone number</label>
        <input placeholder='Enter your phone number' type="text" className={styles.fullName} id='phone' />
        <label htmlFor="address" className={styles.label}>Address</label>
        <textarea  placeholder= 'enter your address' className={styles.address} id='address'  onChange={(e)=>setAddress(e.target.value)}></textarea>
        <button className={styles.button} onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default Payment