import React from 'react';

// import {Form, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import 'bootstrap/dist/css/bootstrap.min.css';

class AddNewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const formData = this.state.formData;
    formData[field] = value;
    this.setState({formData});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleAddItem(this.state.formData)
  }

  render() {

    return (
      <center>
      <Jumbotron id="jumbo1" style={{ width: '40rem' }}>
        <center>
        <Form style={{ width: '20rem' }} data-testid="add-form" onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" data-testid="add-form-name" name="name" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" data-testid="add-form-description" name="description" onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </Form>
        </center>
      </Jumbotron>
      </center>
    );
  }
}

export default AddNewItem;
