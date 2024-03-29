
import { useGetLFCStatsQuery } from "../store/apiSlice";

const CardFour = () => {
 const {data:playerStats, isLoading, error } = useGetLFCStatsQuery('');
 
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
            
                {playerStats.data.response}
            
        </>
    ) : null}

                       

</div>
    
    );
    
    
    
    };
    
    export default CardFour;