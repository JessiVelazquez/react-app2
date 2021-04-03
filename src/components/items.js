import React from 'react';

import UpdateItemForm from './update-item';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h1>Items</h1>
        <Carousel style={{ minHeight: "8rem" }}>
        {
          this.props.itemsList.map( (item,idx) =>
            <>
              <h3>Item {idx + 1}</h3>
              <h6>Email: {item.name}</h6>
              <p>Description: {item.description}</p>
              <blockquote>{item.notes}</blockquote>
              <UpdateItemForm item={item} handleUpdate={this.props.handleUpdate} />
              <Button
                data-testid={`delete-button-${item.name}`}
                onClick={ () => this.props.handleDelete(item._id) }
              >Delete Item</Button>
            </>
          )
        }
        </Carousel>
      </section>
    );
  }
}

export default Items;
