
import Chatbot from "../Chatbot"
import LeadingCompany from "./LeadingCompany"
import OurServices from "./ServiceDashboard"
import TrustLable from "./TrustLable"

const Hero = () => {

    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

                    *{
                        font-family: "Poppins", sans-serif;
                    }`
                }
            </style>
          <section className="flex flex-col items-center bg-[#F5F9FC] px-4 py-4 pb-20">  

                <div className="flex flex-wrap items-center justify-center gap-2 pl-2 pr-4 py-1.5 mt-30 rounded-full bg-white/50 border border-white">
                    <div className="relative flex size-3.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
                    </div>
                    <p className="text-sm text-black/60">Trusted by 3,200+ airlines & travel agencies worldwide</p>
                </div>

                <h1 className='text-4xl md:text-[66px]/19 text-center max-w-2xl mt-8 text-gray-800 bg-clip-text leading-tight font-medium'>The Smarter hub for seamless airline operations</h1>
                <p className="text-sm text-gray-600 text-center max-w-[630px] mt-4">
                   Connect passengers, routes, and bookings in one powerful platform. From real-time seat inventory to interline agreements — everything your airline needs, beautifully unified.   </p>

                <div className='flex gap-3 mt-10'>
                    <button className="bg-blue-600 hover:bg-blue-900 shadow-lg text-white text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer">
                        Explore the Hub
                    </button>
                    <button className="bg-white hover:bg-white/5 border shadow-lg border-blue-400 text-gray-600 text-xs md:text-sm px-5 py-3 rounded-lg transition cursor-pointer">
                        Book a demo
                    </button>
                </div>

                <div className='w-full max-w-[800px] h-[3px] mt-10 bg-linear-to-r from-white/10 via-blue-600 to-white/10'></div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-18 max-w-[930px] w-full'>
                    <div className='text-center'>
                        <h2 className='font-medium text-2xl md:text-3xl text-gray-800'>120+</h2>
                        <p className='text-xs md:text-sm text-gray-500'>Airlines Connected</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-medium text-2xl md:text-3xl text-gray-800'>4.2M+</h2>
                        <p className='text-xs md:text-sm text-gray-500'>Flights Processed</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-medium text-2xl md:text-3xl text-gray-800'>98.9%</h2>
                        <p className='text-xs md:text-sm text-gray-500'>Uptime Reliability</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-medium text-2xl md:text-3xl text-gray-800'>50+</h2>
                        <p className='text-xs md:text-sm text-gray-500'>Countries Served</p>
                    </div>


                </div>
                <TrustLable/>
               <LeadingCompany/>
            </section>
            <OurServices/>
            <Chatbot/>
        </>
    )
}

export default Hero
