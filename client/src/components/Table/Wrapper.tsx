import { useState, useEffect, useMemo } from 'react'
import { columnSample, dataSample } from '../../data'
import axios from 'axios'
import Table from './Table'

export interface Data {
  firstName: string
  lastName: string
  age: number
  mood: number
}

interface WrapperProps {
  initialData?: Data[]
}

function Wrapper({ initialData }: WrapperProps) {
  const columns = useMemo(() => columnSample, [])

  /* TODO: Resolve proxy issues */
  useEffect(() => {}, [])

  const [data, setData] = useState<Data[]>(initialData ? initialData : dataSample)
  const [originalData] = useState(data)
  const [skipPageReset, setSkipPageReset] = useState(false)
  const [paginations, _] = useState([5, 10, 20])

  const updateMyData = (rowIndex: number, columnId: number, value: string) => {
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      }),
    )
  }

  useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  const resetData = () => setData(originalData)
  const saveData = () => {} /* TODO backend implementation */

  return (
    <div>
      <div className="flex justify-center">
        <button className="border rounded p-2 my-2" onClick={resetData}>
          Reset Data
        </button>
        <button className="border rounded p-2 my-2" onClick={saveData}>
          Save Data
        </button>
      </div>
      <Table columns={columns} data={data} updateMyData={updateMyData} skipPageReset={skipPageReset} paginations={paginations} />
    </div>
  )
}

export default Wrapper
