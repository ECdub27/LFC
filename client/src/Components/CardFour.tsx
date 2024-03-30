
import { useGetLFCStatsQuery } from "../store/apiSlice";

const CardFour = () => {
 const {data:playerStats, isLoading, error } = useGetLFCStatsQuery('');
  
 console.log(playerStats);
 if (!playerStats) return null;
 
    return (
    <div className='card-title'>
    
    
    <h1>LFC Player Stats</h1>
    
    {error ? (
    <>
        oh no theres an error
    </>
) : isLoading ? (
    <>
        loading...
    </>
) : (playerStats) ? (
    <>
        {playerStats.data.response && playerStats.data.response.map((players: string) => (
            
            <div>
                {players}
            </div>
        
        ))}
            
        
    </>
) : null}

                    

</div>
    
    );
    
    
    
    };
    
    export default CardFour;