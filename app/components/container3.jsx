import React, {Component} from 'react'
import axios from 'axios'
import Router from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';



class Container3 extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

    };
    console.log(this.props, 'lol')


  }

  //  handleClick(obj, event){
  //   console.log(obj)
  //   alert('yo')
  //   axios.get("https://crossorigin.me/http://food2fork.com/api/get?key=2fc55b81d38f69fa79fa74a05a1718b0&rId=" + obj.recipe_id)
  //   .then(response => this.setState({roy:response, reciped: obj}));
  //   console.log(this.state.roy)
  // }

  // handleClick2(obj, event){
  //   event.preventDefault();
  //   // save here
  //   console.log(obj)
  // }



  render(){
    console.log(this.props,'dklmxdslmkxdsmx')

    if (this.props.recipe == '') {
         return(
          <div>
        <section className="content-padding recipes">

      </section>
    </div>
  );

    }else{
      console.log(this.props.recipe == '')
      console.log(this.props.recipe)
      var recipe = this.props.recipe
      
      let n = 5
      var limitnum = this.props.recipe.data.slice(0, n);

      var recipes = limitnum.map(function(recipe, index){

    return(
    <div>
    <div key={index}>
    <div className="row">
        
            <div className="card">
                <div className="card-image">
                    <img className="img1" src={recipe.img} alt="" />
                    <span className="card-title">Material Cards</span>
                </div>
                
                <div className="card-content">
                    <p>Cards for display in portfolio style material design by Google.</p>
                </div>
                
                <div className="card-action">
                    <a href="#" target="new_blank">Link</a>
                    <a href="#" target="new_blank">Link</a>
                    <a href="#" target="new_blank">Link</a>
                    <a href="#" target="new_blank">Link</a>
                    <a href="#" target="new_blank">Link</a>
                </div>
            </div>
       
    </div>

    </div>
    </div>

  );
    }.bind(this))


if(this.state.reciped == undefined){

       return(
      <div>
        <section className="content-padding recipes">
        <div className="row">
          <div className="large-12 medium-12 small-12 columns text-center">
            <div className="head align-center">
              <h2 className="margin0">Twitter Watchlist Three</h2>
              
            </div>
          </div>
        </div>

        <div className="wow bounceInUp" data-wow-offset="250">
          <div className="row" data-equalizer>
            {recipes}
          </div>
        </div>
      </section>
    </div>

        );
     }else{
      return(
      <div>
        <section className="content-padding recipes">
        <div className="row">
          <div className="large-12 medium-12 small-12 columns text-center">
            <div className="head align-center">
              <h2 className="margin0"> Twitter Watchlist Three</h2>
              
            </div>
          </div>
        </div>

        <div className="wow bounceInUp" data-wow-offset="250">
          <div className="row" data-equalizer>
            {recipes}
             <Example recipe={this.state.reciped} roy={this.state.roy}/>
          </div>
        </div>
      </section>
    </div>

        );


     }


  }


  }

}

export default Container3