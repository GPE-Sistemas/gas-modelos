export interface IUpdateAlerta {
  estado?: "Cerrado" | "Activo";
  fechaCierre?: string;
  timestamp?: string;
}