import { navLists } from "../constants"
import { appleImg, bagImg, searchImg } from "../utils"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <div>
          <img src={appleImg} alt="Apple" width={18} height={20} />
        </div>
        <div className="flex flex-1 justify-center max-md:hidden">
          {
            navLists.map((navItems: any) => <div className="px-5 text-xs cursor-pointer text-gray hover:text-black transition-all" key={navItems}>{navItems}</div>)
          }
        </div>
        <div className="flex items-baseline gap-7 max-md:justify-end max-md:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar