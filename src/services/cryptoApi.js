import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': '50df4a21e8msh64bcc7eee9e2a9dp1a690ajsn2a7ee4d72b33',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = "https://coinranking1.p.rapidapi.com";


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            // headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');
            headers.get('X-RapidAPI-Host');
            headers.set('X-RapidAPI-Key', '50df4a21e8msh64bcc7eee9e2a9dp1a690ajsn2a7ee4d72b33');
            return headers;
        }
    
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`,
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`,
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => `/coin/${coinId}/history?${timePeriod}`,
        }),
        getCryptoExchanges: builder.query({
            query: () => '/exchanges',
        }),
    })
})

export  const {
    useGetCryptosQuery,
    useGetCryptoHistoryQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoExchangesQuery,
} = cryptoApi;

// const useGetCryptoDetailsQuery = cryptoApi.useGetCryptoDetailsQuery;
// export default useGetCryptoDetailsQuery;    