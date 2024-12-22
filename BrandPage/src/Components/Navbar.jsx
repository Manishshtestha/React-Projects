import logo from '../assets/Nike-Logo.png';
function NavBar(){
    return(
        <nav className="width-screen flex justify-between items-center bg-slate-500 pl-4 pr-4">
            <div className="">
                <img src={logo} alt="logo" width={100}/>
            </div>
            <ul className="flex justify-center gap-4 text-2xl  list-none">
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className='bg-red-500 pr-3 pl-3 p-2 rounded-lg'>Login</button>
        </nav>
    )
}
export default NavBar