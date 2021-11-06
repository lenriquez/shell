// This is a generated file, any changes made will be overwritten
import { Role } from './Role';


export interface ApplicationUserForUpdate  {
    id?: string;
    userName?: string;
    email?: string;
    title?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    initials?: string;
    roles?: Role[];
    medicalSpecialty?: string[];
    specialPermissions?: string[];
    phoneNumber?: string;
    cellPhoneNumber?: string;
    emrIds?: string;
    dontSendEmail?: boolean;
}
