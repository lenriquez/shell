import { FieldGroup } from '../../dtos/FieldGroup';

export const resetPasswordFields: FieldGroup[] = [
  {
    id: 'resetPassword',
    type: 'Single',
    fields: [
      {
        id: 'password',
        title: 'New Password',
        type: 'Password',
        editable: true
      },
      {
        id: 'confirmPassword',
        title: 'Confirm Password',
        type: 'Password',
        editable: true
      }
    ]
  }
];
