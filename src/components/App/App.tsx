import React, { VFC } from "react";

// --- INICIO DE IMPORTACIONES AÑADIDAS ---
import { PanelSection, Button } from "decky-frontend-lib";
import { FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";
import PythonServer from "../../services/pythonServer"; // Importar la clase
// --- FIN DE IMPORTACIONES AÑADIDAS ---

import AvailableSources from "../AvailableSources/AvailableSources";
import GeneralSoundToggle from "../GeneralSoundToggle/GeneralSoundToggle";

// Obtener la instancia del servidor para poder usarla
const pythonServer = PythonServer.getInstance();

const App: VFC = () => {
  return (
    <>
      {/* --- INICIO DE CÓDIGO AÑADIDO PARA YANDEX --- */}
      <PanelSection title="Yandex Music Control">
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "10px",
            padding: "10px 0" // Añadir algo de espacio vertical
          }}
        >
          {/* Botón de Anterior */}
          <Button
            onClick={() => {
              pythonServer.yandexPrevious();
            }}
          >
            <FaStepBackward />
          </Button>

          {/* Botón de Play/Pausa */}
          <Button
            onClick={() => {
              pythonServer.yandexPlayPause();
            }}
          >
            <FaPlay />
          </Button>

          {/* Botón de Siguiente */}
          <Button
            onClick={() => {
              pythonServer.yandexNext();
            }}
          >
            <FaStepForward />
          </Button>
        </div>
      </PanelSection>
      {/* --- FIN DE CÓDIGO AÑADIDO PARA YANDEX --- */}
      
      
      {/* --- CÓDIGO ORIGINAL (CONTROLES DE VOLUMEN) --- */}
      {/* Estos componentes se mantienen para que el plugin de volumen siga funcionando */}
      <GeneralSoundToggle />
      <AvailableSources />
    </>
  );
}

export default App;