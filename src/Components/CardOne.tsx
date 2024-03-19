
import { useGetLFCStatsQuery } from "../store/apiSlice";



const CardOneLFCTeamStats = (): JSX.Element => {

    const {data,error, isLoading } = useGetLFCStatsQuery(''); 

    return (

<div className="card-title">

    <h2>Team Stats</h2>
    {error ? (
    <>
    oh no theres an error
    </>
    ) : isLoading ? (
        <>
        loading...
        </>
        ) : data ? (
            <>
            
            </> ): null}



</div>

    );

};
export default CardOneLFCTeamStats;