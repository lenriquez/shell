import { FieldGroup } from '../../dtos/FieldGroup';

export const editRoleFields: FieldGroup[] = [
  {
    id: 'editRole',
    type: 'Single',
    fields: [{ id: 'name', title: 'Name', type: 'Text', editable: true }]
  }
];
