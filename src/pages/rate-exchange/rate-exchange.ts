import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestAPIService } from '../../providers/rest-api-service';
import { LoadingComponent } from '../../components/loading/loading';

/**
 * Generated class for the RateExchange page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-rate-exchange',
  templateUrl: 'rate-exchange.html',
})
export class RateExchangePage {

  rateExchangeData? : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private restService: RestAPIService, private loading:LoadingComponent) {
      this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateExchange');
  }

  private getData(refresher?) {
    if(!refresher) {
      // this.loading.showLoading("Loading...");
    }
    this.restService.getRateExchangeData().subscribe((res) => {
        console.log('RateExchangePage - getRateExchangeData res :', res);
        this.rateExchangeData = res;
        refresher ? refresher.complete() : this.loading.hideLoading();
      }, (err)=>{
         refresher ? refresher.complete() : this.loading.hideLoading();
      });
  }

  public refreshContent(refresher) {
    this.getData(refresher);
  }

}
