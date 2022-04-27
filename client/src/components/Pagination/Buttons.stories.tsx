import type { Story } from '@ladle/react'

export const ButtonRowStory: Story<{ labels: string[] }> = ({ labels = ['First', 'Second', 'Third', 'Fourth'] }) => (
  <div className="flex flex-col">
    {labels.map(label => (
      <Buttons />
    ))}
  </div>
)

const Buttons = () => {
  return (
    <div>
      <button className="p-2 rounded-md">{'<<'}</button>
      <button className="p-2 rounded-md">{'<'}</button>
      <button className="p-2 rounded-md">{'>>'}</button>
      <button className="p-2 rounded-md">{'>'}</button>
    </div>
  )
}
