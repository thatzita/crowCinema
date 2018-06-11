import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import '../Navbar.css';
// import firebase from '../firebase.js';
// import FrontPage from './FrontPage.js';
// import Upcoming from './Upcoming.js';
// import Booking from './Booking.js';
// import Contact from './Contact.js';

const Navbar = () => (
  <div className="navBarContainer">
           <nav className="navigation">
           <img className="crowImg" src={require("../img/kraklogo.gif")} alt="Kråkebackens biograf"/>
           <h3 className="h3Cinema">Sveriges bästa biograf! (Även den minsta - sorry Tollereds biograf!)</h3>
           <p className="Pquote">"Det skall inte kosta skjortan att gå på bio - inte ens Mats skjorta!" /M.Udéhn</p>
             <ul className="navList">
               <li><Link to='/'>HEM</Link></li>
               <li><Link to='/upcoming'>PÅ GÅNG</Link></li>
               <li><Link to='/booking'>BOKA</Link></li>
               <li><Link to='/contact'>KONTAKT</Link></li>
             </ul>
           </nav>

       </div>
)



// class Navbar extends Component {
//   constructor(props){
//     super();
//     this.state ={
//       navigationPage: 1,
//     };
//   }
//   render(){
//     return(
//       <div className="navBarcontainer">
//         <div className="item">
//           <nav className="navigation">
//           <img className="crowImg" src={require("../img/kraklogo.gif")} alt="Kråkebackens biograf"/>
//             <ul className="navList">
//               <li>HEM</li>
//               <li>PÅ GÅNG</li>
//               <li>BOKA</li>
//               <li>KONTAKT</li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     )
//   }
//
// }

export default Navbar;
