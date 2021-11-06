// This is a generated file, any changes made will be overwritten
import { FieldGroupType } from './FieldGroupType';
import { Field } from './Field';
import { ColumnDefinition } from './ColumnDefinition';
import { ColumnGroup } from './ColumnGroup';


export interface FieldGroup  {
    id: string;
    type: FieldGroupType;
    partialUpdate?: boolean;
    fields: (Field | ColumnDefinition | ColumnGroup)[];
}
