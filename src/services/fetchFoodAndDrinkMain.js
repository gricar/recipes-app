// Feito por Tabata;
export const fetchFoodMain = async () => {
  try {
    const URL_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(URL_FOOD);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchDrinkMain = async () => {
  try {
    const URL_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(URL_DRINK);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFoodCategories = async () => {
  try {
    const URL_FOOD_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(URL_FOOD_CATEGORIES);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchDrinkCategories = async () => {
  try {
    const URL_DRINK_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(URL_DRINK_CATEGORIES);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFoodsAccordingCategory = async (category) => {
  try {
    const URL_CATEGORY = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await fetch(URL_CATEGORY);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchDrinksAccordingCategory = async (category) => {
  try {
    const URL_CATEGORY = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await fetch(URL_CATEGORY);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFoodListNationalities = async () => {
  try {
    const URL_NATIONALITY = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const response = await fetch(URL_NATIONALITY);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return error;
  }
};

export const fetchFoodFilterByNationality = async (area) => {
  try {
    const URL_RECIPES_NAT = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    const response = await fetch(URL_RECIPES_NAT);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return error;
  }
};
