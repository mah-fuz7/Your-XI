export default function Sixplayer({players,removePlayer}){
    const handleClick=()=>{
        removePlayer(players)
    }
    return(
        <div>

<div className="  max-w-[1200px] mx-auto rounded-2xl border-2 border-gray-400 p-4  mx-auto flex justify-between mb-4 ">
           <div className="flex items-center ">
            <img src={players.image} className="h-[80px] w-[85px] bg-cover rounded-full border-2 border-gray-400 mr-2  " alt="" />
            <div>
                <h1 className="font-bold">{players.name}</h1>
                <h6 className="font-extralight">{players.role}</h6>
            </div>
           </div >
           <div onClick={()=>handleClick()} className=" flex items-center cursor-pointer">❌</div>
        </div>

        </div>
    )
}