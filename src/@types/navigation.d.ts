import { Statistics } from "@screens/home";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        statistics: Statistics;
      };
      mealDetails: {
        meal: MealStorageDTO;
      };
      editMeal: {
        id: string;
      };
      newMeal: undefined;
      feedback: {
        isOnTheDiet: boolean;
      };
    }
  }
}
