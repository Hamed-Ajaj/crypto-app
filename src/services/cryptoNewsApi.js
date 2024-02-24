import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '50df4a21e8msh64bcc7eee9e2a9dp1a690ajsn2a7ee4d72b33',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
  }

  const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl, 
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', cryptoNewsHeaders['X-RapidAPI-Key']);
            headers.set('X-RapidAPI-Host', cryptoNewsHeaders['X-RapidAPI-Host']);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) =>  {
                return `?limit=${count}`
            }
        }),
    }),
  })

    export const { useGetCryptoNewsQuery } = cryptoNewsApi;