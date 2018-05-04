export default class Pantry {
  constructor () {
    this.stock = {}
  }

  stockCheck (name) {
    if (!(this.stock[name])) {
      return 0
    } else {
      return this.stock[name]
    }
  }

  addToShoppingList(recipe) {
    console.log(recipe.ingredients)
    recipe.ingredients.map( ingredient => console.log(ingredient))
  }

  shoppingList() {
    {}
  }

  restock (name, quantity) {
    if (!(this.stock[name])) {
      this.stock[name] = quantity
    } else {
      let total = this.stock[name] + quantity
      this.stock[name] = total
    }
  }

}
