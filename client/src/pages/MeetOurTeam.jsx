import meetOurTeamImage from '../RideOn Images/10099.jpg';

import main from '../RideOn Images/10001 (3).jpg';

import signature from '../RideOn Images/signature.png';

import facebook1 from '../RideOn Images/facebook-app-symbol (4).png';
import twitter1 from '../RideOn Images/twitter (3).png';
import youtube1 from '../RideOn Images/youtube (4).png';
import instagram1 from '../RideOn Images/instagram (8).png';
import pinterest1 from '../RideOn Images/Pinterest p.svg';

import gear from '../RideOn Images/gear2.png';

import person1 from '../RideOn Images/10002 (3).jpg';
import person2 from '../RideOn Images/10003 (2).jpg';
import person3 from '../RideOn Images/10004 (1).jpg';
import person4 from '../RideOn Images/10005 (1).jpg';
import person5 from '../RideOn Images/10006 (1).jpg';
import person6 from '../RideOn Images/10007 (1).jpg';
import person7 from '../RideOn Images/10008 (1).jpg';
import cards from '../RideOn Images/10048.png';
import call from '../RideOn Images/Call (2).png';
import emailLogo from '../RideOn Images/email.webp';
import facebook from '../RideOn Images/Facebook circle.svg';
import instagram from '../RideOn Images/Instagram icon.svg';
import twitter from '../RideOn Images/Twitter alt.svg';
import youtube from '../RideOn Images/Youtube filled.svg';

const MeetOurTeam = () => {
    return (
        <>
            <div className="h-125 mb-20" style={{ backgroundImage: `url(${meetOurTeamImage})`, backgroundColor: 'rgba(0, 0, 0, 0.4)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-20 text-gray-400 text-[14px]">Home Page - <span className="text-white font-semibold text-[16px]">Meet Our Team</span></p>
                <div className="flex justify-center items-center">
                    <hr className="border-gray-500 w-385" />
                </div>
                <div className="flex items-center h-full">
                    <p className="ml-20 text-[70px] text-white font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>MEET OUR TEAM</p>
                </div>
            </div>
            <div className='flex justify-center items-center mb-20'>
                <div className='flex gap-15'>
                    <div>
                        <p className='mt-10 w-25 p-1 text-[14px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>FOUNDER</p>
                        <h1 className="leading-none text-[55px] font-semibold mb-5" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>ESTHER HOWARD</h1>
                        <p className='mb-5'>From his first BMX bike to his current Mongoose, <br /> Esther has lived and breathed bikes all his life. He <br /> turned his passion of BMX to a lifelong career that <br /> has ranged from BMX pro – to ESPN X Games <br /> reporter and competition judge at high-level events <br /> – to his current role as the Team Manager of <br /> Mongoose Bicycles. He currently travels with the <br /> Mongoose team supporting the riders at BMX and <br /> Mountain bike events – while continuing to share <br /> his love of bikes to the world.</p>
                        <img src={signature} width={150} className='mb-10' />
                        <div className='flex gap-2'>
                            <div className='bg-gray-300 w-12 h-12 flex justify-center items-center'>
                                <img src={facebook} width={20} />
                            </div>
                            <div className='bg-gray-300 w-12 h-12 flex justify-center items-center'>
                                <img src={twitter} width={20} />
                            </div>
                            <div className='bg-gray-300 w-12 h-12 flex justify-center items-center'>
                                <img src={youtube} width={20} />
                            </div>
                            <div className='bg-gray-300 w-12 h-12 flex justify-center items-center'>
                                <img src={instagram} width={20} />
                            </div>
                        </div>
                    </div>
                    <img src={main} className='h-137' />
                    <div className='flex flex-col gap-5'>
                        <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='self-start w-85 h-60 pl-10 pt-10'>
                            <img src={gear} width={60} className='mb-10' />
                            <p className='font-semibold text-[30px] leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>100+ TRUSTED <br /> EXPERTS</p>
                        </div>
                        
                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                                    <p className='font-semibold text-[18px]' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>QUALITY</p>
                                </div>
                                <div>
                                    <p className='ml-6'>Exceeding customers’ expectations through <br /> superior quality and professional <br /> workmanship</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                                    <p className='font-semibold text-[18px]' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>PERFORMANCE</p>
                                </div>
                                <div>
                                    <p className='ml-6'>Providing quality auto repairs, efficient and <br /> effective diagnoses of problems, on-time <br /> service and maintenance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <hr className="border-gray-200 w-385" />
            </div>
            <div className='mt-20 gap-7'>
                <div className='flex mb-10 gap-7 justify-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-100 w-90 flex justify-center items-end' style={{backgroundImage: `url('${person1}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p className='mt-10 w-25 p-1 text-[14px] font-bold flex justify-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>SUPERVISOR</p>
                        </div>
                        <p className='flex justify-center items-center mt-5 text-[30px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>RON KROSS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-100 w-90 flex justify-center items-end' style={{backgroundImage: `url('${person2}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p className='mt-10 w-40 p-1 text-[14px] font-bold flex justify-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>CUSTOMER SERVICE</p>
                        </div>
                        <p className='flex justify-center items-center mt-5 text-[30px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>GUY HAWKINS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-100 w-90 flex justify-center items-end' style={{backgroundImage: `url('${person3}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p className='mt-10 w-32 p-1 text-[14px] font-bold flex justify-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>ENGINE EXPERT</p>
                        </div>
                        <p className='flex justify-center items-center mt-5 text-[30px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>RALPH EDWARDS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-100 w-90 flex justify-center items-end' style={{backgroundImage: `url('${person4}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p className='mt-10 w-32 p-1 text-[14px] font-bold flex justify-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>MECHANIC</p>
                        </div>
                        <p className='flex justify-center items-center mt-5 text-[30px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>DEVON LANE</p>
                    </div>
                </div>
                <div className='flex items-start gap-7 ml-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-100 w-90 flex justify-center items-end' style={{backgroundImage: `url('${person5}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p className='mt-10 w-32 p-1 text-[14px] font-bold flex justify-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>MECHANIC</p>
                        </div>
                        <p className='flex justify-center items-center mt-5 text-[30px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>JOHN PENA</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-100 w-90 flex justify-center items-end' style={{backgroundImage: `url('${person6}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p className='mt-10 w-32 p-1 text-[14px] font-bold flex justify-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>MECHANIC</p>
                        </div>
                        <p className='flex justify-center items-center mt-5 text-[30px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>JANE COOPER</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-100 w-90 flex justify-center items-end' style={{backgroundImage: `url('${person7}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p className='mt-10 w-32 p-1 text-[14px] font-bold flex justify-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>MECHANIC</p>
                        </div>
                        <p className='flex justify-center items-center mt-5 text-[30px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CAMERON WILLIAMSON</p>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className='flex p-15 gap-15 justify-center mb-15' style={{backgroundColor: 'var(--footer-bg-color, #F7F7F7)'}}>
                    <div className='flex flex-col justify-center items-center border-r border-gray-300'>
                        <div className='mr-20 text-center'>
                            <p className='mb-3 text-2xl font-semibold'>Excellent</p>
                            <div className='mb-2'>
                                <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={150}/>
                            </div>
                            <p className='text-[13px]'>Based on 524 reviews</p>
                        </div>
                    </div>
                    <div>
                        <div className='mb-5'>
                            <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                        </div>
                        <p className='mb-2 text-[17px] font-semibold'>Good experience</p>
                        
                        <p className='mb-5 text-gray-700'>Best service I could have asked for. They <br /> went above and beyond to ensure I had <br /> everything I needed and gave me options <br /> at different price points.</p>
                        <p className='text-[17px] font-bold'>Derrick W.</p>
                        <p>30 Jul 2025</p>
                    </div>
                    <div>
                        <div className='mb-5'>
                            <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                        </div>
                        <p className='mb-2 text-[17px] font-semibold'>Great service</p>
                        
                        <p className='mb-5 text-gray-700'>First time customer buying a bike online. <br /> Everything went smoothly and response <br /> was quick. Bike arrived pre-tuned/checked <br /> and in well protected box.</p>
                        <p className='text-[17px] font-bold'>Wayne L.</p>
                        <p>2 Sep 2025</p>
                    </div>
                    <div>
                        <div className='mb-5'>
                            <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                        </div>
                        <p className='mb-2 text-[17px] font-semibold'>Good online bike shop</p>
                        
                        <p className='mb-5 text-gray-700'>The bike arrived professionally packed <br /> into the box. Protectors in place to protect <br /> the vulnerable components during transit.</p>
                        <p className='text-[17px] font-bold'>John C.</p>
                        <p>10 Sep 2025</p>
                    </div>
                </div>
                <div className='flex gap-30 pl-30 items-center mb-10'>
                    <div>
                        <p className='text-gray-400 font-semibold'>Need Support?</p>
                        <div className='flex gap-5'>
                            <img src='https://www.svgrepo.com/show/496378/messages-3.svg' width={30} />
                            <div>
                                <p className='text-[18px] font-semibold mb-1'>Chat via Messenger</p>
                                <p className='text-[14px] text-gray-400'>Mon-Fri, 9am-5pm</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <img src={call} width={30} className='h-8' />
                        <div>
                            <p className='text-[18px] font-semibold mb-1'>Call + (123) 124-5678</p>
                            <p className='text-[14px] text-gray-400'>Mon-Fri, 9am-5pm</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <img src={emailLogo} width={30} className='h-8' />
                        <div>
                            <p className='text-[18px] font-semibold mb-1'>Contact via Email</p>
                            <p className='text-[14px] text-gray-400'>Response may take up to 3 working days</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-400 font-semibold'>Follow Us</p>
                        <div className='flex w-5 gap-5'>
                            <img src={facebook1} />
                            <img src={twitter1} />
                            <img src={pinterest1} />
                            <img src={instagram1} width={15} />
                            <img src={youtube1} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='w-[1500px] border-gray-300 mb-10' />
                </div>
                <div className='flex justify-center items-center gap-40 mb-10'>
                    <div>
                        <p className='text-2xl w-24 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>INFORMATION</p> 

                        <p>About Us</p>
                        <p>Stores</p>
                        <p>Delivery</p>
                        <p>Returns</p>
                        <p>Click & Collect</p>
                        <p>News</p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold mb-5 leading-none' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>PURCHASE & DELIVERY</p>

                        <p>Shipping</p>
                        <p>Returns</p>
                        <p>Payments</p>
                        <p>Bike Finance</p>
                        <p>Warranty</p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold w-16 mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>SUPPORT</p>

                        <p>Contact us</p>
                        <p>Bike size guide</p>
                        <p>Electric bike</p>
                        <p>Knowledge</p>
                        <p>Bike knowledge</p>
                        <p>Store locator</p>
                    </div>
                    <div>
                        <p className='text-2xl w-21 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>CATEGORIES</p>

                        <p>Electric bikes</p>
                        <p>Mountain bikes</p>
                        <p>Folding bikes</p>
                        <p>Men's bikes</p>
                        <p>Ladies' bikes</p>
                        <p>Hybrid bikes</p>
                    </div>
                    <div>
                        <p className='text-2xl w-15 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>BRANDS</p>

                        <p>Argon 18</p>
                        <p>Basso</p>
                        <p>Bianchi</p>
                        <p>BMC</p>
                        <p>Cannondale</p>
                        <p>Cervélo</p>
                    </div>
                    <div>
                        <p>Haibike</p>
                        <p>Kross</p>
                        <p>Look</p>
                        <p>Merida</p>
                        <p>Orbea</p>
                        <p>Pinarello</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='w-[1500px] border-gray-300 mb-10' />
                </div>
                <div className='flex w-[1600px] justify-between mb-10'>
                    <div className='pl-24'>
                        <p>Copyright &copy; {new Date().getFullYear()} RideOn. All rights reserved</p>
                    </div>

                    <img src={cards} />
                </div>
            </div>
        </>
    )
}

export default MeetOurTeam;