import {   createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 1.) add proxy with local host, useSt, useE, fetch with query params 
type APIProps = {
    response: any;
    map(arg0: unknown): unknown;
    venue: string;
    teams: [];
    team_id: number;
    name: string;
    logo: string;
    founded: number;
    venue_name: string;
    venue_address: string;
    venue_capacity: number;
    address:[key: string, value: string];
    capacity:number;
    api: object;
    
    }
   

 export const apiSlice = createApi({
    reducerPath:"footyAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/',
// and cors and 
prepareHeaders:(headers) =>{
    const accessToken = localStorage.getItem('access_token');
    if(accessToken){
        headers.set('authorization', `Bearer ${accessToken}`);
    }   
    return headers;
} }),
tagTypes:['LFCStats', 'LFCInformation', 'LFCFixuturesById', 'LFCPlayersStats'],

    endpoints: (builder) => ({
        getLFCStats: builder.query<APIProps, string>({
            query: () =>  'api/LFCStats',
            providesTags: ['LFCStats'],  
           
            }),
            getLFCInformation: builder.query({
                query: () => 'api/LFCInformation',
                providesTags: ['LFCInformation'],
                
            }),
            getLFCFixuturesById: builder.query({ 
                query: (id) => 'api/LFCFixuturesById/' + id,
                providesTags: ['LFCFixuturesById'],
      }),
      getLFCPlayersStats: builder.query({
        query: () => 'api/LFCPlayersStats',
        providesTags: ['LFCPlayersStats'],
          }),
          
       }),
      
});

       
       





    


export const { useGetLFCStatsQuery,useGetLFCInformationQuery,useGetLFCFixuturesByIdQuery, useGetLFCPlayersStatsQuery } = apiSlice;