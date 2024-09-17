import React from 'react'
import { UserContext } from './CompA'
export default function CompD() {
  return (
    <div>
      <UserContext.Consumer>
        {
           (name) => {
            return <div>User name is {name}</div>
           }
        }
      </UserContext.Consumer>
    </div>
  )
}
