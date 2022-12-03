import Playersdisplay from "../../Components/Playerdisplay";
import accountFn from "../../Components/Accountfn";
import { useEffect,useState } from "react";


function Play(){
    const [playerDetails,setPlayerDetails] = useState([]);
const hehe = async () => {
    const player_names = await accountFn();
    const endokyo=player_names.playersAddedToGame();
    const res = await player_names.listPlayers();
    console.log(res);
    setPlayerDetails(res);
}
useEffect(() => {
    hehe();
},[])


    return(
            <div>
             <Playersdisplay playerDetails={playerDetails}/>
                <h1>hehe</h1>
            </div>
    )
}

export default Play