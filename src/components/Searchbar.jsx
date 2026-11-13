import {FaSearch } from "react-icons/fa";
import styles from "./Searchbar.module.css"

const Searchbar = ({searchTerm, setSearchTerm, onSearch}) => {
  return (
    <form className = "search-container" onSubmit = {(e) => {e.preventDefault(), onSearch()}}>
      
      <input type="text" 
      name="search" 
      id="search" 
      placeholder='Search Anime' 
      autoComplete="off" 
      value = {searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}
      className = {styles.input}/>

      <button type = "submit" className= {styles.icon}><FaSearch/></button>
    </form>
  )
}

export default Searchbar