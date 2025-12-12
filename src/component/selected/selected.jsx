import { use } from "react"
import Players from "../../component/plalyers/player.jsx"
export default function Selected({fetchPromise,setAvailablecoin,availablecoin ,buyedplayers,setBuyedplayers}) {
    const selectedPlayers=use(fetchPromise)
    
    return(

<div className=" max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 mt-3">

{
  selectedPlayers.map(players=><Players key={players.id} players={players} setAvailablecoin={setAvailablecoin} availablecoin={availablecoin} buyedplayers={buyedplayers} setBuyedplayers={setBuyedplayers}></Players>)
}
  

</div>
    )
}