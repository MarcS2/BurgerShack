import { FakeDb } from "../db/fakeDb.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
  async removeBurger(burgerId) {
    const burgerIndex = FakeDb.burgers.findIndex(burger => burger.id == burgerId)
    if (burgerIndex == -1) {
      throw new BadRequest(`Invalid Id: ${burgerId}`)
    }
    await FakeDb.burgers.splice(burgerIndex, 1)
  }
  async createMenuItem(menuData) {
    if (FakeDb.burgers.length == 0) {
      menuData.id = 1
    } else {
      const menuIds = FakeDb.burgers.map(m => m.id)
      const largestMenuId = Math.max(...menuIds)
      menuData.id = largestMenuId + 1
    }

    const newMenuItem = new Burger(menuData)
    await FakeDb.burgers.push(newMenuItem)
    return newMenuItem
  }
  async getMenu() {
    const menu = await FakeDb.burgers
    return menu
  }

}

export const burgerService = new BurgersService()