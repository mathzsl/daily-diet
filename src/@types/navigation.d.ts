import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        dietPercentage: string;
      };
      mealDetails: {
        meal: MealStorageDTO;
      };
      editMeal: {
        id: string;
      };
      newMeal: undefined;
      feedback: undefined;
    }
  }
}
