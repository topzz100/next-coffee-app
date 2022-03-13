import React from 'react'
import Image from 'next/image'
import styles from '../styles/ListCard.module.css'

const ListCard = ({img, name, price, desc}) => {
  return (
    <div className={StyleSheet.container}>
      <div className={styles.imgBox} style={{borderRadius: '50%', overflow: 'hidden'}}>
        <Image src={img} layout= 'fill' objectFit='cover'/>
      </div>
      
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.price}>{price}</p>
      <p className={styles.desc}>{desc}</p>

    </div>
  )
}

export default ListCard