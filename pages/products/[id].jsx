import React, { useState } from 'react'
import styles from '../../styles/Products.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectProducts } from '../../redux/cartSlice'

const Products = ({product}) => {
  const [price, setPrice] = useState(product.prices[0])
  // const [productItems, setProductItems ] = useState([])
  const [quantity, setQuantity] = useState('') 
  const [extras, setExtras] = useState([])
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()
   
  

  const handleClick = (e, option) => {
    const checked = e.target.checked
    
    if(checked){
      setPrice(price+option.price)
      setExtras([...extras, option.text])
    }else{
      setPrice(price-option.price)
      setExtras(extras.filter((extra) => extra !== option.text))
      
    }
    
  }

  const handleAdd = () => {
    console.log(price, quantity, extras)
    dispatch(addToCart({...product, extras, quantity, price,}))
    
  }
  console.log(products)

  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={product.img} layout='fill' objectFit='contain'/>
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
          <div className={styles.imgBox}>
            <Image src='/images/product.jpg' layout='fill' objectFit='contain' onClick={() => setPrice(product.prices[0])}/>
            <div className={styles.size}>
              small
            </div>
          </div>
          <div className={styles.imgBox} >
            <Image src='/images/product.jpg' layout='fill' objectFit='contain' onClick={() => setPrice(product.prices[1])} />
            <div className={styles.size}>
              medium
            </div>
          </div>
          <div className={styles.imgBox} >
            <Image src='/images/product.jpg' layout='fill' objectFit='contain' onClick={() => setPrice(product.prices[2])}/>
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
          <input type="number" className={styles.input} onChange={(e)=> setQuantity(e.target.value)}/>
          <button type='submit'  className={styles.submit} onClick={handleAdd}>
            Add To cart
          </button>
        </div>

      </div>
      
    </div>
  )
}

export const getServerSideProps = async({params})=>{
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return{
    props: {
      product: res.data
    }
  }
}

export default Products