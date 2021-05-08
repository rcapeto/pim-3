import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Room from '../pages/Room';
import Installations from '../pages/Installations';

export default function Routes() {
   return(
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms/:id" component={Room}/>
            <Route path="/installations" component={Installations}/>
         </Switch>
      </BrowserRouter>
   );
}