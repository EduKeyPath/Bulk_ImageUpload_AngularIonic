import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsRoutingModule } from './products-routing.module';
import { CurrencyPipe } from '../../depe/pipe/curnc.pipe';
import { MomentDatePipe } from '../../depe/pipe/mdate.pipe';

import { AddProductsComponent } from './add-products/add-products.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ProductsRoutingModule
  ],
  declarations: [
    AddProductsComponent,
    ProductListComponent,
    CartComponent,
    PlaceOrderComponent,
    ProductShipComponent,
    CurrencyPipe,
    MomentDatePipe
  ],
  providers: [
    NgxImageCompressService
  ],
})
export class ProductsModule {}
