// This is a generated file, any changes made will be overwritten
import { Field } from './Field';


export interface ColumnDefinition extends Field {
    fieldType?: 'ColumnDefinition';
    width?: number;
    autoHeight?: boolean;
    lowResolutionWidth?: number;
    headerStyle?: { [key: string]: string; };
    style?: any;
    headerClasses?: string;
    cellClasses?: string;
    suppressFilter?: boolean;
    filter?: string;
    pinLocation?: string;
}
