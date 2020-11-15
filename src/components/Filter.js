import React from "react";
import '../App.css';
import'bootstrap/dist/css/bootstrap.min.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Modal,StarRatingComponent
} from 'reactstrap';
const Filter =(props)=>{
    return(
        <Navbar className="bg-light justify-content-between">
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="rating value"
              aria-label="rate"
              aria-describedby="basic-addon1"
              onChange={value=> props.UpdateRating(value)}
            />
          </InputGroup>
        </Form>
        <Form inline>
          <FormControl type="text" placeholder="Filter by Title" className=" mr-sm-2" onChange={e=> props.UpdateTitle(e.target.value)} />
          <Button type="Search">Submit</Button>
        </Form>
      </Navbar>

    )
}
export default Filter;