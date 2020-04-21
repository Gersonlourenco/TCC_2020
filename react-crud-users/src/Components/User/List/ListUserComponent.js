import React from 'react';
import UserService from '../../../services/userService';

class ListUserComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      submitted: false,
      users: []
    };
  }


  deleteUser = id => {
    //e.preventDefault();
  }

  userDetails = id => {
    //e.preventDefault();
  }

  submitFormAdd = e => {
    e.preventDefault();

    /*
    UserService.createUser(this.state).then(result => {
      //this.props.setIsRegister(true);
    })
      .catch(error => {
        /const data = error.response.data;
        let message = [];
  
        for (var key in data.params) {
          message.push(data.params[key].join(', '));
        }
  
        this.setState({
          error: message.join(' \n')
        });/

      })*/
  }

  /*getItems(){
    fetch('http://localhost:8000/api/user')//,  { mode: 'no-cors'}
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }*/

  componentDidMount() {
    // if item exists, populate the state with proper data

    this.setState({
      users: [{ 'id': 1, 'name': 'teste', 'email': 'gerson@tes' },
      { 'id': 2, 'name': 'teste', 'email': 'gerson@tes' }]
    })

  }

  render() {
    return (
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h2>Lista de usuários</h2>
        </div>
        <div class="panel-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={this.deleteUser(user.id)} class="btn btn-danger">Deletar</button>
                      <button onClick={this.userDetails(user.id)} class="btn btn-info" style={{ marginLeft: '10px' }} >Visualizar</button>
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;