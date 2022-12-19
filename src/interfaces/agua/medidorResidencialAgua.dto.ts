import { ICoordenadas } from '../auxiliares';
import { IReporteMra } from './reporteMra.model';

export interface ICreateMedidorResidencialAgua {
  deviceMeterNumber: number;
  deveui: string;
  deviceName?: string;
  //
  ultimoReporte?: IReporteMra;
  //
  consumoInicial?: number;
  ubicacionGps?: ICoordenadas;
  direccion?: string;
  localidad?: string;
  nombre?: string;
  descripcion?: string;
  //
  idCliente?: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
}

export interface IUpdateMedidorResidencialAgua {
  deviceMeterNumber?: number;
  deveui?: string;
  deviceName?: string;
  //
  ultimoReporte?: IReporteMra;
  //
  consumoInicial?: number;
  ubicacionGps?: ICoordenadas;
  direccion?: string;
  localidad?: string;
  nombre?: string;
  descripcion?: string;
  //
  idCliente?: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
}