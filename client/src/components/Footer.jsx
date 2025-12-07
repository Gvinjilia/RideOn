import emailLogo from '../RideOn Images/email.webp';
import call from '../RideOn Images/Call (2).png';
import facebook from '../RideOn Images/Facebook circle.svg';
import twitter from '../RideOn Images/Twitter alt.svg';
import instagram from '../RideOn Images/Instagram icon.svg';
import pinterest from '../RideOn Images/Pinterest p.svg';
import youtube from '../RideOn Images/Youtube filled.svg';
import cards from '../RideOn Images/10048.png';

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='lg:flex md:flex p-15 gap-15 justify-center mb-15' style={{backgroundColor: 'var(--footer-bg-color, #F7F7F7)'}}>
                <div className='flex flex-col justify-center items-center md:border-r md:border-gray-300 lg:border-r lg:border-gray-300'>
                    <div className='mr-20 text-center'>
                        <p className='mb-3 text-2xl font-semibold'>Excellent</p>
                        <div className='mb-2'>
                            <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={150}/>
                        </div>
                        <p className='mb-5 text-[13px] lg:mb-0 md:mb-10 md:w-35'>Based on 524 reviews</p>
                    </div>
                </div>
                <div>
                    <div className='mb-5 lg:block'>
                        <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                    </div>
                    <p className='mb-2 text-[17px] font-semibold'>Good experience</p>
                        
                    <p className='mb-5 text-gray-700 md:w-full lg:w-[295px]'>Best service I could have asked for. They went above and beyond to ensure I had everything I needed and gave me options at different price points.</p>
                    <p className='text-[17px] font-bold'>Derrick W.</p>
                    <p>30 Jul 2025</p>
                </div>
                <div className='hidden md:hidden lg:block'>
                    <div className='mb-5'>
                        <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                    </div>
                    <p className='mb-2 text-[17px] font-semibold'>Great service</p>
                        
                    <p className='mb-5 text-gray-700 md:w-full lg:w-[300px]'>First time customer buying a bike online. Everything went smoothly and response was quick. Bike arrived pre-tuned/checked and in well protected box.</p>
                    <p className='text-[17px] font-bold'>Wayne L.</p>
                    <p>2 Sep 2025</p>
                </div>
                <div className='hidden lg:block'>
                    <div className='mb-5'>
                        <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                    </div>
                    <p className='mb-2 text-[17px] font-semibold'>Good online bike shop</p>
                        
                    <p className='mb-5 text-gray-700 md:w-full lg:w-[300px]'>The bike arrived professionally packed into the box. Protectors in place to protect  the vulnerable components during transit.</p>
                    <p className='text-[17px] font-bold'>John C.</p>
                    <p>10 Sep 2025</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center lg:flex lg:flex-row lg:justify-start gap-10 lg:pl-30 md:gap-30 lg:gap-30 mb-10 md:flex md:flex-row md:justify-center'>
                <div className='lg:flex lg:flex-row lg:items-center flex flex-col gap-10 lg:gap-30 md:flex md:flex-col md:gap-5'>
                    <div>
                        <p className='text-gray-400 font-semibold flex justify-center items-center mb-2 lg:flex lg:justify-start md:flex md:justify-start'>Need Support?</p>
                        <div className='md:flex md:flex-row lg:flex lg:gap-5 lg:flex-row flex flex-col gap-2 items-center'>
                            <img src='https://www.svgrepo.com/show/496378/messages-3.svg' width={30} />
                            <div className='md:flex md:flex-col md:items-start md:justify-start lg:flex lg:flex-col lg:items-start flex flex-col justify-center items-center'>
                                <p className='text-[18px] font-semibold mb-1'>Chat via Messenger</p>
                                <p className='text-[14px] text-gray-400'>Mon-Fri, 9am-5pm</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex md:flex-row md:items-start md:justify-start lg:flex lg:gap-5 lg:flex-row flex flex-col gap-2 items-center'>
                        <img src={call} width={30} className='h-8' />
                        <div className='md:flex md:flex-col md:items-start md:justify-start lg:flex lg:flex-col lg:items-start flex flex-col justify-center items-center'>
                            <p className='text-[18px] font-semibold mb-1'>Call + (123) 124-5678</p>
                            <p className='text-[14px] text-gray-400'>Mon-Fri, 9am-5pm</p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:flex-row lg:items-center flex flex-col gap-10 lg:gap-30 md:flex md:flex-col md:justify-start md:items-start md:gap-5'>
                    <div className='md:flex md:flex-row md:items-start md:justify-start lg:flex lg:gap-5 lg:flex-row flex flex-col gap-2 items-center'>
                        <img src={emailLogo} width={30} className='h-8' />
                        <div className='md:flex md:flex-col md:items-start md:justify-start lg:flex lg:flex-col lg:items-start flex flex-col justify-center items-center'>
                            <p className='text-[18px] font-semibold mb-1'>Contact via Email</p>
                            <p className='text-[14px] text-gray-400'>Response may take up to 3 working days</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center lg:flex lg:flex-col md:justify-center lg:items-start md:items-center gap-2'>
                        <p className='text-gray-400 font-semibold md:mb-2 lg:mb-0'>Follow Us</p>
                        <div className='flex flex-row w-5 gap-5 justify-center md:flex md:flex-row md:justify-start md:items-start lg:flex lg:flex-row lg:justify-start'>
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={pinterest} />
                            <img src={instagram} width={15} />
                            <img src={youtube} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <hr className='w-[1500px] border-gray-300 mb-10' />
            </div>
            <div className='pl-3 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-40 mb-10 md:flex md:flex-col md:gap-10'>
                <div className='lg:flex lg:gap-40 md:flex md:gap-25 justify-center'>
                    <div>
                        <p className='text-2xl w-24 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>INFORMATION</p> 

                        <div className='flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start md:flex md:flex-col md:justify-start md:items-start'>
                            <p>About Us</p>
                            <p>Stores</p>
                            <p>Delivery</p>
                            <p>Returns</p>
                            <p>Click & Collect</p>
                            <p>News</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold mb-5 leading-none w-40' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>PURCHASE & DELIVERY</p>

                        <div className='flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start md:flex md:flex-col md:justify-start md:items-start'>
                            <p>Shipping</p>
                            <p>Returns</p>
                            <p>Payments</p>
                            <p>Bike Finance</p>
                            <p>Warranty</p> 
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold w-16 mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>SUPPORT</p>

                        <div className='flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start md:flex md:flex-col md:justify-start md:items-start'>
                            <p>Contact us</p>
                            <p>Bike size guide</p>
                            <p>Electric bike</p>
                            <p>Knowledge</p>
                            <p>Bike knowledge</p>
                            <p>Store locator</p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex justify-center lg:gap-40 md:flex md:flex-row md:gap-25'>
                    <div>
                        <p className='text-2xl w-21 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>CATEGORIES</p>

                        <div className='flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start md:flex md:flex-col md:justify-start md:items-start'>
                            <p>Electric bikes</p>
                            <p>Mountain bikes</p>
                            <p>Folding bikes</p>
                            <p>Men's bikes</p>
                            <p>Ladies' bikes</p>
                            <p>Hybrid bikes</p>
                        </div>
                    </div>
                    <div className='md:w-[158px] lg:w-auto'>
                        <p className='text-2xl w-15 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>BRANDS</p>

                        <div className='flex mb-5 flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start md:flex md:flex-col md:justify-start md:items-start'>
                            <p>Argon 18</p>
                            <p>Basso</p>
                            <p>Bianchi</p>
                            <p>BMC</p>
                            <p>Cannondale</p>
                            <p>Cervélo</p>
                        </div>
                    </div>
                    <div className='md:w-[111px] lg:w-auto flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start md:flex md:flex-col md:justify-start md:items-start'>
                        <p>Haibike</p>
                        <p>Kross</p>
                        <p>Look</p>
                        <p>Merida</p>
                        <p>Orbea</p>
                        <p>Pinarello</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <hr className='w-[1500px] border-gray-300 mb-10' />
            </div>
            <div className='justify-center items-center gap-11 lg:flex lg:w-[1600px] lg:justify-between mb-10 md:flex md:flex-row md:justify-between flex flex-col'>
                <div className='lg:pl-24 md:pl-15'>
                    <p>Copyright &copy; {new Date().getFullYear()} RideOn. All rights reserved</p>
                </div>

                <img src={cards} className='md:mr-10 lg:md-0' width={220} height={50} />
            </div>
        </div>
    )
};

export default Footer;