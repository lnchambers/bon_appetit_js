import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("initializes with an empty stock", () => {
      expect(pantry.stock).to.eql({})
    })

    it("can check the stock for a specific ingredient", () => {
      expect(pantry.stockCheck("Cheese")).to.equal(0)
    })

    it("can add ingredients to the stock", () => {
      pantry.restock("Cheese", 10)
      
      expect(pantry.stockCheck("Cheese").to.equal(10))
    })
  })
})
