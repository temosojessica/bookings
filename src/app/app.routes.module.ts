import { DetailComponent } from './detail/detail.component';

import {ViewComponent } from "./view/view.component";
import { BookingsComponent } from "./bookings/bookings.component";
import { EventComponent } from './event/event.component';
// import {Navbarcomponent} from './app/component/navbar.componet"'

//array
export const AppRoutes= [

  {path:'',component: BookingsComponent },
   { path: 'detail', component: DetailComponent, children: [

    {path: 'event', component: EventComponent}, 
    {path: 'view',component: ViewComponent},
    // {path: 'navbar',component:NavbarComponent}
   ]}

];

 