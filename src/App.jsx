
import React, { Suspense, useState } from 'react';
import Navbar from './component/Navbar/navbar.jsx';
import Selected from './component/selected/selected.jsx';
import HeroSection from './component/heroSection/hero.jsx';
import XI from './component/XI/Xi.jsx';
import { ToastContainer } from 'react-toastify';
 const fetchPromise=fetch("/player.json")
  .then(res=>res.json())

const App = () => {
  const [availablecoin,setAvailablecoin]=useState(50000000)
  const [toggle,setToggle]=useState(true)
 const [buyedplayers,setBuyedplayers]=useState([])
 const removePlayer=(p)=>{
  const filterData=buyedplayers.filter(player=>player.id!==p.id)
  setBuyedplayers(filterData)
  setAvailablecoin(availablecoin+p.price)
 }
  return (
    <div className='bg-white text-black min-h-screen'>
      {/* navbar */}
<Navbar  availablecoin={availablecoin}></Navbar>
{/* hero section */}
<HeroSection></HeroSection>
{/* toggle button section */}

<div className=' my-5 flex justify-between items-center max-w-[1000px] mx-auto'>
<div className='font-bold'>{toggle==true?"Selected Player":`Xi Player (${(buyedplayers.length)}/6)`}</div>
<div>
  <button onClick={()=>setToggle(true)} className={` btn  border-0 ${toggle===true? 'bg-blue-300':''}`}>Selected</button>
  <button onClick={()=>setToggle(false)} className={` btn  border-0 ml-2 ${toggle===false? 'bg-blue-300':''}`}>Xi ({ buyedplayers.length })</button>
</div>
</div>

{/* toggle button functionality */}
{
  toggle===true?<Suspense fallback={<span className="loading loading-spinner loading-xl ml-[50%] mb-10}"></span>}>
<Selected buyedplayers={buyedplayers} setBuyedplayers={setBuyedplayers} setAvailablecoin={setAvailablecoin} availablecoin={availablecoin} fetchPromise={fetchPromise} > </Selected>
</Suspense>:<XI removePlayer={removePlayer} buyedplayers={buyedplayers}></XI>
}

     <ToastContainer />
    </div>
  );
};

export default App;