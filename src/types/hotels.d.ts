interface IImage {
  url: string;
  alt?: string;
}

export interface IOccupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}

export interface IRoom {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: IOccupancy;
  disabledAccess: boolean;
  bedConfiguration: string;
  images: IImage[];
  facilities: IRoomFacility[];
}

export interface IRoomResponse {
  rooms: IRoom[];
  ratePlans: unknown[];
}

export interface Rooms {
  rooms: IRoom[];
}
interface IRoomFacility {
  code: string;
  name: string;
}

export interface IHotel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: IRoomFacility[];
  images: IImage[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  rooms: IRoom[];
  position: {
    latitude: number;
    longitude: number;
    timezone: string;
  };
}

export type HotelFilter = 'maxAdults' | 'maxChildren' | 'stars';
