import { ICenter } from "../type/type";

//static data for the list 
export const centerList: ICenter[] = [
  {
    id: 0,
    name: "MooveToi",
    address: {
      location: "3 RUE SAINT NICOLAS",
      coords: {
        lat: -18.412905,
        lng :45.703125
      },
      zipCode: "75012 PARIS",
    },
  },
  {
    id: 1,
    name: "Mon stade",
    address: {
      location: "1 RUE ELSA MORANTE",
      coords:{
        lat: -20.562853,
        lng: 46.450195
      },
      zipCode: "75013 PARIS",
    },
  },
  {
    id: 2,
    name: "Remise en sport",
    address: {
        location: "6 bis rue Hippolyte Maindron",
        coords: {
          lat: -22.849095,
          lng: 45.571289
        },
        zipCode: "75014 PARIS",
        type: ["Natation","Réeducation musculaire"]
    }

  }
];
