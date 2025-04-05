import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

export default function Footer () {
 const year = new Date ().getFullYear()
    return (
        <footer className="grid grid-cols-1 gap-4 md:px-8 md:grid-cols-2 lg:grid-cols-3 py-4 px-2 lg:gap-0">
            <div>
                <p className="text-2xl text-green-500 font-bold">urgentCa$h</p>
                <p className="text-xs text-gray-600"> &copy; {year} UrgentCa$h Limited</p>
            </div>
            <div>
                <p className="text-md text-gray-700">Head office</p>
                <p className="text-md text-gray-700">Ademola Adetokunbo crescent, Wuse 2, Abuja, Nigeria</p>
            </div>
            <div>
                <ul className="flex lg:justify-end items-center gap-4">
                   <li><Link href=""><FaFacebook className="text-lg text-green-500"/></Link></li>
                   <li><Link href=""><IoLogoTiktok  className="text-lg text-green-500"/></Link></li>
                   <li><Link href=""><FaInstagram  className="text-md text-green-500"/></Link></li>
                </ul>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#" className="text-sm text-gray-600">Terms of Use</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">Bug Bounty</Link></li>
                </ul>
            </div>
           

        </footer>
    )
}