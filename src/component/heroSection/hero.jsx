import heroBg from '../../assets/bg-shadow.png'
import heroLogo from '../../assets/banner-main.png'
export default function HeroSection(){
    return(
        <div className='flex justify-between max-w-[1200px] mx-auto rounded-[24px] '>

<div
  className="hero rounded-3xl object-cover w-full mt-10"
   style={{backgroundImage:`url(${heroBg}) `}}
>
  <div className="hero-overlay rounded-[24px] "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
        <img className='pl-25' src={heroLogo} alt="" />
      <h1 className="mb-5 text-5xl font-bold"><span>Assemble Your Ultimate Dream 11 Cricket Team</span>
      </h1>
      <p className="mb-5">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="btn btn-primary "> Free Credit</button>
    </div>
  </div>
</div>

        </div>
    )
}