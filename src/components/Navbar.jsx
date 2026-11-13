import { FaMoon, FaSearch } from "react-icons/fa";
import styles from "./Navbar.module.css"
import logo from "../assets/logo.png"

const Navbar = ({onSearchClick}) => {
  return (
    <nav className = {styles.nav}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <div className= {styles.icon}>
        <span><FaMoon className = {styles.moon}/></span>
        <span onClick={onSearchClick}><FaSearch className = {styles.search}/></span>
      </div>
    </nav>
  )
}

export default Navbar