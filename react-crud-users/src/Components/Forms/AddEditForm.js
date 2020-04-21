import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Project from '../../services/project';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    name: '',
    email: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  /*requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  } ;
  response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
  data = await response.json();
  setState({ postId: data.id });
*/

  submitFormAdd = e => {
    e.preventDefault();

    Project.store(this.state).then(result => {

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
    /*fetch('http://localhost:8000/api/user/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
      })
    })
      .then(response => response.json())
      .then(item => {
        if (item.id != null) {
          this.props.addItemToState(item)
          this.props.toggle()
        } else {
          alert("Falha ao adicionar");
          console.log('Falha ao adicionar')
        }
      })
      .catch(err => console.log(err))*/

      
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:8000/api/user/' +  this.state.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        email: this.state.email
      })
    })
      .then(response => response.json())
      .then(item => {
        if (item != null) {
          // console.log(item[0])
          this.props.updateState(item)
          this.props.toggle()
        } else {
          alert("Falha ao atualizar");
          console.log('Falha ao atualizar')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, name, email } = this.props.item
      this.setState({ id, name, email })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd} >
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name} required/>
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} required />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
    );
  }
}

export default AddEditForm;