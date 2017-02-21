import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-toolbox/lib/button'
import 'react-toolbox/components/commons.scss'
import {Tab, Tabs} from 'react-toolbox'

class Hello extends React.Component {
  state = {
    index: 1,
    fixedIndex: 1,
    inverseIndex: 1
  }

 handleTabChange = (index) => {
    this.setState({index})
  }

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index})
  }

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index})
  }

  handleActive = () => {
    console.log('Special one activated')
  }

  render() {
    return (
      <div>
        <img src={this.props.image} width={this.props.width} />
        <h1>Welcome to Neuron!</h1>
        <Button icon='bookmark' label='Bookmark' raised primary />
        <section>
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            <Tab label='Primary'><small>Primary content</small></Tab>
            <Tab label='Secondary' onActive={this.handleActive}><small>Secondary content</small></Tab>
            <Tab label='Third' disabled><small>Disabled content</small></Tab>
            <Tab label='Fourth' hidden><small>Fourth content hidden</small></Tab>
            <Tab label='Fifth'><small>Fifth content</small></Tab>
          </Tabs>
          <h5>Fixed Tabs</h5>
          <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
            <Tab label='First'><small>First Content</small></Tab>
            <Tab label='Second'><small>Second Content</small></Tab>
            <Tab label='Third'><small>Third Content</small></Tab>
          </Tabs>
          <h5>Inverse Tabs</h5>
          <Tabs index={this.state.inverseIndex} onChange={this.handleInverseTabChange} inverse>
            <Tab label='First'><small>First Content</small></Tab>
            <Tab label='Second'><small>Second Content</small></Tab>
            <Tab label='Third'><small>Third Content</small></Tab>
            <Tab label='Disabled' disabled><small>Disabled Content</small></Tab>
          </Tabs>
         </section>
      </div>
    )
  }
}

ReactDOM.render(
  <Hello image={"dist/img/logo.png"} width={200} />,
  document.getElementById("app")
)
