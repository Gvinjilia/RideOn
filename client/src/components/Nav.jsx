import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

import arrow from '../RideOn Images/10033.svg';
import cartImage from '../RideOn Images/cart.png';
import order from '../RideOn Images/checklist.png';
import profile from '../RideOn Images/person.png';

import search from '../RideOn Images/search (4).png';
import rightArrow from '../RideOn Images/right-arrow (2).png';
import logoutImage from '../RideOn Images/logout (1).png';

import menu from '../RideOn Images/menus.png'

import { useState } from "react";

const Nav = () => {
    const { user, logout } = useAuth();
    const { cart } = useCart();
    const { orders } = useOrders();
    const [toggle, setToggle] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header>
            <nav>
                <ul className="flex justify-center lg:items-center lg:gap-4">
                    {
                        user ? (
                            <>
                                <div className="p-5 w-150 flex justify-between gap-10 lg:justify-center lg:items-center" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
                                    <div className="flex flex-col lg:hidden justify-center">
                                        <img src={menu} width={30} onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)} className="mt-2" />

                                        {
                                            toggleMenu && (
                                                <div className="mt-5 flex flex-col w-full">
                                                    <li><Link to='/'>HOME</Link></li>
                                                    <li><Link to='/shop'>SHOP</Link></li>
                                                    <li><Link to='/about'>About Us</Link></li>
                                                    <li><Link to='/contact'>Contact Us</Link></li>
                                                    <li><Link to='/meetOurTeam'>Meet Our Team</Link></li>
                                                    <li><Link to='/orders'>Orders</Link></li>
                                                    <li><Link to='/profile'>Profile</Link></li>
                                                    <li onClick={logout}>Logout</li>
                                                    {
                                                        user.role === 'admin' && (
                                                            <li><Link to='/users'>USERS</Link></li>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                    <p className='text-[30px] font-semibold'>RIDEON</p>
                                    <div className="mt-2 lg:p-5 lg:hidden flex lg:gap-10 lg:justify-center lg:items-center">
                                        {
                                            cart && (
                                                <li><Link to='/cart'><img width={25} src={cartImage} /></Link></li>
                                            )
                                        }
                                    </div>
                                    <div className="hidden md:hidden sm:hidden lg:p-5 lg:flex lg:gap-10 lg:justify-center lg:items-center lg:font-semibold">
                                        <li><Link to='/'>HOME</Link></li>
                                        <li><Link to='/shop'>SHOP</Link></li>
                                        <div className="relative">
                                            <li className="flex gap-2" onClick={() => setToggle(prev => !prev)}>PAGES <img src={arrow} className="w-3" /></li>
                                            {
                                                toggle === true && (
                                                    <div className="bg-white absolute top-8 left-[-10px] h-40 w-35 flex flex-col gap-5 justify-center p-5 font-normal">
                                                        <li><Link to='/about'>About Us</Link></li>
                                                        <li><Link to='/contact'>Contact Us</Link></li>
                                                        <li><Link to='/meetOurTeam'>Meet Our Team</Link></li>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        {
                                            user.role === 'admin' && (
                                                <li><Link to='/users'>USERS</Link></li>
                                            )
                                        }
                                    </div>
                                </div>

                                <div className="hidden lg:flex lg:items-center lg:justify-between lg:border lg:p-2 lg:w-65 lg:pl-3 lg:ml-30">
                                    <img src={search} width={20} />
                                    <input placeholder="Search Products..." className="outline-none pl-3" />
                                    <div className="pr-2">
                                        <img src={rightArrow} width={10} />
                                    </div>
                                </div>

                                <div className="hidden lg:flex lg:gap-5 lg:justify-center lg:items-center">
                                    <li><Link to='/profile'><img width={35} src={profile} /></Link></li>

                                    {
                                        orders && (
                                            <li><Link to='/orders'><img width={25} src={order} /></Link></li>
                                        )
                                    }
                                </div>

                                <div className="hidden p-7 lg:p-2 lg:flex lg:gap-10 lg:justify-center lg:items-center">
                                    {
                                        cart && (
                                            <li><Link to='/cart'><img width={25} src={cartImage} /></Link></li>
                                        )
                                    }
                                </div>

                                <div className="hidden lg:flex lg:gap-5 lg:justify-center lg:items-center">
                                    <li onClick={logout}><img src={logoutImage} width={20} /></li>
                                </div>
                            </>
                        ) : (
                            <> 
                                <div className="p-5 flex gap-10 justify-center items-center font-semibold" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
                                    <p className="text-[30px]">RIDEON</p>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/signup'>Signup</Link></li>  
                                </div>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Nav;