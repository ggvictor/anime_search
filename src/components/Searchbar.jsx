import {FaSearch } from "react-icons/fa";
import styles from "./Searchbar.module.css"

const Searchbar = () => {
  return (
    <div className = "search-container">
      <input type="text" name="search" id="search" placeholder='Search Anime' autoComplete="off" className = {styles.input}/>
      <button className= {styles.icon}><FaSearch/></button>
    </div>
  )
}

export default Searchbar