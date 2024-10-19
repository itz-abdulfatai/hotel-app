import { Link } from "react-router-dom"

function Header() {
  return (
    <header className=" bg-transparent absolute top-0 z-50 left-0 right-0 flex justify-between items-center max-container padding-x py-7 ">
        <Link to={'/'} className=" text-white align-middle font-bold text-xl font-krona">Hotel</Link>
        <nav className=" max-md:hidden flex w-1/2 py-3 text-white  rounded-2xl glass-nav capitalize justify-around ">
            <Link className="">rooms</Link>
            <Link className="">offers</Link>
            <Link className="">activities</Link>
            <Link className="uppercase">faqs</Link>
            <Link className="">reviews</Link>
        </nav>
        <button className=" bg-white max-md:hidden px-10 uppercase  text-black rounded-full py-3 ">book</button>
        <button className=" md:hidden">
          
        <i className='bx bx-menu text-white text-xl'></i>

        </button>


    </header>
  )
}

export default Header