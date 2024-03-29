import { IDeviceInfo, ITenantInfo } from "../../auxiliares";
import { IValoresResumenReporte } from "./valores reporte/valoresReporte";

export interface ICreateResumenReporte {
  fechaCreacion?: string;
  // Tentant
  tenant?: ITenantInfo;
  // Datos del dispositivo
  device?: IDeviceInfo;
  // Ids de otras entidades que tienen asignado el dispositivo
  idsAsignados?: string[];
  // Datos especificos de acuerdo al tipo de dispositivo
  valores?: IValoresResumenReporte;
}
