import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Asset } from 'src/app/models/asset.model';
import { addAssets } from 'src/app/store/assets/asset.action';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  newAsset:Asset = {
    id: '2',
    rank: '1',
    symbol: 'A',
    name: 'aerf',
    supply: 'aaaa',
    maxSupply:  null,
    marketCapUsd: 'string',
    volumeUsd24Hr: 'string',
    priceUsd: 'string',
    changePercent24Hr: 'string',
    vwap24Hr: 'string'
  }

  onClick(){
    this.store.dispatch(addAssets({payload:[this.newAsset]}))
  }

}
