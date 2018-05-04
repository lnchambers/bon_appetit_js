export default class Pantry {


  constructor () {
    this.stock = {}
    this.shoppingList = {}
  }

  stockCheck (name) {
    if (!(this.stock[name])) {
      return 0
    } else {
      return this.stock[name]
    }
  }

  addToShoppingList(recipe) {
    let list = this.shoppingList
    for (var name in recipe.ingredients) {
      if (!(list[name])) {
        list[name] = recipe.ingredients[name]
      } else {
        let total = list[name] += recipe.ingredients[name]
        list[name] = total
      }
    }
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
