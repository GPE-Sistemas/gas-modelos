export interface ICreateReporteSml {
  tipo?: "SindCon" | "Hac";
  header?: number;
  paquetSequence?: number;
  deviceMeterNumber?: number;
  pulseConstant?: number;
  meterType?: number;
  meteringMode?: number;
  consumo?: number;
  consumoNegativo?: number | null;
  batteryVoltage?: number;
  statusWord?: number;
  triggerSource?: number;
  checksum?: number;
  //
  fecha: string;
  idCliente: string;
  deveui: string;
  deviceName?: string;
  idUnidadNegocio?: string;
}
