import layout from "../public/layout.html";

import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(layout);

const applications = constructApplications({
  routes,
  loadApp: async function (app) {
    console.log("Cargando aplicación", app.name);
    if (window[app.name]) {
      return window[app.name];
    }else{
      throw new Error(`No se ha cargado la aplicación ${app.name}`);
    }
  }
});


const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

applications.forEach(registerApplication)
start();
