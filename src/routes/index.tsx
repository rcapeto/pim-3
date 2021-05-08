import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import Room from '../pages/Room';
import Installations from '../pages/Installations';
import Contact from '../pages/Contact';

export default function Routes() {
   return(
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms" exact component={Rooms}/>
            <Route path="/rooms/:id" component={Room}/>
            <Route path="/installations" component={Installations}/>
            <Route path="/contact" component={Contact}/>
         </Switch>
      </BrowserRouter>
   );
}