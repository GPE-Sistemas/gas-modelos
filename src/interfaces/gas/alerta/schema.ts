import { ICliente } from "../../tenant";
import { ICentroOperativo } from "../centroOperativo";
import { ICorrectora } from "../correctora";
import { IPuntoMedicion } from "../punto-medicion";
import { IUnidadNegocio } from "../unidadNegocio";
import { IUnidadPresion } from "../unidadPresion";

export type IEstadoAlerta = "Cerrado" | "Activo";
export type ITipoAlerta =
  | "Sin Reportar"
  | "Valor Alto"
  | "Valor Bajo"
  | "Error de comunicación";

export interface IAlerta {
  _id?: string;
  deveui?: string;
  deviceName?: string;
  firmwareNuc?: string;
  apiVersion?: string;
  numeroAlerta?: number;
  timestamp?: string;
  mensaje?: string;
  estado?: IEstadoAlerta;
  tipo?: ITipoAlerta;
  fechaCierre?: string;
  //
  idCliente?: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idPuntoMedicion?: string;
  idUnidadPresion?: string;
  idCorrectora?: string;
  numeroSerieCorrectora?: string | null;
  //
  fechaCreacion?: string;
  // Virtuals
  cliente?: ICliente;
  unidadNegocio?: IUnidadNegocio;
  centroOperativo?: ICentroOperativo;
  puntoMedicion?: IPuntoMedicion;
  unidadPresion?: IUnidadPresion;
  correctora?: ICorrectora;
}
