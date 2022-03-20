import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectQuantity } from '../redux/cartSlice'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  const cartQuantity = useSelector(selectQuantity)
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.callButton}>
          <Image src='/images/telephone.png' width='30px' height='30px'/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>
            ORDER NOW
          </div>
          <div className={styles.text}>
            5534256734
          </div>
        </div>

      </div>

      <div className={styles.center}>
        <ul className={styles.navItems}>
          <li className={styles.item}>
            <Link href={'/'} passHref>
              Homepage
            </Link>
          </li>
          <li className={styles.item}>Products</li>
          <li className={styles.item}>Menu</li>
          <div className={styles.logo}>
            <span className={styles.dot}></span><h3 className={styles.logoText}>HOLAR</h3><span className={styles.dot}></span>
          </div>
          <li className={styles.item}>Events</li>
          <li className={styles.item}>Blog</li>
          <li className={styles.item}>Contact</li>
        </ul>

      </div>

      <div className={styles.right}>
        <div className={styles.cartBox}>
          <Link href={'/cart'} passHref>
            <Image src='/images/cart.png' width= '30px' height='30px'/>
          </Link>
          
          <div className={styles.amount}>{cartQuantity}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar