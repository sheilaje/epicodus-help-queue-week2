import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import Image from './Image'
import Error404 from './Error404'
import NewTicketControl from './NewTicketControl'
import AppBar from '@material-ui/core/AppBar'
import { Switch, Route } from 'react-router-dom'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return (
      <div>
        <AppBar position="static">
          <Header/>
        </AppBar>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList}/>} />
          <Route component={Error404}/>
        </Switch>
        <Image/>

      </div>
    )
  }

}
export default App
