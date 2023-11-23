export interface IUser {
  [x: string]: any;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phon: string;
  address: {
    location: string;
    lat: number;
    lng: number;
    zipCode: string;
  };
}

export interface ICenter {
  id: number;
  name: string;
  address: {
    location: string;
    coords: {
      lat: number;
      lng: number;
    };
    zipCode: string;
    type?: Array<string>;
  };
}
