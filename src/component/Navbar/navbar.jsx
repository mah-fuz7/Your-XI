import logo from '../../assets/logo.png';
export default function Navbar({availablecoin}) {
  return (
   <div className='fixed top-0 w-full bg-white z-50 ' >
    <div>
            <div className='flex justify-between max-w-[1200px] mx-auto ' >

  <div >
  <img src={logo} alt="" />
  </div>

  <div className='flex gap-4 items-center font-semibold text-gray-600 border-2 border-gray-400 my-3 px-3 py-1 rounded-lg'>
    <span className='text-xl font-bold to-black'>🪙{availablecoin}</span>
    <span className='font-bold'>Coin</span>
  </div>

</div>
        </div>
   </div>
  );
}