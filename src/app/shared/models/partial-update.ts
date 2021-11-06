import { FieldType } from '../../dtos/FieldType';
import { SupportsIndicator } from '../../dtos/SupportsIndicator';

export interface PartialUpdate extends SupportsIndicator {
    fieldToBeUpdated?: string;
    fieldType?: FieldType;
    id?: string;
    objectPath?: string;
    value?: any;
    valueChange?: boolean;
    version?: number;
}
