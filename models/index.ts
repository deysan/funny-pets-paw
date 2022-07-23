export type Breed = {
  id: string;
  name: string;
  image: {
    id: string;
    url: string;
  };
};

export type Category = {
  id: number;
  name: string;
};

export type Fact = {
  id: string;
  text: string;
  language_code: string;
  breed_id: string;
};

export type Favorite = {
  id: string;
  image_id: string;
  sub_id: string;
  create_at: string;
};

export type Image = {
  id: string;
  url: string;
  breeds: {
    id: string | undefined;
    name: string | undefined;
  }[];
};

export type Params = {
  breed_ids: string;
  limit: number;
  order: string;
  mime_types: string;
};
