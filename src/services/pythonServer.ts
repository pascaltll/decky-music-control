import { ServerAPI } from "decky-frontend-lib"

class PythonServer {
  private static instance: PythonServer
  private server: ServerAPI | undefined = undefined

  private constructor(){}

  static getInstance(): PythonServer {
    if(!PythonServer.instance) {
      PythonServer.instance = new PythonServer()
    }

    return PythonServer.instance
  }

  setServer(s: ServerAPI) {
    this.server = s;
  }

  getServer() {
    return this.server
  }

  resolve(promise: Promise<any>, setter?: any) {
    (async function () {
      const data = await promise;
      if (data.success) {
        console.debug("Got resolved", data, "promise", promise);
        setter(data.result);
      } else {
        console.warn("Resolve failed:", data, "promise", promise);
      }
    })();
  }

  // --- INICIO DE FUNCIONES ORIGINALES (MODIFICADAS PARA SER SEGURAS) ---

  getPlayingProgramsNames(): Promise<any> {
    // Si el servidor no está listo, devuelve una promesa con un array vacío
    if (!this.server) {
      return Promise.resolve({ success: true, result: [] });
    }
    return this.server!.callPluginMethod('mm_get_programs_names', {})
  }

  setNewVolume(playerId: number, newVolumeVal: number): Promise<any> {
    if (!this.server) {
      return Promise.resolve({ success: false });
    }
    return this.server!.callPluginMethod('mm_update_current_volume', {player_id: playerId, new_volume: newVolumeVal})
  }

  toggleMuteStatus(): Promise<any> {
    if (!this.server) {
      return Promise.resolve({ success: false });
    }
    return this.server!.callPluginMethod('mm_toggle_mute_system', {})
  }

  getMuteStatus(): Promise<any> {
    // Si el servidor no está listo, devuelve un estado de "no muteado" por defecto
    if (!this.server) {
      return Promise.resolve({ success: true, result: { isMuted: false } });
    }
    return this.server!.callPluginMethod('mm_get_mute_status', {})
  }

  // --- FIN DE FUNCIONES ORIGINALES ---


  // --- INICIO DE FUNCIONES DE YANDEX (LAS QUE AÑADIMOS) ---

  yandexPlayPause(): Promise<any> {
    if (!this.server) {
      return Promise.resolve({ success: false });
    }
    return this.server!.callPluginMethod('ym_play_pause', {})
  }

  yandexNext(): Promise<any> {
    if (!this.server) {
      return Promise.resolve({ success: false });
    }
    return this.server!.callPluginMethod('ym_next', {})
  }

  yandexPrevious(): Promise<any> {
    if (!this.server) {
      return Promise.resolve({ success: false });
    }
    return this.server!.callPluginMethod('ym_previous', {})
  }

  // --- FIN DE FUNCIONES DE YANDEX ---

}

export default PythonServer