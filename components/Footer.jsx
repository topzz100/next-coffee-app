import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src='/images/bg.png' layout='fill' objectFit='cover'/>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quis doloribus aperiam?
        </div>
        <div className={styles.item}>
          <div className={styles.title}>
            FIND OUR REATAURANTS
          </div>
          
            <div className={styles.listItem}>
              <p className={styles.text}>555, Clement Street, V Road,</p>
              <p  className={styles.text}>Agege, Lagos</p>
              <p className={styles.text}>(445)784-5657</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.text}>555, Clement Street, V Road,</p>
              <p  className={styles.text}>Agege, Lagos</p>
              <p className={styles.text}>(445)784-5657</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.text}>555, Clement Street, V Road,</p>
              <p  className={styles.text}>Agege, Lagos</p>
              <p className={styles.text}>(445)784-5657</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.text}>555, Clement Street, V Road,</p>
              <p  className={styles.text}>Agege, Lagos</p>
              <p className={styles.text}>(445)784-5657</p>
            </div>
        </div>
        <div className={styles.item}>
           <div className={styles.title}>
            WORKING HOURS
          </div>
            <div className={styles.listItem}>
              <p className={styles.text}>SATURDAY-SUNDAY</p>
              <p className={styles.text}>6am-11pm</p>
            </div>
            <div className={styles.listItem}>
              <p className={styles.text}>MONDAY-FRIDAY</p>
              <p className={styles.text}>7am-9pm</p>
            </div>
            
         

        </div>

      </div>

    </div>
  )
}

export default Footer