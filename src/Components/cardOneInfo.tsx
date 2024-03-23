import { useEffect } from "react";
import { useGetLFCStatsQuery } from "../store/apiSlice";


const LFCTeamInfo = () => { 
const { data } = useGetLFCStatsQuery('');

useEffect(() => {   

}, [data]);

return (
    <div>
        {data && (
            <div>
                {String(data)}
            </div>
        )}
    </div>
);



};

export default LFCTeamInfo;
