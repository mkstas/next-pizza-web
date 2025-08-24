import type { User } from '@prisma/client';

export const USERS: Pick<User, 'phoneNumber'>[] = [
  {
    phoneNumber: '79000000000',
  },
];
