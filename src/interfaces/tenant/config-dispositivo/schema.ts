import { IDispositivo } from "../../entidades/dispositivo";

export interface IConfigDispositivoNUC4G {
  horaInicio?: number;
  modoOperacion?: "REG1_DIARIO" | "REG24_DIARIO" | "REG8_8HORAS";
  modoEnv?: "TEST" | "PROD";
  claveMercury?: string;
  modoRegistros?: "REG_TOTALIZADOS" | "REG_PARCIALES";
  nsa?: number; // Numero de serie de american meter
}

export interface IConfigDispositivoNSP4G {
  limiteMin?: number;
  limiteMax?: number;
  horaUTC?: number;
  horaInicio?: number;
  modoEnv?: "TEST" | "PROD";
  modoOperacion?:
    | "REG1_DIARIO"
    | "REG24_DIARIO"
    | "REG1_1HORA"
    | "REG2_2HORAS"
    | "REG3_3HORAS"
    | "REG4_4HORAS"
    | "REG6_6HORAS"
    | "REG8_8HORAS"
    | "REG12_12HORAS";
  timestampBloqueo?: number;
  telefono1?: string;
  telefono2?: string;
  telefono3?: string;
}

export interface IConfigDispositivoVeribox {
  telefono?: string;
  frecuenciaComunicacion?: number;
  limiteMin?: number;
  limiteMax?: number;
  apn?: string;
  usuario?: string;
  clave?: string;
  // Fecha de Aplicación
  fechaAplicacion?: string;
}

export interface IConfigDispositivo {
  // Info autogenerada
  _id?: string;
  idCliente?: string;
  // Info de carga
  deveui?: string;
  config?: Record<string, any>;
  // Virtuals
  dispositivo?: IDispositivo;
}
