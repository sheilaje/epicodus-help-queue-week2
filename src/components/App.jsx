import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'
import Image from './Image'
import Error404 from './Error404'
import AppBar from '@material-ui/core/AppBar'
import { Switch, Route } from 'react-router-dom'


function App(){
  return (
    <div>
      <AppBar position="static">
        <Header/>
      </AppBar>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404}/>
      </Switch>
      <Image/>

    </div>
  )

}
export default App
