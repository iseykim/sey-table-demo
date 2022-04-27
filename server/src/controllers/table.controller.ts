import { NextFunction, Request, Response } from 'express'
import { Table } from '@/interfaces/tables.interface'
import tableService from '@services/tables.service'

class TableController {
  tableService = new tableService()

  public getTable = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllTableData: Table[] = await this.tableService.findAllTable()

      console.log(findAllTableData)
      res.status(200).json({ data: findAllTableData, message: 'findAll' })
    } catch (error) {
      next(error)
    }
  }
  
  // TODO: update by getting response from client
}

export default TableController
