import { AiOutlineClose } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import styles from './AnimeDetails.module.css'
const AnimeDetails = ({image,title,rating,status,description,genres, onClose}) => {

  const cleanDescription = (text) => {
     return text?.replace(/<[^>]*>/g, '').replace(/~!/g, '').replace(/!~/g, '');
  }
  return (
    <aside className= {styles.animeDetails}>
        <button onClick={onClose}><AiOutlineClose /></button>
        <img src= {image} alt="imagem" />
        <p>{title}</p>
        <p><FaStar className = {styles.star}/>{rating}</p>
        <p>Status: {status}</p>
        <p style= {{whiteSpace: 'pre-line'}}>Generos: {genres.join(",")}</p>
        <p className = {styles.sinopse}>{cleanDescription(description)}</p>
    </aside>
  )
}

export default AnimeDetails