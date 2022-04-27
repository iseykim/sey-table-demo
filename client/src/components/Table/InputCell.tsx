import { useState, useEffect, ChangeEvent } from 'react'

// TODO: InputCellProps
export default function InputCell({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
}) {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    updateMyData(index, id, value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}
