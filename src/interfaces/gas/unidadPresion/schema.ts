import {
  ICentroOperativo,
  ICuenca,
  IGrupo,
  IRegistro,
  IUnidadNegocio,
} from "..";
import { GeoJSON, ICoordenadas } from "../../auxiliares";
import { IDispositivo } from "../../tenant";
import { IAlerta } from "../alerta";

export interface IUnidadPresion {
  _id: string;
  //
  firmware: string;
  numeroSerie: number;
  deveui?: string | null;
  deviceName?: string;
  modelo: string;
  fechaCreacion: string;
  bateria?: number;
  //
  ultimoRegistro?: IRegistro;
  ultimaAlerta?: IAlerta;
  //
  ubicacion?: ICoordenadas;
  geojson?: GeoJSON;
  direccion?: string;
  localidad?: string;
  nombre?: string;
  descripcion?: string;
  estadoActual?: "Operativa" | "En Mantenimiento" | "Resolver" | string;
  //
  idCliente: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
  // Populate
  unidadNegocio?: IUnidadNegocio;
  centroOperativo?: ICentroOperativo;
  cuenca?: ICuenca;
  grupos?: IGrupo[];
  dispositivo?: IDispositivo;
}
