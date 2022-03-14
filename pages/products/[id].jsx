import React from 'react'
import styles from '../../styles/Products.module.css'
import Image from 'next/image'

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src='/images/product.jpg' layout='fill' objectFit='contain'/>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          Expresso
        </div>
        <div className={styles.price}>
          $23.5
        </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias animi ut, temporibus modi voluptatem amet, dolore quia iste consectetur corporis cupiditate debitis quibusdam, vero eum molestias tenetur repellat maiores dolor.
        </div>
        <h4 className={styles.sizeTitle}>
          Choose the size
        </h4>
        <div className={styles.options}>
          <div className={styles.imgBox}>
            <Image src='/images/product.jpg' layout='fill' objectFit='contain'/>
            <div className={styles.size}>
              small
            </div>
          </div>
          <div className={styles.imgBox}  style={{transform: 'scale(1.2)'}}>
            <Image src='/images/product.jpg' layout='fill' objectFit='contain' />
            <div className={styles.size}>
              medium
            </div>
          </div>
          <div className={styles.imgBox}  style={{transform: 'scale(1.5)'}}>
            <Image src='/images/product.jpg' layout='fill' objectFit='contain'/>
            <div className={styles.size}>
              large
            </div>
          </div>
          
          
        </div>
        <h4 className={styles.extrasTitle}>
          Choose additional ingredients
        </h4>
        <div className={styles.checkItems}>
          <div className={styles.item}>
             <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double</label>
          </div>
           <div className={styles.item}>
             <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Extra cream</label>
          </div>
           <div className={styles.item}>
             <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Expresso</label>
          </div>
          
        </div>
        <div className={styles.cart}>
          <input type="number" className={styles.input}/>
          <button type='submit'  className={styles.submit}>
            Add To cart
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Products