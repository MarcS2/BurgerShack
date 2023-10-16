import { FakeDb } from "../db/fakeDb.js"

class BurgersService {
  createMenuItem(menuData) {

  }
  async getMenu() {
    const menu = await FakeDb.burgers
    return menu
  }

}

export const burgerService = new BurgersService()