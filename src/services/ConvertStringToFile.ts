export interface businessContent {
  station: {
    type: "Point";
    coordinates: [];
  };
  businessName: string;
  Country: string;
  category: string;
  status: string;
  userId: string;
  media: [];
  description: string;
  address: string;
  workTime: {
    startTime: string | undefined;
    endTime: string | undefined;
  };
  _id: string;
  messages: [];
  reviews: [];
}
