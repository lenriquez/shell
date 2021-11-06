// This is a generated file, any changes made will be overwritten
import { FieldAlignmentType } from './FieldAlignmentType';
import { FieldLayoutType } from './FieldLayoutType';
import { FieldType } from './FieldType';
import { Indicator } from './Indicator';
import { Link } from './Link';

export interface Field {
  fieldType?: string;
  id: string;
  editable?: boolean;
  title?: string;
  format?: string;
  style?: any;
  type?: FieldType;
  typeId?: string;
  classes?: string;
  indicator?: Indicator[];
  alignment?: FieldAlignmentType;
  fieldLayout?: FieldLayoutType;
  additionalData?: { [key: string]: any };
  editableLink?: string;
  dataSourceName?: string;
  dataSourceLink?: Link;
  suppressSizeToFit?: boolean;
}
