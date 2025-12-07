import aboutUsImage from '../RideOn Images/10099.jpg';
import wheel from '../RideOn Images/10101.jpg';

import bike from '../RideOn Images/bike.png';
import accessories from '../RideOn Images/accessories.png';
import gear from '../RideOn Images/gear.png';

import photo from '../RideOn Images/10102.jpg';
import check from '../RideOn Images/check (4).png';

import icon from '../RideOn Images/icon.png';
import icon2 from '../RideOn Images/icon2.png';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <div className="lg:h-125 mb-20" style={{ backgroundImage: `url(${aboutUsImage})`, backgroundColor: 'rgba(0, 0, 0, 0.4)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-20 text-gray-400 text-[14px]">Home Page - <span className="text-white font-semibold text-[16px]">Our story</span></p>
                <div className="flex justify-center items-center">
                    <hr className="border-gray-500 w-385" />
                </div>
                <div className="flex items-center h-full">
                    <p className="ml-20 lg:text-[70px] md:text-[50px] sm:text-[50px] text-[40px] text-white font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>OUR STORY</p>
                </div>
            </div>
            <div className='lg:ml-20 md:ml-20 sm:ml-0 lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col gap-15 mb-20 lg:h-200 md:h-170 sm:h-380 h-340'>
                <div className='relative'>
                    <img src={wheel} className='lg:w-auto md:w-700' />
                </div>

                <div>
                    <div className='lg:text-left lg:flex lg:flex-col lg:items-start md:flex md:flex-col md:items-start md:text-start sm:flex sm:flex-col sm:items-center sm:text-center flex flex-col items-center text-center'>
                        <p className='mt-10 w-25 p-1 text-[13px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>WHO WE ARE</p>
                        <h1 className='mb-10 lg:w-130 md:w-100 lg:text-[60px] md:text-[35px] sm:text-[20px] text-[20px] font-semibold leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>WE HAVE BEEN MOTIVATING POEPLE TO CYCLE SINCE 1983</h1>
                        <p className='text-gray-700 text-[15px] lg:w-115 md:w-auto'>At RideOn, we’ve been sharing your passion for cycling for more than 110 years, constantly motivated by our drive for innovation, employees who love their jobs and a invaluable wealth of experience. In all our actions on- and offline, we stand for expertise in cycling, lifestyle, design and high-end technology, but also and above all, we stand for what connects us all: Our love for bicycles.</p>
                    </div>
                    <div className='lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col sm:gap-5 lg:gap-0 md:gap-0 bg-white lg:w-300 md:w-auto sm:w-auto w-auto justify-between absolute lg:left-100 lg:bottom-[-540px] md:left-0 p-15'>
                        <div className='lg:flex lg:flex-row lg:items-start lg:text-left md:flex md:items-start md:text-left md:flex-row sm:flex sm:flex-col sm:items-center sm:text-center flex flex-col items-center text-center gap-5'>
                            <img src={bike} width={50} />
                            <div>
                                <p className='mb-2 text-[19px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>BIKE FITTING & DELIVERY</p>
                                <p className='text-gray-700 lg:w-65'>We believe in the power of truth, authenticity, and transparency. The care and time we invest into each piece is the guarantee that  the next owner will receive a superior product.</p>
                            </div>
                        </div>
                        <div className='lg:flex lg:flex-row lg:items-start lg:text-left md:flex md:items-start md:text-left md:flex-row sm:flex sm:flex-col sm:items-center sm:text-center flex flex-col items-center text-center gap-5'>
                            <img src={accessories} width={50} />
                            <div>
                                <p className='mb-2 text-[19px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CUSTOM PARTS & ACCESSORIES</p>
                                <p className='text-gray-700 lg:w-65'>We are an epic team that faces challenges every day and believes in its vision. We support each  other, we race together and we  honestly have a lot of fun at it.</p>
                            </div>
                        </div>
                        <div className='lg:flex lg:flex-row lg:items-start lg:text-left md:flex md:items-start md:text-left md:flex-row sm:flex sm:flex-col sm:items-center sm:text-center flex flex-col items-center text-center gap-5'>
                            <img src={gear} width={50} />
                            <div>
                                <p className='mb-2 text-[19px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>COMPLETE OVERHAUL</p>
                                <p className='text-gray-700 lg:w-65'>We push ourselves and each other beyond our limits, and we are not afraid to make mistakes. We never stop learning, growing and  disrupting pre-established schemes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-20'>
                <div className='bg-black lg:w-380 md:w-250 sm:w-210 w-full lg:h-70 md:h-70 sm:h-70 h-170 flex justify-center items-center'>
                    <div className='lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-row flex flex-col justify-center lg:gap-40 md:gap-10 sm:gap-10 gap-10'>
                        <div className='relative flex flex-col'>
                            <p className='lg:text-[80px] md:text-[70px] sm:text-[55px] text-[45px] text-white z-10 font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>25</p>
                            <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='lg:w-17 md:w-17 sm:w-15 w-14 h-5 absolute lg:top-[75px] md:top-[65px] sm:top-[50px] top-[35px]'></div>
                            <p className='text-white mt-[-15px] lg:text-[20px] md:text-[15px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>YEARS IN BUSINESS</p>
                        </div>
                        <div className='relative flex flex-col'>
                            <p className='lg:text-[80px] md:text-[70px] sm:text-[55px] text-[45px] text-white z-10 font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>75+</p>
                            <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='lg:w-25 md:w-25 sm:w-20 w-14 h-5 absolute lg:top-[75px] md:top-[65px] sm:top-[50px] top-[35px]'></div>
                            <p className='text-white mt-[-15px] lg:text-[20px] md:text-[15px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>WORLDWIDE STORES</p>
                        </div>
                        <div>
                            <div className='relative flex flex-col'>
                                <p className='lg:text-[80px] md:text-[70px] sm:text-[55px] text-[45px] text-white z-10 font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>189K</p>
                                <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='lg:w-33 md:w-33 sm:w-25 w-20 h-5 absolute lg:top-[75px] md:top-[65px] sm:top-[50px] top-[35px]'></div>
                            </div>
                            <p className='text-white mt-[-15px] lg:text-[20px] md:text-[15px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>ACTIVE RIDERS</p>
                        </div>
                        <div className='relative flex flex-col'>
                            <p className='lg:text-[80px] md:text-[70px] sm:text-[55px] text-[45px] text-white z-10 font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>98%</p>
                            <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='lg:w-33 md:w-33 sm:w-25 w-20 h-5 absolute lg:top-[75px] md:top-[65px] sm:top-[50px] top-[35px]'></div>
                            <p className='text-white mt-[-15px] lg:text-[20px] md:text-[15px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>SATISFIED CUSTOMERS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:ml-20 md:ml-20 sm:ml-2 lg:flex lg:flex-col lg:items-start lg:text-start md:flex md:flex-col md:items-start md:text-start sm:flex sm:flex-col sm:items-center sm:text-center flex flex-col items-center text-center'>
                <p className='mt-10 w-20 p-1 text-[13px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>WHY US</p>
                <p className='mb-10 lg:text-[60px] md:text-[30px] font-semibold leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>RELIABLE SERVICE & <br /> SUPPORT</p>
            </div>
            <div className='lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col justify-center items-center mb-15'>
                <div className='flex flex-col gap-15 border border-gray-300 p-15 lg:w-auto md:w-auto sm:w-full'>
                    <div className='w-15 h-15 flex justify-center items-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>
                        <img src={check} width={20} />
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold mb-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>PRICING</p>
                        <p className='text-gray-700'>We work closely with our suppliers to <br /> be able to offer you the best deals on <br /> all the brands we stock.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-15 border border-gray-300 p-15 lg:h-[352px] md:h-auto lg:w-auto md:w-auto sm:w-full' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>
                    <div className='w-15 h-15 flex justify-center items-center bg-white'>
                        <img src={check} width={20} />
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold mb-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>QUALITY</p>
                        <p className='text-gray-700'>We buy bulk quantities of bikes and <br /> accessories and stock over 1000 bikes</p>
                    </div>
                </div>
                <div className='flex flex-col gap-15 border border-gray-300 p-15 lg:w-auto md:w-auto sm:w-full'>
                    <div className='w-15 h-15 flex justify-center items-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>
                        <img src={check} width={20} />
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold mb-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>PERFORMANCE</p>
                        <p className='text-gray-700'>We cater for all styles of cycling and <br /> thousands of accessories to perfectly <br /> tailor to your cycling experience.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-15 border border-gray-300 p-15 lg:h-[352px] md:h-auto lg:w-auto md:w-auto sm:w-full'>
                    <div className='w-15 h-15 flex justify-center items-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>
                        <img src={check} width={20} />
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold mb-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CUSTOMERS</p>
                        <p className='text-gray-700'>We provide all of our customers with <br /> fast and reliable service</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-15'>
                <img src={photo} />
            </div>
            <div className='lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center border border-gray-300 lg:w-192 lg:h-120 md:w-160 md:h-120 sm:w-full sm:h-105 h-100'>
                    <img src={icon2} className='w-20' />
                    <p className='mt-10 w-21 p-1 text-[13px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>NEED HELP</p>
                    <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[40px] font-semibold mb-3'>PURCHASE GUIDANCE</p>
                    <p className='text-center text-gray-700 mb-5 lg:text-[16px] md:text-[13px]'>Our mission is to provide access to the world’s most desired <br /> bikes in the smartest way.</p>
                    <button className='border text-[15px] w-40 p-2'>LEARN MORE</button>
                </div>
                <div className='flex flex-col justify-center items-center border border-gray-300 lg:w-192 lg:h-120 md:w-160 md:h-120 sm:w-full sm:h-105 h-100'>
                    <img src={icon} className='w-20' />
                    <p className='mt-10 w-35 p-1 text-[13px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>CUSTOMER SERVICE</p>
                    <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[40px] font-semibold mb-3'>MECHANICAL SUPPORT</p>
                    <p className='text-center text-gray-700 mb-5 lg:text-[16px] md:text-[13px]'>Manuals can be found either here or under Technical Overview – <br /> Technical Details & Manuals</p>
                    <button className='border text-[15px] w-40 p-2'>LEARN MORE</button>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default About;