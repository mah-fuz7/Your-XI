import { useState } from "react"
import { toast } from "react-toastify"

export default function Players({players,setAvailablecoin,availablecoin,buyedplayers,setBuyedplayers}){
    const[select,setSelect]=useState(false)
    // console.log(players)
    const handleSelect=()=>{
      if(availablecoin<players.price){
        toast("You don't have enough coins to select this player.")
      }else if(buyedplayers.length>=6){
        toast("You can only select up to 6 players for your XI.")
      }
      else {
        setSelect(true)
          setAvailablecoin(availablecoin - players.price)
           setBuyedplayers([...buyedplayers,players])
           toast(`${players.name} has been selected!`);
      }
     
    }
    return(
        <div>

    <div className="w-80 bg-white rounded-2xl shadow-lg p-4">
      <img
        src={players.image}
        alt="Player"
        className="w-full h-48 object-cover rounded-xl"
      />

      <div className="mt-4">
        {/* Name */}
        <h2 className="text-xl font-semibold"> {players.name}</h2>

        {/* Country + Role tag */}
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">🇮🇳 {players.country}</span>
          </div>

          <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
            {players.role}
          </span>
        </div>

        {/* Line */}
        <hr className="my-4" />

        {/* Rating + Bat info */}
        <div className="text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">Rating</span>
            <span>{players.id}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span className="font-semibold">{players.battingStyle}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span className="font-semibold">Price:</span>
            <span>${players.price}</span>
          </div>
        </div>

        {/* Button */}
        <button disabled={select}  onClick={()=>handleSelect()
        } className=" w-full mt-4  border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
            {select?" selected":"choose player"}
        </button>
      </div>
    </div>




        </div>
    )
}