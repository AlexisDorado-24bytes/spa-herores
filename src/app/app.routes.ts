import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./components/home/home.component";


const APP_ROUTER: Routes = [

    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: "home" },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER, { useHash:true });


