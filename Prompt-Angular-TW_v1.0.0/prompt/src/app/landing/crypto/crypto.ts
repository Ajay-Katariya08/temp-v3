import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Coins } from "./components/coins/coins";
import { Features } from "./components/features/features";
import { Integration } from "./components/integration/integration";
import { Stats } from "./components/stats/stats";
import { Blog } from "./components/blog/blog";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-crypto',
  imports: [Hero, Coins, Features, Integration, Stats, Blog, Footer],
  templateUrl: './crypto.html',
  styles: ``,
})
export class Crypto {}
