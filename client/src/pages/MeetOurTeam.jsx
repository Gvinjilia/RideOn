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
import Footer from '../components/Footer';

const MeetOurTeam = () => {
    return (
        <>
            <div className="lg:h-125 mb-20" style={{ backgroundImage: `url(${meetOurTeamImage})`, backgroundColor: 'rgba(0, 0, 0, 0.4)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-20 text-gray-400 text-[14px]">Home Page - <span className="text-white font-semibold text-[16px]">Meet Our Team</span></p>
                <div className="flex justify-center items-center">
                    <hr className="border-gray-500 w-385" />
                </div>
                <div className="flex items-center h-full">
                    <p className="ml-20 lg:text-[70px] md:text-[50px] sm:text-[45px] text-[35px] text-white font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>MEET OUR TEAM</p>
                </div>
            </div>
            <div className='flex justify-center items-center mb-20'>
                <div className='lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col flex flex-col gap-15'>
                    <div className='lg:flex lg:flex-col lg:items-start lg:text-start md:flex md:flex-col md:items-center md:text-center sm:flex sm:flex-col sm:items-center sm:text-center flex flex-col items-center text-center'>
                        <p className='mt-10 w-25 p-1 text-[14px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>FOUNDER</p>
                        <h1 className="leading-none text-[55px] font-semibold mb-5" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>ESTHER HOWARD</h1>
                        <p className='mb-5 lg:w-90 md:w-full sm:w-full w-full'>From his first BMX bike to his current Mongoose, Esther has lived and breathed bikes all his life. He turned his passion of BMX to a lifelong career that has ranged from BMX pro – to ESPN X Games reporter and competition judge at high-level events – to his current role as the Team Manager of Mongoose Bicycles. He currently travels with the Mongoose team supporting the riders at BMX and Mountain bike events – while continuing to share his love of bikes to the world.</p>
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
                    <img src={main} className='lg:h-137' />
                    <div className='flex flex-col gap-5'>
                        <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='self-start lg:w-85 md:w-full sm:w-full w-full h-60 pl-10 pt-10'>
                            <img src={gear} width={60} className='mb-10' />
                            <p className='font-semibold text-[30px] leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>100+ TRUSTED <br /> EXPERTS</p>
                        </div>
                        
                        <div className='flex flex-col gap-10 lg:ml-0 md:ml-5 sm:ml-5 ml-3'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                                    <p className='font-semibold text-[18px]' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>QUALITY</p>
                                </div>
                                <div>
                                    <p className='ml-6 lg:w-70 md:w-auto sm:w-auto w-auto'>Exceeding customers’ expectations through superior quality and professional workmanship</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                                    <p className='font-semibold text-[18px]' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>PERFORMANCE</p>
                                </div>
                                <div>
                                    <p className='ml-6 lg:w-70 md:w-auto sm:w-auto w-auto'>Providing quality auto repairs, efficient and effective diagnoses of problems, on-time service and maintenance</p>
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
                <div className='flex flex-wrap mb-10 gap-7 justify-center'>
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
                <div className='flex flex-wrap lg:justify-start md:justify-center sm:justify-center justify-center items-start gap-7 lg:ml-20'>
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
            <Footer />
        </>
    )
}

export default MeetOurTeam;