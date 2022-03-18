import React from 'react'
import Image from 'next/image'
import styles from '../styles/ListCard.module.css'
import Link from 'next/link'

const ListCard = ({product}) => {
  console.log(product)
  return (
    <div className={styles.container}>
      <div className={styles.imgBox} style={{borderRadius: '50%', overflow: 'hidden'}}>
        <Link href={`/products/${product._id}`}>
          <Image src={product.img} alt='' layout= 'fill' objectFit='cover'/>
        </Link>
       
      </div>
      
      <h4 className={styles.name}>{product.title}</h4>
      <p className={styles.price}>${product.prices[0]}</p>
      <p className={styles.desc}>{product.desc}</p>

    </div>
  )
}

export default ListCard