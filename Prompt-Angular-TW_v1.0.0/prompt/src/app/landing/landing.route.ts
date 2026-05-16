import { Route } from "@angular/router";
import { Home } from "../home/home";
import { MobileApp } from "./mobile-app/mobile-app";
import { SaasModern } from "./saas-modern/saas-modern";
import { SaasClassic } from "./saas-classic/saas-classic";
import { Startup } from "./startup/startup";
import { Software } from "./software/software";
import { Agency } from "./agency/agency";
import { CoWorking } from "./co-working/co-working";
import { Crypto } from "./crypto/crypto";
import { Marketing } from "./marketing/marketing";
import { Portfolio } from "./portfolio/portfolio";

export const LANDING_ROUTES: Route[] = [
  { path: '', component: Home },
  {
    path: 'app',
    component: MobileApp,
    data: { title: 'Mobile Application Landing Page' },
  },
  {
    path: 'saas',
    component: SaasModern,
    data: { title: 'Saas Application Landing Page' },
  },
  {
    path: 'saas2',
    component: SaasClassic,
    data: { title: 'Saas Application Landing Page' },
  },
  {
    path: 'startup',
    component: Startup,
    data: { title: 'Startup Landing Page' },
  },
  {
    path: 'software',
    component: Software,
    data: { title: 'Software Landing Page' },
  },
  {
    path: 'agency',
    component: Agency,
    data: { title: 'A Landing Page for an Agency' },
  },
  {
    path: 'coworking',
    component: CoWorking,
    data: { title: 'Co-Working Space Landing Page' },
  },
  {
    path: 'crypto',
    component: Crypto,
    data: { title: 'Crypto Landing Page' },
  },
  {
    path: 'marketing',
    component: Marketing,
    data: { title: 'Marketing Landing Page' },
  },
  {
    path: 'portfolio',
    component: Portfolio,
    data: { title: 'Portfolio Landing Page' },
  },
];