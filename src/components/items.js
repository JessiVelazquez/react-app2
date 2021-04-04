import React from 'react';
import '../app.css';

import UpdateItemForm from './update-item';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h1>Saved Records</h1>
        {
          this.props.itemsList.map( (item,idx) =>
            <center>
            <Jumbotron style={{ width: '30rem' }}>
              <h3>Record {idx + 1}</h3>
              <h6>Email: {item.name}</h6>
              <p>Description: {item.description}</p>
              <blockquote>{item.notes}</blockquote>
              <UpdateItemForm item={item} handleUpdate={this.props.handleUpdate} />
              <hr></hr>
              <Button class="button"
                data-testid={`delete-button-${item.name}`}
                onClick={ () => this.props.handleDelete(item._id) }
              >Delete Record</Button>
            </Jumbotron>
            </center>
          )
        }
      </section>
    );
  }
}

export default Items;
