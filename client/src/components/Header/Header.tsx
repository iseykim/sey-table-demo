export type Color = 'slate' | 'red' | 'blue' | 'green'

interface HeaderProps {
  children: string
  color?: Color
}

const Header = ({ color = 'slate', children }: HeaderProps) => {
  return <div className={`py-4 bg-${color}-100 text-center text-4xl`}>{children}</div>
}

export default Header
