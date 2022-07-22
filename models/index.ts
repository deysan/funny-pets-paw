export type Breed = {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
  weight_imperial: string;
  country_code: string;
  reference_image_id: string;
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
};

export type ImageFull = {};
export type ImageShort = {};
export type ImageAnalysis = {};
export type Source = {};
export type Sponsor = {};
export type Vote = {};
