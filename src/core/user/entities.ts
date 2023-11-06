export interface User {
    id: number;
    phoneNumber: number;
    avatar: string;
    status: "IN_ACTIVE" | "ACTIVE" | "DELETED";
  }
  