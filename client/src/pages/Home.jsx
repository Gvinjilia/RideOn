import { useEffect, useState } from 'react';

import mainBackground1 from '../RideOn Images/10001.jpg';
import mainBackground2 from '../RideOn Images/10003.jpg';
import mainBackground3 from '../RideOn Images/10005.jpg';

import bike1 from '../RideOn Images/10002.png';
import bike2 from '../RideOn Images/10004.png';
import bike3 from '../RideOn Images/10006.png';
import image1 from '../RideOn Images/10034.jpg';
import image2 from '../RideOn Images/10035.jpg';
import image3 from '../RideOn Images/10036.jpg';
import image4 from '../RideOn Images/10037.jpg';
import image5 from '../RideOn Images/10038.jpg';

import aero from '../RideOn Images/10001.svg';
import kaway from '../RideOn Images/10002.svg';
import jestter from '../RideOn Images/10003.svg';
import enova from '../RideOn Images/10004.svg';
import rotor from '../RideOn Images/10005.svg';

import ride from '../RideOn Images/10039.jpg';

import shopProduct1 from '../RideOn Images/10040.jpg';
import shopProduct2 from '../RideOn Images/10041.jpg';
import shopProduct3 from '../RideOn Images/10042.jpg';
import shopProduct4 from '../RideOn Images/10043.jpg';

import dontMissOutPhoto from '../RideOn Images/10045.jpg';

import electronicBikesImage from '../RideOn Images/10044.jpg';

import parts from '../RideOn Images/10028.jpg';
import clothing from '../RideOn Images/10029.jpg';
import helmets from '../RideOn Images/10030.jpg';
import accessories from '../RideOn Images/10031.jpg';

import { useNavigate } from 'react-router';
import Bikes from './Bikes';
import { useBikes } from '../context/BikeContext';
import Footer from '../components/Footer';

const Home = () => {
    const [bikeIndex, setBikeIndex] = useState(0);
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
    const [animation, setAnimation] = useState('rollIn');
    const { getHeroBikes, heroSectionBikes, getFeaturedBikes, heroSectionFeatured } = useBikes();
    const navigate = useNavigate();


    useEffect(() => {
        getHeroBikes();
        getFeaturedBikes();
    }, []);

    const bikesArr = [
        {
            image: bike1,
            text: <>
                <p className='lg:text-xl md:text-xl font-bold text-white' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>ARE YOU READY</p><h1 style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='lg:text-[140px] md:text-[140px] sm:text-[120px] text-[110px] text-center font-bold text-white'><span className='block mb-[-40px]'>RIDE</span><span className='italic font-light'>IN</span> STYLE</h1>
            </>
        }, 
        {
            image: bike2,
            text:
            <>
               <p className='lg:text-xl md:text-xl font-bold text-white' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>WE HELP YOU PICK</p><h1 style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[60px] lg:text-[140px] md:text-[120px] sm:text-[115px] text-center font-bold text-white'><span className='block lg:mb-[-40px] md:mb-[-40px] sm:mb-[-35px] mb-[-20px]'>POWER</span><span className='italic font-light'>YOUR</span> ADVENTURE</h1>
            </>
        }, {
            image: bike3,
            text: <>
                <p className='lg:text-xl md:text-xl font-bold text-white' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>START YOUR OWN</p><h1 style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[80px] lg:text-[140px] md:text-[140px] sm:text-[120px] text-center font-bold text-white'><span className='block lg:mb-[-60px] md:mb-[-60px] sm:mb-[-50px] mb-[-40px]'>MAKE</span><span className='italic font-light'>EVERY</span> RIDE</h1>
            </>
        }];
    const backgroundImages = [mainBackground1, mainBackground2, mainBackground3];

    useEffect(() => {
        let timeout1, timeout2;

        const cycle = () => {
            setAnimation('rollIn');

            timeout1 = setTimeout(() => {
                setAnimation('');

                timeout2 = setTimeout(() => {
                    setAnimation('rollOut');

                    setTimeout(() => {
                        setBikeIndex((prev) => (prev + 1) % bikesArr.length);

                        setBackgroundImageIndex((prev) => (prev + 1) % backgroundImages.length);

                        cycle();
                    }, 1000)
                }, 4000);
            }, 1000);
        }

        cycle();

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        }
    }, []);

    return (
        <>
           <div className='flex flex-col justify-center items-center overflow-hidden mb-20' style={{ backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`, backgroundRepeat: 'no-repeat' }}>
                <div className='text-center pt-10 animate-slideInLeft leading-tight'>
                    {bikesArr[bikeIndex].text}
                </div>
                <img src={bikesArr[bikeIndex].image} width={1205} className={`${animation} z-10 lg:mt-[-220px] mb:mt-[-220px] sm:mt-[-220px] mt-[-120px]`} />
           </div>

            <div className='flex flex-wrap justify-center gap-7 mb-15'>
                <div className='lg:w-57 lg:h-57 md:w-57 md:h-57 sm:w-55 sm:h-55 w-35 h-35 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image1})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 2)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={aero} />
                </div>
                <div className='lg:w-57 lg:h-57 md:w-57 md:h-57 sm:w-55 sm:h-55 w-35 h-35 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image2})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 2)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={kaway} />
                </div>
                <div className='lg:w-57 lg:h-57 md:w-57 md:h-57 sm:w-55 sm:h-55 w-35 h-35 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image3})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 2)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={jestter} />
                </div>
                <div className='lg:w-57 lg:h-57 md:w-57 md:h-57 sm:w-55 sm:h-55 w-35 h-35 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image4})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 2)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={enova} />
                </div>
                <div className='lg:w-57 lg:h-57 md:w-57 md:h-57 sm:w-55 sm:h-55 w-35 h-35 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image5})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 1)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={rotor} />
                </div>
                <div className='bg-red-600 lg:w-57 lg:h-57 md:w-57 md:h-57 sm:w-55 sm:h-55 w-35 h-35 rounded-full flex justify-center items-center text-[13px] font-medium duration-300' onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 1)'} onMouseLeave={(e) => e.target.style.backgroundColor='#E7000B'}>
                    <p className='text-white'>SHOP ALL BRANDS</p>
                </div>
            </div>

            <hr className='w-full border-gray-300' />

            <div className='flex flex-col-reverse md:flex md:flex-row sm:flex sm:flex-row lg:flex lg:justify-between lg:items-start lg:w-full mb-20'>
                <div className='flex flex-col lg:w-full md:w-200 sm:w-150 '>
                    {heroSectionBikes.map((bike) => (
                        <div key={bike._id}>  
                            <div className='flex flex-col items-center justify-center lg:h-[510px] md:h-[510px] sm:h-[510px] h-[300px]' onClick={() => navigate(`/bikes/${bike._id}`)}>
                                <img src={bike.images[0]} className='lg:w-125 md:w-80 sm:w-70 w-60' />
                                <p className='text-gray-500'>{bike.type}</p>
                                <p className='text-xl font-bold' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>{bike.name}</p>
                                <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className='mb-5'>${bike.price}</p>
                            </div>
                            <hr className='w-full border-gray-300' />
                        </div>
                    ))}
                </div>

                <div className='lg:w-[1700px] lg:h-[1021px] md:w-full md:h-[1021px] sm:w-full sm:h-[1021px] h-50 w-full flex justify-center items-center' style={{ backgroundImage: `url(${ride})`, backgroundColor: 'rgba(0, 0, 0, 0.3)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                    <div className='lg:w-4 lg:h-4 ml-6 md:w-3 md:h-3 sm:w-2 sm:h-2 h-4 w-4 mt-3 sm:mt-4 lg:mt-0 md:mt-3' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                    <h1 className='lg:text-6xl text-white font-bold mt-5 pl-3 md:text-4xl sm:text-2xl text-3xl' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>ROAD BIKES</h1>
                </div>
            </div>
            <div className='lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col gap-7 flex flex-col justify-center items-center mb-20'>
                <div className='relative md:flex md:flex-row md:h-[1030px] sm:flex flex justify-center lg:w-[490px] lg:h-[926.66px] md:w-[360px] sm:w-full' onClick={() => navigate(`/shop`)}>
                    <div className='absolute text-center mt-15'>
                        <p className='lg:text-xl md:text-[17px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--text-color, #9E9E9E)'}}>LONG SLEEVE JERSEY</p>
                        <p className='lg:text-[55px] md:text-[45px] sm:text-[40px] text-[30px] font-bold text-red-500' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>GET <span className='text-black font-normal lg:text-6xl md:text-[50px] sm:text-[42px] text-[35px] italic pr-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>20$</span> OFF</p>
                        <p className='lg:text-[20px] md:text-[15px] font-normal mb-5' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif', color: 'var(--text-color, #9E9E9E)'}}>when you spend $100+ on<br />cycling clothing</p>
                        <button className='border p-2 w-35 text-[14px]'>SHOP NOW</button>
                    </div>
                    <img src={shopProduct1} className='md:object-cover sm:object-cover sm:w-[490px] sm:h-200 md:h-[1030px] lg:h-auto' />
                </div>
                <div className='flex flex-col gap-7'>
                    <div className='flex flex-col justify-center items-center sm:flex sm:flex-col sm:justify-center sm:items-center'>
                        <div className='lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col flex flex-col gap-7'>
                            <div className='relative lg:w-[490px] md:w-100' onClick={() => navigate(`/shop`)}>
                                <div className='absolute right-10 lg:top-10 md:top-10 sm:top-10 top-3'>
                                    <div>
                                        <p className='text-[16px] font-semibold ml-28' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--text-color, #9E9E9E)'}}>URBAN BIKES</p>
                                        <p className='text-[50px] font-semibold mb-15 leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)' }}><span className='pl-27 block'>FIND</span><span className='text-black font-normal text-6xl italic pr-2' style={{fontFamily: 'var( --font-family3, "Smooch Sans", sans-serif)'}}>YOUR</span> FAST</p>

                                        <div style={{backgroundColor: 'var(--background-color2, #FFA824)'}} className='lg:w-30 lg:h-30 md:w-30 md:h-30 sm:w-25 sm:h-25 w-25 h-25 rounded-full flex justify-center items-center ml-20'>
                                            <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif'}} className='italic text-3xl text-white font-light'>BEST <br /> DEAL</p>
                                        </div>
                                    </div>
                                </div>
                                <img src={shopProduct2} />
                            </div>
                            <div className='relative lg:w-[490px] md:w-100' onClick={() => navigate(`/shop`)}>
                                <div className='absolute right-10 top-40'>
                                    <div>
                                        <p className='lg:text-[50px] md:text-[30px] sm:text-[26px] text-[25px] font-semibold leading-none lg:ml-0 md:ml-50 sm:ml-10' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}><span className='lg:ml-10 md:ml-7 block'>LIGHT</span><span className='text-black font-light lg:text-6xl md:text-4xl italic'>SADDLE</span><span className='lg:ml-20 md:ml-12 block'>BAG</span></p>
                                        <p className='text-[16px] font-bold lg:ml-20 md:ml-55 sm:ml-10' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--text-color, #9E9E9E)'}}>SALE PRICE</p>
                                        <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--price-color, #00B67A)'}} className='font-bold lg:ml-18 md:ml-52 sm:ml-10 flex items-start mt-2'><span className='self-end text-4xl'>$59.</span><span className='text-2xl'>99</span></p>
                                    </div>
                                </div>
                                <img src={shopProduct3} />
                            </div>
                        </div>
                    </div>
                    <div className='relative lg:w-[1007px] md:w-100' onClick={() => navigate(`/shop`)}>
                        <div className='absolute flex flex-col bottom-10 left-12'>
                            <p className='text-[17px] font-bold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--text-color, #9E9E9E)'}}>OVERVOLT TR 3.5</p>
                            <p style={{color: 'var(--text-color2, #5F7C9F)', fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif'}} className='lg:text-5xl md:text-3xl font-semibold mb-5'><span className='text-black font-light lg:text-6xl md:text-3xl italic' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)' }}>EXCITE</span><br /> YOUR RIDE</p>
                            <button className='border p-2 w-35 text-[14px]'>SHOP NOW</button>
                        </div>
                        <img src={shopProduct4} className='lg:h-auto md:h-60 sm:h-55 h-55 md:object-cover' />
                    </div>
                </div>
            </div>
            <hr className='w-full border-gray-300' />
            <div className='flex flex-col md:flex md:flex-row sm:flex sm:flex-row lg:flex lg:justify-between lg:items-start lg:w-full mb-20'>
                <div className='lg:w-[1700px] lg:h-[1021px] md:h-[1021px] sm:h-[1021px] md:w-full sm:w-full h-50 flex justify-center items-center' style={{ backgroundImage: `url(${electronicBikesImage})`, backgroundColor: 'rgba(0, 0, 0, 0.3)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                    <div className='lg:w-4 lg:h-4 ml-6 md:w-3 md:h-3 sm:w-2 sm:h-2 sm:mt-3 w-4 h-4 lg:mt-0 md:mt-3' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                    <h1 className='lg:text-6xl text-white font-bold mt-5 pl-3 md:text-4xl sm:text-3xl text-3xl' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>ELECTRONIC BIKES</h1>
                </div>

                <div className='flex flex-col lg:w-full md:w-200 sm:w-150'>
                    {heroSectionFeatured.map((bike) => (
                        <div key={bike._id}>  
                            <div className='flex flex-col items-center justify-center lg:h-[510px] md:h-[510px] sm:h-[510px] h-[300px]' onClick={() => navigate(`/bikes/${bike._id}`)}>
                                <img src={bike.images[0]} className='lg:w-125 md:w-80 sm:w-70 w-60' />
                                <p className='text-gray-500'>{bike.type}</p>
                                <p className='text-xl font-bold' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>{bike.name}</p>
                                <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className='mb-5'>${bike.price}</p>
                            </div>
                            <hr className='w-full border-gray-300' />
                        </div>
                    ))}
                </div>
            </div>
            <>
                <div className='flex flex-wrap lg:gap-5 justify-center items-center mb-20 lg:max-w-[1800px]'>
                    <Bikes />
                </div>
                <hr className='w-full border-gray-300' />
            </>
            <>
                <div className='flex justify-between items-center sm:p-10 lg:p-0 md:p-0'>
                    <div className='flex flex-col justify-center items-center w-234 p-5'>
                        <div className='w-40 flex justify-center items-center'>
                            <p className='text-[15px] font-semibold p-2 mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>DON'T MISS OUT</p>
                        </div>
                        <p className='text-center lg:text-[60px] md:text-[50px] sm:text-[40px] text-[50px] font-bold leading-none mb-10' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>GET <span className='text-red-500'>25% OFF</span> NEXT <br /> PURCHASE</p>
                        <form>
                            <div className='flex justify-center items-center mb-5'>
                                <input className='bg-gray-100 lg:h-[52px] lg:w-[317px] pl-5 md:h-[52px] md:w-[200px] sm:h-[52px] sm:w-[340px] h-[52px] w-[150px]' type='email' name='email' placeholder='Enter email address...' required />
                                <button className='lg:w-[160px] md:w-[160px] sm:w-[160px] w-[130px] h-[52px] text-[15px]' style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>SUBSCRIBE</button>
                            </div>
                        </form>
                        <p className='lg:text-[14px] text-gray-400 md:text-center md:w-100 text-center text-[13px] w-70'>* By subscribing you agree to receive communications from us.</p>
                    </div>

                    <div>
                        <img src={dontMissOutPhoto} className='h-auto lg:block md:h-150 md:object-cover md:block sm:hidden hidden' />
                    </div>
                </div>
                <hr className='w-full border-gray-300 mb-20' />
            </>
            <div className='lg:flex lg:flex-row justify-center items-center lg:gap-7 md:gap-7 mb-20 md:flex md:flex-col sm:flex sm:flex-col flex flex-col gap-2'>
                <div className='lg:flex lg:flex-row lg:gap-7 md:gap-7 sm:gap-5 md:flex md:flex-row sm:flex sm:flex-row flex flex-row gap-2'>
                    <div className='group lg:w-[340px] lg:h-[438px] md:w-[320px] md:h-[435px] sm:w-[310px] sm:h-[430px] w-[170px] h-[220px] duration-400  flex justify-center items-center' style={{ backgroundImage: `url(${parts})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.1)'} onClick={() => navigate(`/shop`)}>
                        <div className='flex flex-col leading-[0.7]'>
                            <p className='text-white lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] font-semibold transition-transform duration-400 group-hover:translate-y-5.5' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>PARTS</p>
                            <p className='text-transparent lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] transition-transform duration-400 font-semibold group-hover:-translate-y-3.5 stroke-white fill' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>PARTS</p>
                        </div>
                    </div>
                    <div  className='group lg:w-[340px] lg:h-[438px] md:w-[320px] md:h-[435px] sm:w-[310px] sm:h-[430px] w-[170px] h-[220px] duration-400 flex justify-center items-center' style={{ backgroundImage: `url(${clothing})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.1)'} onClick={() => navigate(`/shop`)}>
                        <div className='flex flex-col leading-[0.7]'>
                            <p className='text-white lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] font-semibold transition-transform duration-400 group-hover:translate-y-5.5' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>CLOTHING</p>
                            <p className='text-transparent lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] transition-transform duration-400 font-semibold group-hover:-translate-y-3.5 stroke-white fill' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>CLOTHING</p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:flex-row lg:gap-7 md:gap-7 sm:gap-5 md:flex md:flex-row sm:flex sm:flex-row flex flex-row gap-2'>
                    <div className='group lg:w-[340px] lg:h-[438px] md:w-[320px] md:h-[435px] sm:w-[310px] sm:h-[430px] w-[170px] h-[220px] duration-400 flex justify-center items-center' style={{ backgroundImage: `url(${helmets})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.1)'} onClick={() => navigate(`/shop`)}>
                        <div className='flex flex-col leading-[0.7]'>
                            <p className='text-white lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] font-semibold transition-transform duration-400 group-hover:translate-y-5.5' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>HELMETS</p>
                            <p className='text-transparent lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] transition-transform duration-400 font-semibold group-hover:-translate-y-3.5 stroke-white fill' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>HELMETS</p>
                        </div>
                    </div>
                    <div className='group lg:w-[340px] lg:h-[438px] md:w-[320px] md:h-[435px] sm:w-[310px] sm:h-[430px] w-[170px] h-[220px] flex justify-center items-center duration-400' style={{ backgroundImage: `url(${accessories})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.1)'} onClick={() => navigate(`/shop`)}>
                        <div className='flex flex-col leading-[0.7]'>
                            <p className='text-white lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] font-semibold transition-transform duration-400 group-hover:translate-y-5.5' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>ACCESSORIES</p>
                            <p className='text-transparent lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] transition-transform duration-400 font-semibold group-hover:-translate-y-3.5 stroke-white fill' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>ACCESSORIES</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;