// This is a generated file, any changes made will be overwritten
import { IndicatorType } from './IndicatorType';
import { Style } from './Style';
import { ExtensionData } from './ExtensionData';


export interface Indicator {
    id: string;
    indicatorType: IndicatorType;
    message?: string;
    style?: Style;
    extensionData?: ExtensionData;
    isDisabled?: boolean;
}
