import React from 'react'
import styles from '../styles/List.module.css'
import ListCard from './ListCard'

const List = ({list}) => {
  const CoffeeList = [
    {
      img: '/images/p1.jpg',
      name:'Expresso',
      price: '$23.3',
      desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque'
    },
    {
      img: '/images/p2.jpg',
      name:'Expresso',
      price: '$23.3',
      desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque'
    },
    {
      img: '/images/p3.jpg',
      name:'Expresso',
      price: '$23.3',
      desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque'
    },
    {
      img: '/images/p4.jpg',
      name:'',
      price: '$23.3',
      desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque'
    },
    {
      img: '/images/p1.jpg',
      name:'Expresso',
      price: '$23.3',
      desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque'
    },
    {
      img: '/images/p1.jpg',
      name:'Expresso',
      price: '$23.3',
      desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque'
    },
    {
      img: '/images/p1.jpg',
      name:'Expresso',
      price: '$23.3',
      desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque'
    },
    {
      img: '/images/p1.jpg',
      name:'Expresso',
      price: '$23.3',
      desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque'
    },
  ]
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        the best pizza in town
      </h3>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eaque cum numquam eum commodi accusamus atque modi, neque, facilis sint vero voluptatem veritatis est harum accusantium delectus corrupti minima tenetur minus? Consectetur distinctio pariatur tempore ex nihil debitis velit molestias!
      </p>
      <div className={styles.wrapper}>
        {list.map((l, i) => (
          <div className={styles.cardBox} key={l._id}>
            <ListCard product = {l}/>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default List