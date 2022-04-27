import { Router } from 'express'
import TableController from '@controllers/table.controller'
import { Routes } from '@interfaces/routes.interface'

class TablesRoute implements Routes {
  public path = '/table'
  public router = Router()
  public tableController = new TableController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.tableController.getTable)
    // this.router.post(`${this.path}`, this.tableController.updateTable)
  }
}

export default TablesRoute
