import React, {Component} from 'react'
import axios from 'axios'
import Router from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Showfood = React.createClass({

  getInitialState() {


    return {
      pool: this.props.pool,
      };

  },


  handleClick(event){
    // axios.get("/api/show")
    //   .then(response => this.setState({pool:response}));
    //     console.log(this.state.res);

  },


  render() {
    // console.log(this.props.pool)
    // console.log(this.state.plans)


  if(this.props.pool == undefined){



  return (
  <section className='content-padding plan planOne'>
       <div className="wow bounceInRight row">
        <div className="large-12 medium-12 small-12 columns text-center">
          <div className="head align-center">
            <h2 className="margin0">Plan One</h2>
          </div>
        </div>
      </div>
    <div id="foodplanner">

        <div>
          <h2>
            Start Saving.....
          </h2>
        </div>
    </div>
  </section>
        );




}else{  
  var listplan = this.props.pool.data[0].array.map(function(planz,index){

    console.log(planz.res)

    var foods = planz.res.map(function(food,index){
       return(
        <img id="sick" src={food.image} alt="" />
        )}.bind(this));

    return (
    <section className='content-padding plan planOne'>
       <div className="wow bounceInRight row">
        <div className="large-12 medium-12 small-12 columns text-center">
          <div className="head align-center">
            <h2 className="margin0">{planz.title}</h2>
          </div>
        </div>
      </div>
    <div id="foodplanner">
        <div>
            {foods}
        </div>
    </div>
  </section>
       

      )}.bind(this));



 return (
       <div>
       {listplan}
       </div>
      )
      }
  },

});


module.exports = Showfood;