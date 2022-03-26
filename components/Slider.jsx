import React from 'react'
import styles from '../styles/Slider.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Slider = () => {
  const [index, setIndex] = useState(0)

  const handleSlide =(position) => {
    if(position = 'left'){
      setIndex(index!==0? index-1 : 2)
      return
    }
    if(position = 'right'){
      setIndex(index!==2? index+1 : 0)
      return
    }
  }

  const imgArr = [
    {
      // img: '/images/feature1.jpg',
      img: 'https://www.caffesociety.co.uk/blog/wp-content/upLoads/2019/02/Caffe-Society-Espresso-Expresso-Epresso-Coffee.jpg',
      desc: 'THE BEST IN THE COUNTRY'
    },
    {
      img: 'https://d.newsweek.com/en/full/1001693/coffee-espresso-stock.jpg',
      desc: 'NOTHING TASTES BETTER'
    },
    {
      img: 'https://elfuego.uk/wp-content/uploads/2019/11/Espresso.jpeg',
      desc: 'ORDER NOW'
    }
  ]
  return (
    <div className = { styles.container}>
      <div className={styles.arrowContainer} style={{left: '0'}} onClick = {() => handleSlide('left')}>
        <Image src='/images/arrowl.png' alt='' layout='fill'/>
      </div>
      
      <div className={styles.wrapper}>
        {imgArr.map((item, i) => (
          <div className={styles.imgContainer} key={i} style={{transform:`translateX(${-100*index}vw)`}}>
            <Image src={item.img} alt='' layout='fill' objectFit='cover'/>
          </div>
        ))}
      </div>

      <div className={styles.arrowContainer} style={{right: '0'}}>
        <Image src='/images/arrowr.png' alt='' layout='fill' onClick = {() => handleSlide('right')}/> 
      </div>
     
      
    </div>
  )
}

export default Slider