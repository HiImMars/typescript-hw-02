/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Guest = "guest",
}

// Замініть наступний код на версію за допомогою Record\
type UserRolesStatuses = Record<UserRole, string>;

const RoleDescription: UserRolesStatuses = {
  [UserRole.Admin]: "Admin User",
  [UserRole.Editor]: "Editor User",
  [UserRole.Guest]: "Guest User",
};

export {};
