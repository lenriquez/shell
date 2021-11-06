export class ApiUrls {
  public static get ApplicationUserUrl(): string {
    return 'applicationusers';
  }

  public static get AppointmentUrl(): string {
    return 'appointments';
  }

  public static get BillingDenialCodeUrl(): string {
    return 'billingDenialCode';
  }

  public static get CodeSystem(): string {
    return 'CodeSystem';
  }

  public static get CodeSystemCodeType(): string {
    return 'codeSystemCodeType';
  }

  public static get CodeSystemDisplayGroup(): string {
    return 'CodeSystemDisplayGroup';
  }
  public static get CodeSystemDisplayGroupWithCodes(): string {
    return ApiUrls.CodeSystemDisplayGroup + '/CodeSystemDisplayGroupWithCodes';
  }

  public static get CodeSystemDisplayGroupXref(): string {
    return 'CodeSystemDisplayGroupXref';
  }

  public static get Encounters(): string {
    return 'encounters';
  }

  public static get EndOfDayReview(): string {
    return 'flowsheetreview';
  }

  public static get FlowsheetConfigUrl(): string {
    return 'flowsheetconfig';
  }

  public static get IndicatorOverrideUrl(): string {
    return 'IndicatorOverride';
  }

  public static get InsuranceCarrierTimelyFilingUrl(): string {
    return 'insuranceCarrierTimelyFiling';
  }

  public static get LettersUrl(): string {
    return 'letters';
  }
  public static get LedgerUrl(): string {
    return 'ledgers';
  }

  public static get PatientDoctorsUrl(): string {
    return 'patientdoctors';
  }

  public static get ObservationUrl(): string {
    return 'observations';
  }

  public static get PatientsUrl(): string {
    return 'patients';
  }

  public static get PatientInsuranceUrl(): string {
    return 'patientInsurance';
  }

  public static get PlanUrl(): string {
    return 'plan';
  }

  public static get ProblemsUrl(): string {
    return 'problems';
  }

  public static get ProvidersUrl(): string {
    return 'provider';
  }

  public static get ProviderSettingsUrl(): string {
    return 'providerSettings';
  }

  public static get ProviderUsersUrl(): string {
    return 'provider/providerUser';
  }

  public static get ReportingDataUrl(): string {
    return 'reportingdata';
  }

  public static get ReportsUrl(): string {
    return 'v1/reports';
  }

  public static get ReportParametersUrl(): string {
    return 'parameters';
  }

  public static get UserTaskUrl(): string {
    return 'userTask';
  }

  public static get reportingTaskUrl(): string {
    return 'userTask/get';
  }

  public static get UserTaskStatusUrl(): string {
    return 'userTaskStatus';
  }

  public static get UserTaskCategoryUrl(): string {
    return 'userTaskCategory';
  }

  public static get MedicationUrl(): string {
    return 'medication';
  }

  public static get MedicationDiscontinuationReasonUrl(): string {
    return 'MedicationDiscontinuationReason';
  }

  public static get SiteMessagesUrl(): string {
    return 'siteMessages';
  }

  public static get UserSettingUrl(): string {
    return 'userSetting';
  }

  public static get PatientDocument(): string {
    return 'patientDocument';
  }

  public static get Configuration(): string {
    return 'configuration';
  }
}
