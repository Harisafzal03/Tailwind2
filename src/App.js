"UserClient"
import { useState } from 'react';
import logo from './logo.svg';
import icon from './assets/icon.png';
import icon1 from './assets/icon1.png';
import './App.css';
import './index.css';


function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  

  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };
  

  const handleClick1 = () => {
    setIsClicked1(!isClicked1);
  };
  const Data=[
    { title:"20,000+ of PNG & SVG graphics"},
    { title:"Access to 100 million stock images"},
    { title:"Upload custom icons and fonts"},
    { title:"Unlimited sharing"},
    { title:"Upload graphics and videos in up to 4k"},
    { title:"Unlimited Projects"},
    { title:"Instant acces to our design system"},
    { title:"Create teams to collaborate on designs"},
  ]
  

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='my-16'>
    <div className='flex justify-center' >
      <div >
        <div className='flex-col' >
          <text className='text-4xl text-black font-bold'>Powerful features for</text>
          <p></p>
          <text className='text-4xl text-blue-700 font-bold flex justify-center mb-5'>powerful creators</text>
          <p></p>
          <text className='text-lg text-black font-normal flex justify-center'>Choose a plan that’s right for you</text>        
        </div>
        <div className='flex justify-center my-10'>
            <text className='text-base font-normal mr-8'>Pay Monthly  </text>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div className={`toggle__line w-8 h-4  rounded-full shadow-inner ${
                   isChecked ? 'bg-blue-300' : 'bg-gray-400'
                   }`}></div>
                <div
                   className={`toggle__dot absolute w-4 h-4 rounded-full shadow inset-y-0 ${
                   isChecked ? 'right-0 bg-blue-500' : 'left-0 bg-white'
                   }`}
                ></div>
              </div>
            </label>
            <text className='text-base font-normal ml-8'>  Pay Yearly</text>
        </div>               
      </div>  
    </div>
    <div className='sm:flex justify-center gap-6 mx-28 xs:grid'>
    <div className={`flex-1 rounded-md py-10 px-6 transition duration-300 transform ${
        isClicked1 ? '-translate-y-2 shadow-lg bg-blue-500' : ''
      }`}
      onClick={handleClick1}>
      <text className={`text-xl font-bold ${isClicked1 ? 'text-white' : 'text-black'}`}>Freebie</text>
      <p></p>
      <text className={`text-base font-normal ${isClicked1 ? 'text-white' : 'text-black'}`}>Ideal for individuals who need quick access to basic features.</text>
      <div className='my-7'>
        <text className={`text-6xl font-semibold ${isClicked1 ? 'text-white' : 'text-black'}`}>$0</text>
        <text className={`text-base font-light ${isClicked1 ? 'text-white' : 'text-black'}`}>/ Month</text>
      </div>
      <button className='flex justify-center border-2 border-blue-500 text-blue-500 w-full h-10 pt-1 bg-white rounded-md mb-8'>Get Started Now</button>
      {Data.map((item, index) => (
        <div className='flex'>
          {index < 2 ? (
           <img className='h-7 w-7 my-2 mr-5' src={icon} alt="icon"/>           
           ) : (
          <img className='h-7 w-7 my-2 mr-5' src={icon1} alt="icon1"/>
          )}
          {index < 2 ? (
           <text className={`font-medium text-base my-2 ${isClicked1 ? 'text-white' : 'text-black'}`} >{item.title}</text>          
           ) : (
            <text className={`font-medium text-base my-2 ${isClicked1 ? 'text-white' : 'text-gray-400'}`}>{item.title}</text>
          )}          
        </div>
        
      ))}
    </div>
    <div className={`flex-1 rounded-md py-10 px-6 transition duration-300 transform ${
        isClicked2 ? '-translate-y-2 shadow-lg bg-blue-500' : ''
      }`}
      onClick={handleClick2}>
      <text className={`text-xl font-bold ${isClicked2 ? 'text-white' : 'text-black'}`}>Professional</text>
      <p></p>
      <text className={`text-base font-normal ${isClicked2 ? 'text-white' : 'text-black'}`}>Ideal for individuals who who need advanced features and tools for client work.</text>
      <div className='my-7'>
        <text className={`text-6xl font-semibold ${isClicked2 ? 'text-white' : 'text-black'}`}>$25</text>
        <text className={`text-base font-light ${isClicked2 ? 'text-white' : 'text-black'}`}>/ Month</text>
      </div>
      <button className='flex justify-center border-2 border-blue-500 text-blue-500 w-full h-10 pt-1 bg-white rounded-md mb-8'>Get Started Now</button>
      {Data.map((item, index) => (
        <div className='flex'>         
          {index < 6 ? (
           <img className='h-7 w-7 my-2 mr-5' src={icon} alt="icon"/>           
           ) : (
          <img className='h-7 w-7 my-2 mr-5' src={icon1} alt="icon1"/>
          )}
          {index < 6 ? (
           <text className={`font-medium text-base my-2 ${isClicked2 ? 'text-white' : 'text-black'}`} >{item.title}</text>          
           ) : (
            <text className={`font-medium text-base my-2 ${isClicked2 ? 'text-white' : 'text-gray-400'}`}>{item.title}</text>
          )}
        </div>
        
      ))}
    </div>
    <div
      className={`flex-1 rounded-md py-10 px-6 transition duration-300 transform ${
        isClicked ? '-translate-y-2 shadow-lg bg-blue-500' : ''
      }`}
      onClick={handleClick}
    >
      <text className={`text-xl font-bold ${isClicked ? 'text-white' : 'text-black'}`}>Enterprise</text>
      <p></p>
      <text className={`text-base font-normal ${isClicked ? 'text-white' : 'text-black'}`}>Ideal for businesses who need personalized services and security for large teams. </text>
      <div className='my-7'>
        <text className={`text-6xl font-semibold ${isClicked ? 'text-white' : 'text-black'}`}>$100</text>
        <text className={`text-base font-light ${isClicked ? 'text-white' : 'text-black'}`}>/ Month</text>
      </div>
      <button className='flex justify-center border-2 border-blue-500 text-blue-500 w-full h-10 pt-1 bg-white rounded-md mb-8'>Get Started Now</button>
      {Data.map((item, index) => (
        <div className='flex' key={index}>
          <img className='h-7 w-7 my-2 mr-5' src={icon} alt="icon"/>
          <text className={`font-medium text-base my-2 ${isClicked ? 'text-white' : 'text-black'}`}>{item.title}</text>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
}

export default App;
