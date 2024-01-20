
function testFunc(){
  const foodEntry = document.getElementById('food-item').value;
  console.log(foodEntry)

  return foodEntry;
}

//console.log(`${BASE_URL}foods/search?api_key=${API_KEY}&query=${FOOD}`)

function fetchAPI(){
 
  const BASE_URL=' https://api.nal.usda.gov/fdc/v1/'
  const API_KEY = import.meta.env.VITE_API_KEY;
  const FOOD = testFunc();
    //console.log(`${BASE_URL}foods/search?api_key=${API_KEY}&query=${FOOD}`)
    fetch(`${BASE_URL}foods/search?api_key=${API_KEY}&query=${FOOD}&pageNumber=1&pageSinopze=1`, {
        method: 'GET',
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        //console.log(data)
       const nutrientData = data.foods[0].foodNutrients
       console.log(nutrientData);
       //console.log(`Here is the nutrient data ${nutrientData}`)
       for(const value in nutrientData){
        
        console.log(nutrientData[value])
        //console.log(nutrientData[value].nutrientName)

       }
    })
    .catch((error)=>{
        throw new Error(console.log(error))
    })
    
}
fetchAPI();
/* Object MODEL
{
    totalHits: 936,
    currentPage: 1,
    totalPages: 936,
    pageList: [
      1, 2, 3, 4,  5,
      6, 7, 8, 9, 10
    ],
    foodSearchCriteria: {
      query: 'burrito',
      generalSearchInput: 'burrito',
      pageNumber: 1,
      numberOfResultsPerPage: 50,
      pageSize: 1,
      requireAllWords: false
    },
    foods: [
      {
        fdcId: 508729,
        description: 'BURRITO',
        dataType: 'Branded',
        gtinUpc: '5051379103989',
        publishedDate: '2019-04-01',
        brandOwner: 'FRESH & EASY, LLC',
        ingredients: 'BURRITO MIX {BURRITO RICE [ENRICHED LONG GRAIN WHITE RICE (LONG GRAIN RICE, NIACIN, FERRIC ORTHOPHOSPHATE, THIAMIN MONONITRATE, FOLIC ACID), GROUND TOMATOES (TOMATO, TOMATO PUREE, SALT, CITRIC ACID), ONION, CELERY, CANOLA OIL, TOMATO PASTE, CHICKEN BASE (CHICKEN STOCK, NATURAL FLAVOR, SALT, SUGAR, YEAST EXTRACT), SALT, GARLIC PUREE, CUMIN POWDER, CORIANDER POWDER, BLACK PEPPER], PICO DE 
  GALLO SALSA (TOMATO, ONION, LIME JUICE, CILANTRO, GARLIC PUREE, SALT, JALAPENO CHILE, SERRANO CHILE, CORN STARCH), CHEESE BLEND [PART-SKIM MOZZARELLA CHEESE (CULTURED PASTEURIZED PART-SKIM MILK, SALT, ENZYMES), CHEDDAR CHEESE (CULTURED PASTEURIZED MILK, SALT, ENZYMES, ANNATTO)]}, TORTILLA [ENRICHED BLEACHED WHEAT FLOUR (WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMIN MONONITRATE, RIBOFLAVIN, FOLIC ACID), WATER, 
  SOYBEAN OIL, PALM SHORTENING, CULTURED WHEAT FLOUR, CONTAINS 2% OR LESS OF: MONO- AND DI-GLYCERIDES, SODIUM BICARBONATE, WHEAT GLUTEN, SALT, GUAR GUM, SUGAR, SODIUM ACID PYROPHOSPHATE, CITRIC ACID, ENZYMES, SODIUM METABISULFITE], AL PASTOR CHICKEN [CHICKEN BREAST WITH RIB MEAT, WATER, CONTAINS LESS THAN 2% OF: SALT, SOYBEAN OIL, SOY PROTEIN ISOLATE, TOMATO POWDER, DISTILLED WHITE VINEGAR, CHILE PEPPER, FRUCTOSE, SODIUM PHOSPHATE, MODIFIED CORN STARCH, CHIPOTLE PEPPER, SUGAR, SOY SAUCE POWDER (WHEAT, SOYBEAN, SALT, MALTODEXTRIN), WHEY PROTEIN CONCENTRATE, DEHYDRATED GARLIC, MOLASSES POWDER (MOLASSES, MALTODEXTRIN), SPICES, CITRIC ACID, DEHYDRATED ORANGE PEEL, EXTRACTIVES OF TURMERIC, SWEETENER (CANE SYRUP, HONEY), ORANGE OIL, TOMATO ESSENCE (TOMATO ESSENCE, MALTODEXTRIN, CITRIC ACID), XANTHAN GUM].',
        marketCountry: 'United States',
        foodCategory: 'Prepared Wraps and Burittos',
        modifiedDate: '2018-10-05',
        dataSource: 'LI',
        servingSizeUnit: 'g',
        servingSize: 170,
        householdServingFullText: '1 BURRITO',
        tradeChannels: [Array],
        allHighlightFields: '<b>Ingredients</b>: <em>BURRITO</em> MIX {<em>BURRITO</em> RICE [ENRICHED LONG GRAIN WHITE RICE (LONG GRAIN RICE, NIACIN, FERRIC',
        score: 1166.2314,
        microbes: [],
        foodNutrients: [Array],
        finalFoodInputFoods: [],
        foodMeasures: [],
        foodAttributes: [],
        foodAttributeTypes: [],
        foodVersionIds: []
      }
    ],
    aggregations: {
      dataType: { Branded: 861, 'Survey (FNDDS)': 62, 'SR Legacy': 13 },
      nutrients: {}
    }
  }
   */