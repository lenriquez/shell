import { FieldGroup } from '../../dtos/FieldGroup';

export const roleListColumns: FieldGroup[] = [
  {
    id: 'roleList',
    type: 'Multi',
    fields: [
      { id: 'name', title: 'Role', type: 'Text' },
      { id: 'edit', title: 'Manage', type: 'Button', width: 90 }
    ]
  }
];
