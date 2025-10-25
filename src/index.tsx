import {
  definePlugin,
  ServerAPI,
  // --- IMPORTACIONES AÑADIDAS ---
  PanelSection, 
  ButtonItem,
} from "decky-frontend-lib";
import { RxMixerVertical } from "react-icons/rx";

import App from "./components/App/App";
// import Title from "./components/UI/Title"; // Eliminamos la importación que puede fallar

import PythonServer from "./services/pythonServer";

export default definePlugin((serverApi: ServerAPI) => {
  PythonServer.getInstance().setServer(serverApi)
  
  return {
    // Definimos el título aquí directamente en lugar de usar el componente Title que podría fallar.
    title: <div style={{ fontWeight: 'bold' }}>JC's Media Control</div>, 
    // Usamos una clave en el contenido para forzar una carga segura
    content: <App key="main-app-key" />, 
    icon: <RxMixerVertical />,
    onDismount() {
    },
  };
});