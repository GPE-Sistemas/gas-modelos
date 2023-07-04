import { ICoordenadas } from "../../auxiliares";
import { IAlerta } from "../alerta";
import { ICromatografia } from "../cromatografia.model";
import { IRegistro } from "../registro.model";

export interface ICreateCorrectora {
  firmware?: string;
  numeroSerie?: number;
  deveui?: string;
  deviceName?: string;
  modelo?: string;
  bateria?: number;
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
  codigoSimec?: string;
  estadoActual?: "Operativa" | "En Mantenimiento" | "Resolver" | string;
  //
  idCliente: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
}