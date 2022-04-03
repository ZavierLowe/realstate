import styles from '../styles/ProductCard.module.scss'
import { BiBed } from "react-icons/bs"
import LocationIcon from '../icons/LocationIcon'
import BathtubIcon from '../icons/BathtubIcon'
import BedIcon from '../icons/BedIcon'
import RulerIcon from '../icons/RulerIcon'



const ProductCard = () => {
  return (
    <div className='wrapper'>
     <div className={styles.card__wrapper}>
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <a className="image-link" href=""/>
<img src='https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
className={styles.img__i}
/>

      </div>
      <div className={styles.textbox__wrapper}>
      <div className="text-box">
        <h1 className={styles.heading}>
          Miami Beach Mansion
        </h1>
        <div className={styles.location__wrapper}>

        <LocationIcon/>
        <h2 className={styles.heading__location}>1542 Sunset Dr. Miami Beach,FL </h2>
        </div>
      <div className={styles.property__description}>
        <BedIcon/>
        <p  className={styles.text}>
          3 Bedrooms
        </p>
        <BathtubIcon/>
        <p  className={styles.text}>
          2 Bathrooms
        </p>
        <RulerIcon/>
        <p  className={styles.text}>
          3 Bedrooms
        </p>
      </div>
      </div>
     </div>
     <div className={styles.border}>
      <div className={styles.border__solid}></div>
     </div>
      
      <div className="button-wrapper">
          <p className={styles.button} href="">
            5,000,000 sales price
          </p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ProductCard