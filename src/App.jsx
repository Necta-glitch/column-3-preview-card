import sedan from './images/icon-sedans.svg'
import luxury from './images/icon-luxury.svg'
import suvs from './images/icon-suvs.svg'

import './App.css'

function App() {


  return (
    <>
    {/* Container of the page */}
     <div className="flex bg-Transparent-white md:flex  justify-center  md:h-screen items-center " >
      {/* Container of the card */}
      <div className="flex  flex-col md:flex-row md:justify-center lg:w-[990px] lg:h-[450px] w-[300px]  my-14 ">
        {/* First Div container */}
        <div className="rounded-t-lg md:rounded-none md:rounded-l-lg  basis-1/3 p-8  bg-Bright-orange">
          <img className='w-11' src={sedan} alt="Sedan icon" />
          <h1 className='text-[24px] my-3 lg:text-[26px] lg:my-4'>Sedans</h1>
          <p className='lg:text-[19px] mb-16'> Choose a sedan for its affordability and excellent 
            fuel economy. Ideal for cruising in the city or on 
            your next road trip.</p>
            <button className=' bg-Very-light-gray text-Bright-orange hover:text-Transparent-white  hover:bg-Bright-orange hover:border-[2px] hover:border-orange-50 w-[150px] h-12'>Learn More</button>
        </div>
        {/* Second Div container  */}
        <div className=" basis-1/3 p-8 bg-Dark-cyan" >
        <img className='w-11' src={suvs} alt="Sedan icon" />
          <h1 className='my-3 text-[24px] lg:text-[26px] lg:my-4 '>Suvs</h1>
          <p className='lg:text-[19px] mb-16'> Take an SUV for its spacious interior, power, and versatility. 
            Perfect for your next family vacation and off-road adventures.</p>
            <button className=' bg-Very-light-gray text-Dark-cyan hover:text-Transparent-white  hover:bg-Dark-cyan hover:border-[2px] hover:border-orange-50 w-[150px] h-12'>Learn More</button>
        </div>
        {/* Third Div container */}
        <div className=" rounded-b-lg md:rounded-none md:rounded-r-lg p-8 basis-1/3 bg-Very-dark-cyan" >
        <img className='w-11' src={luxury} alt="Sedan icon" />
          <h1 className='text-[24px] my-3 lg:text-[26px] lg:my-4'>Luxury</h1>
          <p className='lg:text-[19px] mb-16'> Cruise in the best car brands without the bloated 
            prices. Enjoy the enhanced comfort of a luxury rental 
            and arrive in style.</p>
            <button className=' bg-Very-light-gray text-Very-dark-cyan hover:text-Transparent-white hover:bg-Very-dark-cyan hover:border-[2px] hover:border-orange-50 w-[150px] h-12'>Learn More</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
