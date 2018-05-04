import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()
    const recipe = new Recipe("Cheese Pizza")

    it("initializes with an empty stock", () => {
      expect(pantry.stock).to.eql({})
    })

    it("can check the stock for a specific ingredient", () => {
      expect(pantry.stockCheck("Cheese")).to.equal(0)
    })

    it("can add ingredients to the stock", () => {
      pantry.restock("Cheese", 10)

      expect(pantry.stockCheck("Cheese")).to.equal(10)
      expect(pantry.stock).to.eql({ "Cheese": 10})

      pantry.restock("Cheese", 20)

      expect(pantry.stockCheck("Cheese")).to.equal(30)
    })

    it("can add ingredients to shopping list", () => {
      recipe.addIngredient("Cheese", 20)
      recipe.addIngredient("Flour", 20)

      expect(recipe.ingredients).to.eql({"Cheese": 20, "Flour": 20})
      pantry.addToShoppingList(recipe)

      expect(pantry.shoppingList).to.eql({"Cheese": 20, "Flour": 20})
    })

    it("can add moar ingredients to shopping list", () => {
      recipe.addIngredient("Cheese", 20)
      recipe.addIngredient("Flour", 20)

      expect(recipe.ingredients).to.eql({"Cheese": 20, "Flour": 20})
      pantry.addToShoppingList(recipe)

      expect(pantry.shoppingList).to.eql({"Cheese": 20, "Flour": 20})

      const r = new Recipe("Spaghetti")
      r.addIngredient("Noodles", 10)
      r.addIngredient("Sauce", 10)
      r.addIngredient("Cheese", 5)
      pantry.addToShoppingList(r)

      expect(pantry.shoppingList).to.eql({"Cheese": 25, "Flour": 20, "Noodles": 10, "Sauce": 10})
    })
  })
})
