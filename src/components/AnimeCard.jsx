import { FaStar } from "react-icons/fa";
import styles from "./AnimeCard.module.css"
import imagem from '../assets/naruto.jpg'

const AnimeCard = ({title, rating}) => {
  return (
    <div className= {styles.anime_card}>
        <div>
          <img src= {imagem} alt="imagem" />
        </div>
        <h2>{title}</h2>
        <p><FaStar className = {styles.star} /> {rating}</p>
    </div>
  )
}

export default AnimeCard