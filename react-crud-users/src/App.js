import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
//import ModalForm from './Components/Modals/ModalForm'
//import DataTable from './Components/Tables/DataTable'
//import { CSVLink } from "react-csv"
import ListUserComponent from './Components/User/List/ListUserComponent'

class App extends Component {
  state = {
    items: []
  }

  getItems() {
    fetch('http://localhost:8000/api/user')//,  { mode: 'no-cors'}
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount() {
    this.getItems()
  }

  render() {
    return (
      <Container className="App">
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="\users" class="nav-link" routerLinkActive="active">Usuários</a>
            </li>
            <li class="nav-item">
              <a href="\add" class="nav-link" routerLinkActive="active">Novo usuário</a>
            </li>
          </ul>
        </nav>
 



            {/*
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>CRUD Database</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary"
              data={this.state.items}>
              Download CSV
            </CSVLink>
            <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
          </Col>
        </Row>*/
              <ListUserComponent />

            }
        
    </Container>
    
    )
  }
}

export default App;
