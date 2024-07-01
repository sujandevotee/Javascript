let arr = [
  {
    name: "Vada Pav",
    ingredients: ["pav" , "Batata masala"],
    description:
      "Vada pav, alternatively spelt wada pao, () is a vegetarian fast food dish native to the Indian state of Maharashtra",
      category: "Fast-Food"
  },
  {
    name: "Pani Puri",
    ingredients: ["Puri" , "Pani"],
    description:
      "Gol gappa (also known as pani puri) is a popular bite-size chaat consisting of a hollow",
      category: "Fast-Food"
  },
  {
    name: "Pav",
    ingredients: ["pav" , "Bhaji"],
    description:
      "Pav bhaji is a street food dish from Mumbai, India consisting of a thick spicy vegetable curry served with a soft buttered bread roll (pav).",
      category: "Fast-Food"
  },
];
localStorage.setItem("recipe", JSON.stringify(arr));

// Adding
function addRecipe(recipe) {
  let recipes = JSON.parse(localStorage.getItem("recipe"));
  recipes.push(recipe);
  localStorage.setItem("recipe", JSON.stringify(recipes));
}
let newRecipe = {
  name: "KOKUM JUICE",
  ingredients: ["water", "sugar", "lemon", "kokum", "salt", "pepper powder"],
  description:
    "Kokum is a fruit bearing tree that grows in the Western part of India. Garcinia Indica as it is also called is packed with flavor and often used.",
    category: "juice"
};
addRecipe(newRecipe);

//  Updating
function updateRecipe(name, updatedRecipe) {
  let recipes = JSON.parse(localStorage.getItem("recipe"));
  for (let recipe of recipes) {
    if (recipe.name === name) {
      recipe.name = updatedRecipe.name;
      recipe.ingredients = updatedRecipe.ingredients;
      recipe.description = updatedRecipe.description;
      break;
    }
  }
  localStorage.setItem("recipe", JSON.stringify(recipes));
}

let updatedRecipe = {
  name: "Kesar Malai Modak",
  ingredients: ["Milk", "Cardamom", "Saffron", "Ricotta Cheese"],
  description:
    "Ricotta cheese is the main ingredient in this recipe. These modaks have condensed milk and saffron too. These are definitely a favorite in our family.",
    category: "Sweet"

};
updateRecipe("KOKUM JUICE", updatedRecipe);

// Remove
function removeRecipe(name) {
  let recipes = JSON.parse(localStorage.getItem("recipe"));
  recipes = recipes.filter((recipe) => recipe.name !== name);
  localStorage.setItem("recipe", JSON.stringify(recipes));
}
removeRecipe("Pav");

// category recipes
function category(str){
    try{
  let recipes = JSON.parse(localStorage.getItem("recipe"));
        recipes.filter((value)=>{
            if(value.category.includes(str)){
                return console.log("Category recipes :-",value.name);
            }
        });
    }
    catch(error){
        console.log(error);
    }
}
category("Fast-Food");

// searching by ingredients
function serch(str){
    try{
        let recipes = JSON.parse(localStorage.getItem("recipe"));
        recipes.filter((value)=>{
            if(value.ingredients.includes(str)){
                return console.log("Serching:-",value.ingredients);
            }
        });
    }
    catch(error){
        console.log(error);
    }
}
serch("pav");

// Listing
let allRecipes = JSON.parse(localStorage.getItem("recipe"));
console.log(allRecipes);