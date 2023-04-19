import { IAlerta } from "../alerta";
import { ITenantInfo } from "../auxiliares";
import { IReporte } from "../reporte";
import { IDevice } from "./device";
import { IUltimaComunicacion } from "./ultimaComunicacion";

export interface IDispositivo {
  _id: string;
  fechaCreacion: string;
  // Tentant
  tenant?: ITenantInfo;
  // Info de carga
  device?: IDevice;
  // Info de comunicacion
  ultimaComunicacion?: IUltimaComunicacion;
  // Info especifica de cada tipo de dispositivo
  config?: Record<string, any>;
  ultimoReporte?: IReporte;
  ultimaAlerta?: IAlerta;
}
