import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Tom',
    lastName: 'Cruise',
    fullName: 'Tom Cruise',
    username: 'tom_cruise',
    password: 'tomcruise123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Keanu',
    lastName: 'Reeves',
    fullName: 'Keanu Reeves',
    username: 'keanu_reeves',
    password: 'keanureeves123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
