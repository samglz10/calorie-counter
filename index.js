require('dotenv').config();

const BASE_URL=' https://api.nal.usda.gov/fdc/v1/'
const API_KEY = process.env.API_KEY;
const FOOD = 'burrito'


console.log(`${BASE_URL}foods/search?api_key=${API_KEY}&query=${FOOD}`)

function fetchAPI(){
    fetch(`${BASE_URL}${API_KEY}`, {
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