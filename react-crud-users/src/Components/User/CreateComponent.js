import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import User from '../../../services/userService';

class CreateComponent extends React.Component {
  state = {
    id: 0,
    name: '',
    email: '',
    submitted = false
  }


  /*
    user: User = new User();
    submitted = false;
  
    constructor(private userService: UserService, private router: Router) { }
  
    ngOnInit() {
    }
  
    newUser(): void {
      this.submitted = false;
      this.user = new User();
    }*/


  /*componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, name, email } = this.props.item
      this.setState({ id, name, email })
    }
  }*/


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  save = e => {
    e.preventDefault();

    User.createUser(this.state).then(result => {
      //this.props.setIsRegister(true);
    })
      .catch(error => {
        /*const data = error.response.data;
        let message = [];
  
        for (var key in data.params) {
          message.push(data.params[key].join(', '));
        }
  
        this.setState({
          error: message.join(' \n')
        });*/

      })
  }

  onSubmit() {
    submitted = true;
    this.setState({ submitted })
    this.save();
  }

  gotoList() {
    // this.router.navigate(['/users']);
  }

  render() {
    return (
      <div>
        <h3>Crear usuário</h3>
        <div hidden={this.state.submitted} style="width: 400px;">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="name">Nome</label>
              <input type="text" class="form-control" id="name" required onChange={this.onChange}
                value={this.state.name === null ? '' : this.state.name} name="name" />
            </div>

            <div class="form-group">
              <label for="name">E-mail</label>
              <input type="email" class="form-control" id="email" required onChange={this.onChange}
                value={this.state.email === null ? '' : this.state.email} name="email" />
            </div>

            <button type="submit" class="btn btn-success">Submit</button>
          </form>
        </div>

        <div hidden={this.state.submitted}>
          <h4>Enviado com sucesso!</h4>
        </div>
      </div>
    );
  }
}

export default CreateComponent;