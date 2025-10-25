import React, { VFC } from "react";

// --- INICIO DE IMPORTACIONES ---
import { PanelSection, Button } from "decky-frontend-lib";
import { FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";
import PythonServer from "../../services/pythonServer"; // Importar la clase
// --- FIN DE IMPORTACIONES ---

import AvailableSources from "../AvailableSources/AvailableSources";
import GeneralSoundToggle from "../GeneralSoundToggle/GeneralSoundToggle"; // Se usa aquí

// Obtener la instancia del servidor para poder usarla
const pythonServer = PythonServer.getInstance();

const App: VFC = () => {
  return (
    <>
      {/* --- INICIO DE CÓDIGO AÑADIDO PARA YANDEX --- */}
      <PanelSection title="JCs Media Control">
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "10px",
            padding: "10px 0"
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
      {/* Usamos una clave para forzar la inicialización de los componentes si fallan. */}
      {/* Si el GeneralSoundToggle falla, el AvailableSources puede seguir fallando */}
      <GeneralSoundToggle />
      <AvailableSources key="volume-sources-key" /> 
    </>
  );
}

export default App;