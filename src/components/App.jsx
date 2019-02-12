import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import AppBar from '@material-ui/core/AppBar';


function App(){
  return (
    <div>
      <AppBar position="static">
      <Header/>
      </AppBar>
      <TicketList/>

    </div>
  )

}
export default App
