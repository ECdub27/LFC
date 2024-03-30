
import { useGetLFCStatsQuery} from "../store/apiSlice";


type FixtureType = {
    fixture: string;
    goals: number;
    score: number;
    event: string;
    team_id: number;
    name: string;
    logo: string;
    season: number;
    statistics: Array<[]>;
    player: Array<object>;
    fixtures: Array<object>;
    league: Array<object>;
    teams: Array<object>;
    events:Array<[]>;
    venue: {
        status: string| number | string; // include other properties as needed
    };
    fulltime:{
        home: number;
        away: number;
    };
    }


const CardThree = () => {

const {data:teamFixtures, isLoading, error } = useGetLFCStatsQuery('')
console.log(teamFixtures)
if(!teamFixtures) return null;

    return (
    <div className='card-title'>
    
    
    <h1>LFC Fixtures</h1>
    {error ? (
    <>
        oh no theres an error
    </>
) : isLoading ? (
    <>
        loading...
    </>
) : (teamFixtures) ? (
    <>
        
            { teamFixtures?.data2?.response && teamFixtures?.data2?.response.map((team: FixtureType) => (
                

                <div className="card" key={team.team_id}>
                    <h2>{team.name}</h2>
                    <img src={team.logo} alt="team logo" />
                    <ul>
                        <li>
                            <span>{team.fixture}</span> 
                            <p>Fixture: {team.fixture}</p>
                            
                        </li>
                    </ul>
                </div>
            ))}
        
    </>
) : null}
    
   

                       

</div>
    
    );
    
    
    
    };
    
    export default CardThree;