require('dotenv').config();

const BASE_URL='http://api.weatherapi.com/v1/'
const API_KEY = process.env.API_KEY;
const LOCATION = 'washington'


console.log(`${BASE_URL}current.json?key=${API_KEY}&q=${LOCATION}`)

function fetchAPI(){
    fetch(`${BASE_URL}current.json?key=${API_KEY}&q=${LOCATION}`, {
        method: 'GET',
    })
    .then((response)=>{
        return response.json();

    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        throw new Error(console.log(error))
    })
}

fetchAPI();