export interface ICreateRegistro {
  timestamp: number;
  corrected: number;
  uncorrected: number;
  presion: number;
  temperatura: number;
  contador: number;
  //
  numeroSerieCorrectora: number;
  deveui: string;
  deviceName?: string;
  //
  idCliente: string;
  idUnidadNegocio?: string;
}
