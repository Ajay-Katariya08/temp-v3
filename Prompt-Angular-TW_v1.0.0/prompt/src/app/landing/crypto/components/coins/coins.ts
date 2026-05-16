import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { cryptoData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'landing-crypto-coins',
  imports: [RouterLink],
  templateUrl: './coins.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Coins {
  cryptoData = cryptoData;
}
