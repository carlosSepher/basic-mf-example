const app = {
  async bootstrap(props) {console.log("App Iniciada",props)},
  async mount(props) {

    console.log("App Montada",props)
    const contenedor = document.getElementById("app-mf-javascript");
    const button = document.createElement("button");
    const texto = document.createElement("input");
    button.innerHTML = "Botón javascript";
    button.textContent = `${props.nombre}`;
    contenedor.appendChild(texto);
    contenedor.appendChild(button);

},
  async unmount(props) {
    
    console.log("App Desmontada",props)

    const contenedor = document.getElementById("app-mf-javascript");
    contenedor.innerHTML = "";

},
};


export const { bootstrap, mount, unmount } = app;

export function square(number) {
  return number * number;
}