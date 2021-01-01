import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe [] = [
    {
     id: 'r1',
     title: 'Fried Rice',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w',
     ingredients: ['fdkjkff' , 'damsdald' , 'sdadsda' , 'kjkcdfakd']
  },
 {
   id: 'r2',
   title: 'Rice and Curry',
   imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS24wvA9ozipJc5-IStQrqZIo_a3urpEZGIGA&usqp=CAU',
   ingredients: ['fdkjk' , 'dadald' , 'sadsda' , 'kjkfakd']
 },
 {
  id: 'r3',
  title: 'Desert',
  imageUrl: 'https://deliciouslyella.com/wp-content/uploads/2019/06/sweet-potato-brownies-with-chocolate-sauce-2-440x440.jpg',
  ingredients: ['fdkjk' , 'dadald' , 'sadsda' , 'kjkfakd']
}
 ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }

  deleteRecipe(recipeId: string){
     this.recipes = this.recipes.filter(recipe => {
       return recipe.id !== recipeId;
     });
  }

}
