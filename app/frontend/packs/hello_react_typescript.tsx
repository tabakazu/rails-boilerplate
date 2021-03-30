import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface HelloProps {
  name: string
}

const Hello: React.SFC<HelloProps> = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David',
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name={ 'React with TypeScript' } />,
    document.body.appendChild(document.createElement('div')),
  )
})
