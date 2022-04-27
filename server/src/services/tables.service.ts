import { Table } from '@/interfaces/tables.interface'
import tableModel from '@/models/tables.model'

class TableService {
  public tables = tableModel

  public async findAllTable(): Promise<Table[]> {
    const tables: Table[] = this.tables
    return tables
  }
}

export default TableService
