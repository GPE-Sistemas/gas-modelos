import { IDeviceInfo, ITenantInfo } from '../auxiliares';
import { ICorrectora } from './correctora';
import { IMedidorResidencial } from './medidor-residencial';
import { IMedidorResidencialAgua } from './medidor-residencial-agua';
import { IPresionScada } from './presion-scada';
import { IPuntoMedicion } from './punto-medicion';
import { IUnidadPresion } from './unidad-presion';
import { IValoresReporte } from './valores-reporte/valoresReporte';

export interface IReporte {
  _id?: string;
  fechaCreacion?: string;
  // Tentant
  tenant?: ITenantInfo;
  // Datos del dispositivo
  device?: IDeviceInfo;
  // Ids de otras entidades que tienen asignado el dispositivo
  idsAsignados?: string[];
  // Datos especificos de acuerdo al tipo de dispositivo
  valores?: IValoresReporte;

  // Virtuals
  puntoMedicion?: IPuntoMedicion;
  correctora?: ICorrectora;
  unidadPresion?: IUnidadPresion;
  medidorResidencial?: IMedidorResidencial;
  medidorResidencialAgua?: IMedidorResidencialAgua;
  scada?: IPresionScada;
}

////// CREATE
type Omitir =
  | '_id'
  | 'puntoMedicion'
  | 'correctora'
  | 'unidadPrsion'
  | 'medidorResidencial'
  | 'medidorResidencialAgua'
  | 'scada';
export interface ICreateReporte extends Omit<Partial<IReporte>, Omitir> {}

export interface IUpdateReporte extends Omit<Partial<IReporte>, Omitir> {}
