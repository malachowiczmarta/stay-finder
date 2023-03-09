import React from 'react';
import { IHotel } from 'src/types/hotels';

interface Props {
  data: IHotel;
}

const AddressWithCheckInHours: React.FC<Props> = ({ data }) => {
  const { address1, address2, checkInHours, checkInMinutes, country } = data;

  return (
    <p className="text-gray-700">
      <span className="font-bold">{address1},</span> {address2}, {country}. Check-in: {checkInHours}
      :{checkInMinutes}.
    </p>
  );
};

export default AddressWithCheckInHours;
