import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export function calculateNumberOfMeals(mealsList: MealStorageDTO[]) {
  const numberOfMeals = mealsList.reduce(
    (acc, meal) => {
      meal.isOnTheDiet ? (acc.onTheDiet += 1) : (acc.offTheDiet += 1);
      acc.totalMeals += 1;

      return acc;
    },
    {
      onTheDiet: 0,
      offTheDiet: 0,
      totalMeals: 0,
    }
  );

  return numberOfMeals;
}

export function calculatePercentage(mealsList: MealStorageDTO[]) {
  const { onTheDiet, totalMeals } = calculateNumberOfMeals(mealsList);

  const percentage = (onTheDiet * 100) / totalMeals;

  return percentage;
}
