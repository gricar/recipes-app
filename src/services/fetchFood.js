//  STCOSTA
const fetchFood = async (itemSearch, searchFood) => {
  let urlAditional = '';
  if (itemSearch === 'Ingredient') {
    urlAditional = 'filter.php?i=';
  } else if (itemSearch === 'Name') {
    urlAditional = 'search.php?s=';
  } else if (itemSearch === 'id') {
    urlAditional = 'lookup.php?i=';
  } else if (itemSearch === 'random') {
    urlAditional = 'random';
  } else {
    urlAditional = 'search.php?f=';
  }
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${urlAditional}${searchFood}`);
    const data = await response.json();
    return data;
  } catch (error) { return error; }
};

export default fetchFood;
