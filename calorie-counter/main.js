
  const foodEntry = document.getElementById('food-item');
  const btn1 = document.getElementById('btn1');
  const result = document.getElementById('result');
  
  btn1.addEventListener('click', (e)=>{
    e.preventDefault();
    foodEntry.innerHTML = foodEntry.value;
    console.log(foodEntry.value);
    fetchAPI();
  });


//console.log(`${BASE_URL}foods/search?api_key=${API_KEY}&query=${FOOD}`)

function fetchAPI(){
 
  const BASE_URL=' https://api.nal.usda.gov/fdc/v1/'
  const API_KEY = import.meta.env.VITE_API_KEY;
  const FOOD = foodEntry.value;
    console.log(`${BASE_URL}foods/search?api_key=${API_KEY}&query=${FOOD}`)
    fetch(`${BASE_URL}foods/search?api_key=${API_KEY}&query=${FOOD}&pageNumber=1&pageSize=5`, {
        method: 'GET',
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        //console.log(data)
      const foodSearch = data.foods
        console.log(data.foods)
      const nutrientData = data.foods[0].foodNutrients
        console.log(nutrientData);
      const result = document.getElementById('result');
      const dataString = JSON.stringify(nutrientData[0], 5);
      result.innerHTML = dataString;
    })
    .catch((error)=>{
        throw new Error(console.log(error))
    })
    
}
