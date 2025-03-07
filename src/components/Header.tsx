
import { FaSearchengin } from "react-icons/fa6";
import Link from "next/link";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";
import Notifications from "./notifications";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";



export default function Header() {
  return (
    <header className="w-full h-[60px] bg-white flex justify-between items-center  max-w-screen-2xl mx-auto">
      {/* left */}
      <div className="flex justify-center items-center text-black font-black">
        <SheetSide />
        <h1 className="text-3xl sm:text-black sm:text-4xl pl-2">SHOP.CO</h1>
      </div>
      {/* navbav */}
      <ul className="hidden md:block">
        <li className="space-x-5 flex items-center">
          <Link href={""}>
            {" "}
            <NavigationMenuDemo />
          </Link>
          <Link href={"/casual"}>On Sale</Link>
          <Link href={"/products"}>New Arrivals</Link>
          <Link href={"/"}>Brands</Link>
        </li>
      </ul>
      {/* search input */}
      <div className="hidden md:block">
        <div className="flex  justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
          <FaSearchengin className="text-xl ml-2" />
          <input
            placeholder="search item..."
            className="w-full ml-2 outline-none h-full rounded-[62px]   bg-[#F0F0F0] "
          ></input>
        </div>
      </div>
      {/* <SearchComponent/> */}
     
      {/* cart */}
      <div className="flex items-center mr-7 space-x-5">
      <IoIosSearch className="text-xl ml-2 md:hidden" />
        <Link href={"/cart"}>
        <IoCartOutline className="text-3xl"/>
        </Link>
        <Notifications/>
      </div>
    </header>
  );
}
