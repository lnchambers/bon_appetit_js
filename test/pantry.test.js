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
  })
})
