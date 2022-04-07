import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer dQeRoEumBz7LLnVCUvA9BTkI1xmr8t1pgHloStaccV8snaCzZHgZ0M3FDVa_aeWGjIhPZYEg07BnWpO0bWwVuiFYP1OisawcPaZGdvJAcLGSedSRUpwyZnVhOiV4YXYx'
    }
})