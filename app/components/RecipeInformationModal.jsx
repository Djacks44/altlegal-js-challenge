import React, {Component} from 'react'
import axios from 'axios'
import Router from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Example = React.createClass({

  getInitialState() {
    console.log(this.props.roy)
    return {
      showModal: true,
      selectedRecipe: this.props.roy,
      };

  },

  componentWillReceiveProps: function(nextProps, prevProps) {
    console.log(prevProps,'loooook')
    console.log(nextProps,'hey')
      axios.get("/api/show")
         .then(response => this.setState({plans:response}));
         console.log(this.state.plans);

  this.setState({selectedRecipe:nextProps.roy, showModal: true});
},

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  save(obj, events) {
    console.log(obj);

    

    var pasObj = {
                  image:obj.data.image_url,
                  title:obj.data.title,
                  recipeid:obj.data.recipe_id
                 }




    //save here
   axios.post('/api/saved', pasObj).then(function (data) {
     console.log('saved successfully');
    });




  },

    handleClick(event){
    event.preventDefault();
    console.log("here is the handleclick to axios for RID");

    axios.get("https://api2.bigoven.com/recipe/" + this.props.recipe.RecipeID + "?api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K")
         .then(response => this.setState({selectedRecipe:response}));
         console.log(this.state.selectedRecipe);

    this.setState({ showModal: true });

  },


  render() {

   

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedRecipe.data.title}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
            <h4>Rating:4</h4>
            <DropdownButton title="Save to Plan" id="bg-vertical-dropdown-3" >
            <MenuItem onClick={this.save.bind(this, this.state.selectedRecipe)} >  add to plan Plan </MenuItem>
            </DropdownButton>
            <br />
            <strong>ingredients</strong>
            <p>{ this.state.selectedRecipe.data.ingredients}</p>
          </Modal.Body>

          <Modal.Footer>

            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },

});


module.exports = Example;
