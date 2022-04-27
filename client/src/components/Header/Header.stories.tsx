import type { Story } from '@ladle/react'
import type { Color } from './Header'
import Header from './Header'

export const MainHeading: Story<{
  label?: string
  color: Color
}> = ({ label, color }) => (
  <>
    <Header color={color} >Code Demo</Header>
    <p className="mt-4 font-extralight text-xl">{label}</p>
  </>
)

MainHeading.args = {
  label: 'Internal documentation, comment here...',
}

export const RedHeader = MainHeading.bind({})
RedHeader.args = {
  label: 'Red background',
  color: 'red'
}

export const BlueHeader = MainHeading.bind({})
BlueHeader.args = {
  label: 'Blue background',
  color: 'blue'
}


export const GreenHeader = MainHeading.bind({})
GreenHeader.args = {
  label: 'Green background',
  color: 'green'
}