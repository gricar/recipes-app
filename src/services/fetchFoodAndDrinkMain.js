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

export const fetchIngredients = async (type) => {
  try {
    const response = await fetch(`https://www.the${type}db.com/api/json/v1/1/list.php?i=list`);
    const data = response.json();
    return data;
  } catch (error) { return error; }
};
