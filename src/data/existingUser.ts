import { IUser } from "../type/type";

//static data for the select option inputs
export const existingUser: IUser[] = [
  {
    id: 0,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@mail.com",
    phon: "+261343434434",
    address: {
      location: "12ème Avenue de Marlioz",
      lat: 0,
      lng: 0,
      zipCode: "95100 Argenteuil",
    },
  },
  {
    id: 1,
    firstName: "Paul",
    lastName: "Poe",
    email: "paulpoe@mail.com",
    phon: "+261343434443",
    address: {
      location: "anosy",
      lat: 0,
      lng: 0,
      zipCode: "Tuléar 504",
    },
  },
];
