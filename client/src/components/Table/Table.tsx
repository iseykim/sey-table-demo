import type { TableInstance } from 'react-table'
import { useTable, usePagination } from 'react-table'
import InputCell from './InputCell'
import { Data } from './Wrapper'

const defaultColumn = {
  Cell: InputCell,
}

interface Header {
  Header: string
  columns: { Header: string; accessor: string }[]
}

/**
 * Required workaround for missing TypesScript definitions.
 * Will be fixed in react-table v8
 * see also https://github.com/tannerlinsley/react-table/issues/3064
 */

// type TableTypeWorkaround<T extends Object> = TableInstance<T> & {
//   gotoPage: (index: number) => void
//   state: {
//     pageIndex: number
//     pageSize: number
//   }
// }

// Workaround
interface TableProps {
  columns: Header[]
  data: Data[]
  updateMyData: (rowIndex: number, columnId: number, value: string) => void
  paginations: number[]
  skipPageReset: boolean
}

export default function Table({ columns, data, updateMyData, skipPageReset, paginations }: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      updateMyData, // add to put into instance
    },
    usePagination,
  )

  return (
    <>
      <table className="border mx-auto" {...getTableProps()}>
        <thead className="">
          {headerGroups.map(headerGroup => (
            <tr className="h-12" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className="pl-4" {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* Pagination Component */}
      <div className="flex p-2 justify-center">
        {/* Separate the component: 4 buttons */}
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span className='p-2'>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span className='p-2'>
          Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {paginations.map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
