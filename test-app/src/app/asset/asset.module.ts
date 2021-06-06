import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './components/asset/asset.component';
import { assetsReducer } from '../store/assets/asset.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AssetComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('asset',assetsReducer),
  ],
  exports:[AssetComponent]
})
export class AssetModule { }
