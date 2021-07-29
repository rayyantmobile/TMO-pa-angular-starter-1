import { Component, OnInit } from '@angular/core';
import { ListComponent } from "../list/list.component";
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent  {
  public buttonVis = true;

  
  recipe =[
    {
      name: "",
      desc: ""
    }
  ]

  onSub(recipeName: any, desc: any) {
    let newRecipeItem = {
      name: "Recipe Name: " + recipeName,
      desc: "Recipe Description: " + desc
    }
    this.recipe.push(newRecipeItem);
    console.log(newRecipeItem);
  }

}
