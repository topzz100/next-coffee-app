import React, { useState } from 'react'
import styles from '../../styles/Products.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectProducts } from '../../redux/cartSlice'

const Products = ({ product }) => {
  const [price, setPrice] = useState(product.prices[0])
  const [showSmall, setShowSmall] = useState(false)
  const [showMedium, setShowMedium] = useState(false)
  const [showBig, setShowBig] = useState(false)
  // const [productItems, setProductItems ] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [extras, setExtras] = useState([])
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()


  const handleCheck = (index) => {
    if (index === 0) {
      setShowSmall(true)
      setShowMedium(false)
      setShowBig(false)
    }
    if (index === 1) {
      setShowSmall(false)
      setShowMedium(true)
      setShowBig(false)
    }
    if (index === 2) {
      setShowSmall(false)
      setShowMedium(false)
      setShowBig(true)
    }

    setPrice(product.prices[index])

  }
  const handleClick = (e, option) => {
    const checked = e.target.checked

    if (checked) {
      setPrice(price + option.price)
      setExtras([...extras, option.text])
    } else {
      setPrice(price - option.price)
      setExtras(extras.filter((extra) => extra !== option.text))

    }

  }

  const handleAdd = () => {
    console.log(price, quantity, extras)
    dispatch(addToCart({ ...product, extras, quantity, price, }))

  }
  console.log(products)


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgCon}>

          <Image src={product.img} alt='' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          {product.title}
        </div>
        <div className={styles.price}>
          ${price}
        </div>
        <div className={styles.text}>
          {product.desc}
        </div>
        <h4 className={styles.sizeTitle}>
          Choose the size
        </h4>
        <div className={styles.options}>
          <div className={showSmall ? styles.checked : styles.imgBox} onClick={() => { handleCheck(0) }}>
            <Image src='/images/product.jpg' alt='' layout='fill' objectFit='contain' />
            <div className={styles.size}>
              small
            </div>
          </div>
          <div className={showMedium ? styles.checked : styles.imgBox} onClick={() => { handleCheck(1) }}>
            <Image src='/images/product.jpg' alt='' layout='fill' objectFit='contain' />
            <div className={styles.size}>
              medium
            </div>
          </div>
          <div className={showBig ? styles.checked : styles.imgBox} onClick={() => { handleCheck(2) }} >
            <Image src='/images/product.jpg' alt='' layout='fill' objectFit='contain' />
            <div className={styles.size}>
              large
            </div>
          </div>


        </div>
        <h4 className={styles.extrasTitle}>
          Choose additional ingredients
        </h4>
        <div className={styles.checkItems}>
          {
            product.extraOptions.map((option, i) => (
              <div className={styles.item} key={i}>
                <input
                  type="checkbox"
                  id={`extra${i}`}
                  name={`extra${i}`}
                  className={styles.checkbox}
                  onClick={(e) => handleClick(e, option)}
                />
                <label htmlFor={`extra${i}`}>{option.text}</label>
              </div>
            )
            )
          }




        </div>
        <div className={styles.cart}>
          <input type="number" className={styles.input} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <button type='submit' className={styles.submit} onClick={handleAdd}>
            Add To cart
          </button>
        </div>

      </div>

    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return {
    props: {
      product: res.data
    }
  }
}

export default Products