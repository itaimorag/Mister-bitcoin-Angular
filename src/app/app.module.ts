import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app-root/app.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { HomeComponent } from './views/home/home.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ChartComponent } from './cmps/chart/chart.component'
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { TransactionsListComponent } from './cmps/transactions-list/transactions-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
        AppComponent,
        ContactIndexComponent,
        ContactListComponent,
        ContactPreviewComponent,
        ContactDetailsComponent,
        ContactFilterComponent,
        HomeComponent,
        StatisticsComponent,
        AppHeaderComponent,
        ContactEditComponent,
        UserMsgComponent,
        SignupPageComponent,
        TransactionsListComponent,
        TransferFundComponent,
        ChartComponent,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
