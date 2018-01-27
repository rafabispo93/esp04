import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CervejaProvider} from '../../providers/cerveja/cerveja'


/**
 * Generated class for the AddCerverjaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-cerverja',
  templateUrl: 'add-cerverja.html',
})
export class AddCerverjaPage {
  model: Cerveja;

  constructor(    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private cervejaProvider: CervejaProvider) {
  this.model = new Cerveja();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCerverjaPage');
  }

  save() {
   this.saveCerveja()
     .then((e) => {
       console.log(e, "Cerveja Saved");
       this.toast.create({ message: 'Cerveja salvo.', duration: 3000, position: 'botton' }).present();
       this.navCtrl.pop();
     })
     .catch((e) => {
       console.log(e)
       this.toast.create({ message: 'Erro ao salvar a Cerveja.', duration: 3000, position: 'botton' }).present();
     });
 }

 private saveCerveja() {

     var price_per_ml = this.model.price_per_ml;
     var volume = this.model.volume;
     var beer_name = this.model.beer_name;
     var seller_latitude = this.model.seller_latitude;
     var seller_longitude = this.model.seller_longitude;
     return this.cervejaProvider.insert(this.model);
 }

}

export class Cerveja {
  beer_name: string;
  volume: number;
  price_per_ml: number;
  seller_latitude: number;
  seller_longitude: number;
}
