export interface INTERFACE_GEO {
  lat: string;
  lng: string;
}

export interface INTERFACE_ADDRESS {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: INTERFACE_GEO;
}

export interface INTERFACE_COMPANY {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface INTERFACE_USER {
  id: number;
  name: string;
  username: string;
  address: INTERFACE_ADDRESS;
  phone: string;
  website: string;
  company: INTERFACE_COMPANY;
}
export interface INTERFACE_USER_LIST {
  data: INTERFACE_USER[];
  status: "idle" | "loading";
  error: string | null;
}

export interface INTERFACE_TODO {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface INTERFACE_TODO_LIST {
  data: INTERFACE_TODO[];
  status: "idle" | "loading";
  error: string | null;
}

export interface INTERFACE_REJECT_VALUE {
  message: string;
}