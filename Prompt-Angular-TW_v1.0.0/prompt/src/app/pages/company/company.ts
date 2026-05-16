import { Component } from '@angular/core';
import { Stats } from "./components/stats/stats";
import { Feature } from "./components/feature/feature";
import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";
import { Team } from "./components/team/team";
import { Clients } from "./components/clients/clients";
import { App } from "@/app/app";

@Component({
  selector: 'app-company',
  imports: [Stats, Feature, About, Hero, Team, Clients, App],
  templateUrl: './company.html',
  styles: ``,
})
export class Company {}
