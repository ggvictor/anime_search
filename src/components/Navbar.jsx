import { FaMoon, FaSearch } from "react-icons/fa";
import styles from "./Navbar.module.css"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className = {styles.nav}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <div className= {styles.icon}>
        <span><FaMoon className = {styles.moon}/></span>
        <span><FaSearch className = {styles.search}/></span>
      </div>
    </nav>
  )
}

export default Navbar