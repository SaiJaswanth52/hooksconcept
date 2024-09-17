import React from 'react'
import CompC from './CompC';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export default function CompA() {
  return (
    <div>
      <UserContext.Provider value={"sai"}>
        <ChannelContext.Provider value={"suraneni"}>
        <CompC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
