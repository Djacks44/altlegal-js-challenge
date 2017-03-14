import React, {Component} from 'react'
import axios from 'axios'
import ShowRecipe from './recipies.jsx'
  var twitter = require('twitter')







class SearchRecipe extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      search:[],
      loggedin: false
    }
  }
//c
  componentDidMount() {
    axios.get('/users/userlogedin')
         .then(req => this.setState({ loggedin: req.data.logged_in}));
  }
  logout(){
    this.setState({ loggedin: false})
  }
  handleClick(event){
    event.preventDefault();
   var x = this.refs.lol.value.trim();
   axios.get("/tweets")
     .then(response => this.setState({search: response}, console.log(this.state.search)))

      //  function(response){
      //  var firstsearch = []
      //  for (var i = 0; i < response.data.Results.length; i++) {
      //    if(response.data.Results[i].StarRating > 0){
      //      firstsearch.push(response.data.Results[i])
      //    }
      //      if(firstsearch.length = 8){
      //        this.setState({ search: firstsearch})
      //      }
      //  }
  // }.bind(this))
}


  render(){

    if (this.state.loggedin) {
      return(
        <div>
           <header id="header">
            <nav className="wow fadeInDown">
             <div className="row">
               <div className="large-3 medium-12 small-12 columns">
                 <img src='assets/img/dailygrub.png' className="img-responsive logo"/>
               </div>
               <div className="large-9 medium-12 small-12 columns">
                 <span id="showmobilemenu" className="hide-for-large-up">Menu</span>
                 <ul id="mainnav">
                   <li><a href="/" className="active">Home</a></li>
                   <li><a href="/#/Profile">Profile</a></li>
                   <li><a href="views/blog.html" >About Us</a></li>
                   <li role="presentation"><a href="#" className="whtText" onClick={this.logout.bind(this)} >Log out</a></li>
                 </ul>
               </div>
             </div>
            </nav>
          <section id="header-content">
            <img src='assets/img/dailygrub.png'  className="wow fadeInDown img-responsive logo"/>
             <div>
               <form onSubmit={this.handleClick.bind(this)}>
                 <input id="bti" type="text" ref="lol" placeholder="What do you want to Eat?" />
                 <button id="bt" onClick={this.handleClick.bind(this)}>Submit</button>
               </form>
              </div>
         <br />
         <h6 className="big fontsans">The best recipes for tasty dishes</h6>

       </section>
     </header>


       <div>
         <ShowRecipe recipe={this.state.search}/>
       </div>

 </div>
      )}else{
        return(
          <div>
             <header id="header">
              <nav className="wow fadeInDown">
               <div className="row">
                 <div className="large-3 medium-12 small-12 columns">
                   <img src='assets/img/dailygrub.png' className="img-responsive logo"/>
                 </div>
                 <div className="large-9 medium-12 small-12 columns">
                   <span id="showmobilemenu" className="hide-for-large-up">Menu</span>
                   <ul id="mainnav">
                     <li><a href="/" className="active">Home</a></li>
                     <li><a href="/about">About Us</a></li>
                     <li role="presentation"><a href="#" data-toggle="modal" data-target="#sign-in" className="whtText">Login</a></li>
                   </ul>
                 </div>
               </div>
              </nav>
              <section id="header-content">
                <img src='assets/img/dailygrub.png'  className="wow fadeInDown img-responsive logo"/>
                 <div>
                   <form onSubmit={this.handleClick.bind(this)}>
                     <input id="bti" type="text" ref="lol" placeholder="What do you want to Eat?" />
                     <button id="bt" onClick={this.handleClick.bind(this)}>Submit</button>
                   </form>
                  </div>
             <br />
             <h6 className="big fontsans">The best recipes for tasty dishes</h6>

             </section>
            </header>


            <div>
             <ShowRecipe recipe={this.state.search}/>
            </div>
          </div>
        );
      }
    }
  }


export default SearchRecipe
