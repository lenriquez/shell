// This is a generated file, any changes made will be overwritten
import { Field } from './Field';

export interface ColumnGroup extends Field {
    fieldType?: 'ColumnGroup';
    isGroup?: boolean;
    width?: number;
    headerStyle?: { [key: string]: string; };
    lowResolutionWidth?: number;
    columnGroups?: ColumnGroup[];
    columns?: Field[];
    pinLocation?: string;
}
