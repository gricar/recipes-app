//  STCOSTA
const fetchDrinks = async (itemSearch, searchDrink) => {
  let urlAditional = '';
  if (itemSearch === 'Ingredient') {
    urlAditional = 'filter.php?i=';
  } else if (itemSearch === 'Name') {
    urlAditional = 'search.php?s=';
  } else {
    urlAditional = 'search.php?f=';
  }
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${urlAditional}${searchDrink}`);
    const data = await response.json();
    return data;
  } catch (error) { return error; }
};

export default fetchDrinks;
