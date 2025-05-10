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
    try {
      return await System.import(app.name);
    } catch (error) {
      console.log("Error al cargar la aplicación", app.name, error);
    }
  }
});


const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

applications.forEach(registerApplication)
start();
