import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { TradeComponent } from './trade/trade.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    TradeComponent,
    AdminAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
         {
            path: 'account',
            component: AccountComponent
         },
         {
           path: 'trade',
           component: TradeComponent
         },
         {
            path: 'admin_account',
            component: AdminAccountComponent
         }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
