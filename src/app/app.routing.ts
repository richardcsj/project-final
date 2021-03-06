import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {MenuComponent} from "./components/menu/menu.component";
import { UserComponent } from './components/admin/user/user.component';
import { PropertyComponent } from './components/admin/property/property.component';
import { ReviewComponent } from './components/admin/review/review.component';
import { UserDetailsComponent } from './components/admin/user/details/details.component';
import { PropertyDetailsComponent } from './components/admin/property/details/details.component';
import { ClientComponent } from './components/owner/client/client.component';
import { OwnerPropertyComponent } from './components/owner/property/property.component';
import { OwnerReviewComponent } from './components/owner/review/review.component';
import { SearchComponent } from './components/customer/search/search.component';
import { ListComponent } from './components/customer/list/list.component';
import { RentalsComponent } from './components/customer/rentals/rentals.component';
import {AuthGuard} from './services/auth-guard.service';
import { NewUserComponent } from './components/admin/user/new/new.component';
import { EditComponent } from './components/admin/user/edit/edit.component';
import {IndexComponent} from "./index/index.component";


// Import all other components here
const APP_ROUTES : Routes = [
  { path : '', component: IndexComponent},
  { path : 'home', component: HomeComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'profile' , component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'profile/menu' , component: MenuComponent},
  { path: 'admin/user', component: UserComponent},
  { path: 'admin/property', component: PropertyComponent},
  { path: 'admin/review', component: ReviewComponent},
  { path: 'admin/user/new', component: NewUserComponent},
  { path: 'admin/user/:userId', component: UserDetailsComponent},
  { path: 'admin/user/:userId/edit', component: EditComponent},
  { path: 'admin/property/:propertyId', component:PropertyDetailsComponent},
  { path: 'owner/client',component:ClientComponent},
  { path: 'owner/client/:clientId',component:ClientComponent},
  { path: 'owner/property',component:OwnerPropertyComponent},
  { path: 'owner/property/:propertyId',component:OwnerPropertyComponent},
  { path: 'owner/review',component:OwnerReviewComponent},
  { path : 'customer/search',component:SearchComponent},
  { path : 'customer/list',component:ListComponent},
  { path : 'customer/type/:type',component:ListComponent},
  { path : 'customer/rentals',component:RentalsComponent}
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
