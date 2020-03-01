import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { PostHistoryComponent } from './posts/post-history/post-history.component';
import { PostControlComponent } from './posts/post-control/post-control.component';
import {PostsService} from './posts/posts.service';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { ResultsComponent } from './Results/results/results.component';
import { CostsComponent } from './Results/Costs/costs/costs.component';
import { CustomizeComponent } from './Results/Customize/customize/customize.component';
import { PurchasePriceComponent } from './Results/Costs/purchase-price/purchase-price.component';
import { TotalSavingsComponent } from './Results/Costs/total-savings/total-savings.component';
import { EnvironmentalComponent } from './Results/Environmental/environmental/environmental.component';
import { FuelSettingsComponent } from './Results/Customize/fuel-settings/fuel-settings.component';
import { CarSettingsComponent } from './Results/Customize/car-settings/car-settings.component';
import { CommuteSettingsComponent } from './Results/Customize/commute-settings/commute-settings.component';
import { FinancialSettingsComponent } from './Results/Customize/financial-settings/financial-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostHistoryComponent,
    PostControlComponent,
    ResultsComponent,
    CostsComponent,
    CustomizeComponent,
    PurchasePriceComponent,
    TotalSavingsComponent,
    EnvironmentalComponent,
    FuelSettingsComponent,
    CarSettingsComponent,
    CommuteSettingsComponent,
    FinancialSettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
