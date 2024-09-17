import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    incrementCount = () => {
        this.setState((c) =>{
          return( { count: c.count+1 } )

        })
    }
    
  render() {
    const{count} = this.state
    return (
      <div>
        <button type ="submit" onClick={this.incrementCount}> Count is {count}</button>
      </div>
    )
  }
}
