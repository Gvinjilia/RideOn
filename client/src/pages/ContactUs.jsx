import Footer from '../components/Footer';
import ContactUsImage from '../RideOn Images/10099.jpg';
import contactUsBike from '../RideOn Images/contactUsBike.png';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        name = e.target.name.value

        alert(`${name} we will contact you as soon as possible!`)

        e.target.reset();
    } 

    return (
        <>
            <div className="lg:h-125 mb-20" style={{ backgroundImage: `url(${ContactUsImage})`, backgroundColor: 'rgba(0, 0, 0, 0.4)', backgroundBlendMode: 'overlay', backgroundSize: 'cover', width:'full'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-20 text-gray-400 text-[14px]">Home Page - <span className="text-white font-semibold text-[16px]">Contact</span></p>
                <div className="flex justify-center items-center">
                    <hr className="border-gray-500 w-385" />
                </div>
                <div className="flex items-center h-full">
                    <p className="ml-20 lg:text-[70px] md:text-[50px] sm:text-[50px] text-[40px] text-white font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CONTACT</p>
                </div>
            </div>
            <div className='lg:flex lg:flex-row lg:items-start lg:text-start md:flex md:flex-col md:items-center md:text-center sm:flex sm:flex-col sm:items-center sm:text-center flex flex-col items-center text-center'>
                <div className='lg:mb-0 md:mb-20 sm:mb-15 mb-10'>
                    <div className='lg:ml-20'>
                        <h1 className="leading-none lg:text-[50px] md:text-[30px] sm:text-[30px] text-[30px] font-semibold mb-5 lg:w-60" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>HOW CAN WE HELP YOU?</h1>
                        <p className='text-gray-800 mb-5 lg:w-60'>Box 565, Pinney’s Beach, Charlestown, Nevis, West Indies, Caribbean</p>
                        <p className='text-[30px] font-semibold mb-5' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>TEL: +123 456 789 01 02</p>
                        <p className='text-[20px]' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>support_info@example.com</p>
                        <p className='text-[20px] mb-5' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>product_purchase@example.com</p>
                    </div>
                    <img src={contactUsBike} width={670} className='lg:block md:hidden sm:hidden hidden' />
                </div>
                <div>
                    <p className="leading-none lg:text-[50px] md:text-[30px] sm:text-[30px] text-[30px] font-semibold mb-5" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>GET IN TOUCH</p>
                    <p className='text-gray-800 mb-5 lg:w-150'>Welcome to our help center. If you have any questions, you are in the right place!
                    Just fill out the form below. Our bike experts are available from 9-6, Monday to Friday.</p>

                    <form onSubmit={handleSubmit}>
                        <input name='name' type='text' placeholder='First Name *' required className="lg:w-80 lg:mb-5 p-3 bg-gray-100 font-semibold text-[14px] mr-5 md:w-full md:mb-5 sm:mb-5 mb-5 sm:w-full w-full" />
                        <input name='lastname' type='text' placeholder='Last Name *' required className="lg:w-80 lg:mb-5 p-3 bg-gray-100 font-semibold text-[14px] mr-5 md:w-full md:mb-5 sm:mb-5 mb-5 sm:w-full w-full" />
                        <input name='subject' type='text' placeholder='Subject' required className="lg:w-75 lg:mb-5 p-3 bg-gray-100 font-semibold text-[14px] mb-5 md:w-full md:mb-5 sm:mb-5 sm:w-full w-full" />
                        <br />
                        <textarea name='message' placeholder='Message' required className="lg:w-245 h-50 p-3 bg-gray-100 font-semibold text-[14px] mb-5 md:w-full sm:w-full w-full"></textarea>

                        <button className='border w-30 p-2 text-[14px]'>SUBMIT</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;