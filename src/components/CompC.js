import React,{useContext} from 'react'
import CompD from './CompD'
import { UserContext,ChannelContext } from './CompA'

export default function CompC() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user} {channel}
    </div>
  )
}
