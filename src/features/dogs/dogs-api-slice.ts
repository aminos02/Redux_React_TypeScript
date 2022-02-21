import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = 'b57da927-e98f-4044-9481-41018c8f4dc9';

interface Breed {
    id: string,
    name: string,
    image: {
        url: string
    }
}

export const dogApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY);
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number | void>({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})

export const {useFetchBreedsQuery,}=dogApiSlice;