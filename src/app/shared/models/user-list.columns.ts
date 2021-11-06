import { FieldGroup } from '../../dtos/FieldGroup';

export const userListColumns: FieldGroup[] = [
  {
    id: 'userList',
    type: 'Multi',
    fields: [
      { id: 'userName', title: 'User Login', type: 'Text' },
      { id: 'userFullName', title: 'User Name', type: 'Text' },
      { id: 'initials', title: 'Initials', type: 'Text' },
      { id: 'roleNames', title: 'Roles', type: 'Text' },
      { id: 'status', title: 'Status', type: 'Text' },
      { id: 'edit', title: 'Manage', type: 'Button', width: 90, editable: true }
    ]
  }
];
