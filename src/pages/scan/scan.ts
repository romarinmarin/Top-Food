import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  BarcodeScanner,
  BarcodeScannerOptions,
  BarcodeScanResult
} from "@ionic-native/barcode-scanner";
import { ToastController } from "ionic-angular/components/toast/toast-controller";

@IonicPage()
@Component({
  selector: "page-scan",
  templateUrl: "scan.html"
})
export class ScanPage {
  result: BarcodeScanResult;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bcs: BarcodeScanner,
    private toastCtrl: ToastController
  ) {}

  scanBarcode() {
    const options: BarcodeScannerOptions = {
      prompt: "Pointer votre camera vers un code barre",
      torchOn: false
    };

    this.bcs
      .scan(options)
      .then(res => (this.result = res))
      .catch(err => {
        this.toastCtrl
          .create({
            message: err.message,
            duration: 2000
          })
          .present();
      });
  }
}
