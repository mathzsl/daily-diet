import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export function filteredMeals(mealsList: MealStorageDTO[]) {
  const filteredMealsDates = [...new Set(mealsList.map(({ date }) => date))];

  const meals = filteredMealsDates.map((date) => {
    return {
      date,
      data: mealsList
        .filter((meal) => {
          return meal.date.includes(date);
        })
        .sort((a, b) => {
          if (a.hour > b.hour) {
            return 1;
          }
          if (a.hour < b.hour) {
            return -1;
          }
          return 0;
        }),
    };
  });

  return meals;
}
