import logo from '../assets/react.svg'
import styles from './Navbar.module.css'
function Navbar(){
    return(
        <nav className="w-4/5 bg-gray-100 flex justify-between items-center ml-auto mr-auto">
            <img src={logo} alt="" className={styles.logo}/>
            <ul className="flex gap-5 text-xl">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar