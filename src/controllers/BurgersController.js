import { burgerService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/menu')
    this.router
      .get('', this.getMenu)
      .post('', this.createMenuItem)
  }
  async createMenuItem(req, res, next) {
    try {
      const menuData = req.body
      const menu = await burgerService.createMenuItem(menuData)
      return res.send(menu)
    } catch (error) {
      next(error)
    }
  }
  async getMenu(req, res, next) {
    try {
      const menu = await burgerService.getMenu()
      return res.send(menu)

    } catch (error) {
      next(error)
    }
  }
}