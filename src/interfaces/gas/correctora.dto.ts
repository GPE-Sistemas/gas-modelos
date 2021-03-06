import { ICoordenadas } from "../auxiliares";
import { IAlerta } from "./alerta.model";
import { ICromatografia } from "./cromatografia.model";
import { IRegistro } from "./registro.model";

export interface ICreateCorrectora {
  firmware?: string;
  numeroSerie: number;
  deveui: string;
  deviceName?: string;
  modelo?: string;
  //
  ultimoRegistro?: IRegistro;
  ultimaAlerta?: IAlerta;
  ultimaCromatografia?: ICromatografia;
  fechaUltimaCromatografia?: string;
  //
  ubicacionGps?: ICoordenadas;
  direccion?: string;
  localidad?: string;
  nombre?: string;
  descripcion?: string;
  //
  idCliente: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
}

export interface IUpdateCorrectora {
  firmware?: string;
  numeroSerie?: number;
  deveui?: string;
  deviceName?: string;
  modelo?: string;
  //
  ultimoRegistro?: IRegistro;
  ultimaAlerta?: IAlerta;
  ultimaCromatografia?: ICromatografia;
  fechaUltimaCromatografia?: string;
  //
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
