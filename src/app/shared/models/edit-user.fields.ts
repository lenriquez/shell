import { FieldGroup } from '../../dtos/FieldGroup';

export const editUserFields: FieldGroup[] = [
  {
    id: 'editUser',
    type: 'Single',
    fields: [
      { id: 'userName', title: 'Username', type: 'Text', editable: true },
      { id: 'email', title: 'Email', type: 'Text', editable: true },
      { id: 'title', title: 'Title', type: 'Text', editable: true },
      { id: 'firstName', title: 'First Name', type: 'Text', editable: true },
      { id: 'middleName', title: 'Middle Name', type: 'Text', editable: true },
      { id: 'lastName', title: 'Last Name', type: 'Text', editable: true },
      { id: 'initials', title: 'Initials', type: 'Text', editable: true },
      {
        id: 'roles',
        title: 'Roles',
        type: 'MultiSelect',
        editable: true,
        additionalData: {
          textField: 'name'
        }
      },
      {
        id: 'phoneNumber',
        title: 'Phone Number',
        type: 'PhoneNumber',
        editable: true
      },
      {
        id: 'cellPhoneNumber',
        title: 'Cell Phone Number',
        type: 'PhoneNumber',
        editable: true
      },
      { id: 'emrIds', title: 'EMR Usernames', type: 'Text', editable: true },
      { id: 'status', title: 'Account Status', type: 'Text' },
      {
        id: 'disabled',
        title: 'Status',
        type: 'Switch',
        additionalData: { onLabel: 'Blocked', offLabel: 'Active' }
      }
    ]
  }
];
