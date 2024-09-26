"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './header.css';
import search from '../../assets/icons/MagnifyingGlass.svg';
import user from '../../assets/icons/User.svg';
import cake from '../../assets/icons/Tote.svg';

const Header: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <header>
      <div className="container">
        <nav>
          <div id="span"></div>
          <ul>
            <li><Link className={`${pathname === "/" ? "active" : ""}`} href="/">Home</Link></li>
            <li><Link className={`${pathname === "/menu" ? "active" : ""}`} href="/menu">Menu</Link></li>
            <li><Link className={`${pathname === "/about" ? "active" : ""}`} href="/about">About</Link></li>
            <li><Link className={`${pathname === "/shop" ? "active" : ""}`} href="/shop">Shop</Link></li>
          </ul>
          <div id="span"  className="flex gap-2">
            <Link href="#"><Image className="w-4" src={search} alt="" /></Link>
            <Link href="#"><Image className="w-4" src={user} alt="" /></Link>
            <Link href="#"><Image className="w-4" src={cake} alt="" /></Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
