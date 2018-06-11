import React from 'react'
import { Switch, Route } from 'react-router-dom'
import firebase from '../firebase.js';
import FrontPage from './FrontPage.js';
import Upcoming from './Upcoming.js';
import Booking from './Booking.js';
import Contact from './Contact.js';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={FrontPage}/>
      <Route path='/upcoming' component={Upcoming}/>
      <Route path='/booking' component={Booking}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main
