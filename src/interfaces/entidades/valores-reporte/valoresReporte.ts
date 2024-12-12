import { IReporteNSP } from './nsp';
import { IReporteNUC } from './nuc';
import { IReporteScada } from './scada';
import { IReporteSML } from './sml';
import { IReporteVeribox } from './veribox';
import { IReporteWRC } from './wrc';

export type IValoresReporte =
  | IReporteNUC
  | IReporteNSP
  | IReporteVeribox
  | IReporteWRC
  | IReporteSML
  | IReporteScada;
