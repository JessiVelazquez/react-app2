import React from 'react';

class UpdateItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  handleChange = (e) => {
    console.log('hi change');
    const field = e.target.name;
    const value = e.target.value;
    const item = this.props.item;
    item[field] = value;
    this.setState(item);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi submit');
    this.props.handleUpdate(this.props.item);
  }


  render() {
    return (
      <form data-testid={`update-form-${this.props.item.name}`} onSubmit={(e) => this.handleSubmit(e)}>
        <input data-testid={`update-field-${this.props.item.name}`} name="notes" placeholder="Add Notes" onChange={this.handleChange} />
        <button type="submit">Update Item</button>
      </form>
    );
  }
}

export default UpdateItemForm;
