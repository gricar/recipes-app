export const fetchFood = async () => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${itemSearch}`);
    const data = await response.json();
    return data;
  } catch (error) { return error; }
};
