import React, { Component } from 'react';

//---Basic Code Start---//
// function Header() {
//   return (
//     <div>
//       <h1>Header</h1>
//     </div>
//   );
// }
//-----OR------////
//ES 6 
// class Header extends Component{
//   render(){
//     return (
//       <div>
//         <h1>Hello world</h1>
//       </div>
//     );
//   }
// }
//---Basic Code End---//

class Header extends Component {
  render() {
    return (
      <header>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#myPage">
                  <img src={require('../images/Logo/logo-header.png')} alt="street style logo" />
                </a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#fashion">Fashion</a></li>
                  <li><a href="#services">Beauty</a></li>
                  <li><a href="#portfolio">Lifestyle</a></li>
                  <li><a href="#pricing">Entertaiment </a></li>
                </ul>
              </div>
            </div>
          </nav>
      </header>
    );
  }
}


export default Header;
