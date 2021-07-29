import { ErrorHandlerService } from './services/error-handler.service';
 // module is a logical collection of
// components, directives, pipes (filters)
// services (providers)

import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';

// ng 4.3 onwards
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Step 1: Configuration, url to component mapping
import {Routes, RouterModule} from '@angular/router';
//import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { LoggerService } from './services/logger.service';
import { NgrxCartComponent } from './components/ngrx-cart/ngrx-cart.component';
import { cartReducer } from './state/reducers/cart.reducer';
import { AppState } from './state/models/app.state';
 
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },

    {
        path: 'ngx-cart',
        component: NgrxCartComponent
    },
    
    {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },

    
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }, 
    {
        path: '**',
        component: NotFoundComponent
    }
]


@NgModule({
    imports: [
        //other module dependencies
        BrowserModule, // CommonModule, Compiler referenced
        FormsModule,

        // apply routes to Angular
        RouterModule.forRoot(routes),
        HttpClientModule,
        
        //SharedModule,
       SharedModule.forRoot(),
        // TODO: Lazy loading
        // ProductModule,

         AuthModule,
         StoreModule.forRoot({
            cartState: cartReducer 
      })
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        CartComponent,
        NotFoundComponent,
        NgrxCartComponent,
        //HeaderComponent,
        //FooterComponent,
        //HomeComponent
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService
        },

        LoggerService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
