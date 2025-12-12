import Sixplayer from "./six player";

export default function XI({buyedplayers, removePlayer}) {
    return (
        <div>
            
        {
           buyedplayers.map(players=><Sixplayer removePlayer={removePlayer} players={players}></Sixplayer>)
        }
          
        </div>
        
    )
}