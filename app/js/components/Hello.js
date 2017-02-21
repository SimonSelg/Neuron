import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-toolbox/lib/button'
import 'react-toolbox/components/commons.scss'

class Hello extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} width={this.props.width} />
        <h1>Welcome to Neuron!</h1>
        <Button icon='bookmark' label='Bookmark' raised primary />
      </div>
    )
  }
}

ReactDOM.render(
  <Hello image={"dist/img/logo.png"} width={200} />,
  document.getElementById("app")
)
