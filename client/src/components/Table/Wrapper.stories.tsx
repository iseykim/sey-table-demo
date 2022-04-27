import type { Story } from '@ladle/react'
import { storySample, storySample1, storySample2 } from '../../data'
import Wrapper from './Wrapper'

export const Wrappers: Story<{ label: string[] }> = ({ label }) => (
  <div className="Wrapper">
    <Wrapper />
    <p>{label[0]}</p>

    <Wrapper initialData={storySample1} />
    <p>{label[1]}</p>

    {/* @ts-ignore -- testing the UI without type check */}
    <Wrapper initialData={storySample2} />
    <p>{label[2]}</p>
  </div>
)

Wrappers.args = {
  label: ['Default Props', 'Empty Array', 'Invalid'],
}

export const WrapperDefault = () => <Wrapper />
export const WrapperWithHundred = () => <Wrapper initialData={storySample} />