export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  FormFieldsDynamicZoneInput: any;
  JSON: any;
  Upload: any;
};

export type About = {
  __typename?: 'About';
  about?: Maybe<ComponentCommonDetail>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutDetail = {
  __typename?: 'AboutDetail';
  createdAt?: Maybe<Scalars['DateTime']>;
  detail?: Maybe<Array<Maybe<ComponentCommonDetail>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutDetailDetailArgs = {
  filters?: InputMaybe<ComponentCommonDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutDetailEntity = {
  __typename?: 'AboutDetailEntity';
  attributes?: Maybe<AboutDetail>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutDetailEntityResponse = {
  __typename?: 'AboutDetailEntityResponse';
  data?: Maybe<AboutDetailEntity>;
};

export type AboutDetailInput = {
  detail?: InputMaybe<Array<InputMaybe<ComponentCommonDetailInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutHistory = {
  __typename?: 'AboutHistory';
  button?: Maybe<Array<Maybe<ComponentCommonLink>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  history?: Maybe<Array<Maybe<ComponentCommonNumbers>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutHistoryButtonArgs = {
  filters?: InputMaybe<ComponentCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutHistoryHistoryArgs = {
  filters?: InputMaybe<ComponentCommonNumbersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutHistoryEntity = {
  __typename?: 'AboutHistoryEntity';
  attributes?: Maybe<AboutHistory>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutHistoryEntityResponse = {
  __typename?: 'AboutHistoryEntityResponse';
  data?: Maybe<AboutHistoryEntity>;
};

export type AboutHistoryInput = {
  button?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
  description?: InputMaybe<Scalars['String']>;
  history?: InputMaybe<Array<InputMaybe<ComponentCommonNumbersInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AboutInput = {
  about?: InputMaybe<ComponentCommonDetailInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AboutNumber = {
  __typename?: 'AboutNumber';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  numbers?: Maybe<Array<Maybe<ComponentCommonNumbers>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutNumberNumbersArgs = {
  filters?: InputMaybe<ComponentCommonNumbersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutNumberEntity = {
  __typename?: 'AboutNumberEntity';
  attributes?: Maybe<AboutNumber>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutNumberEntityResponse = {
  __typename?: 'AboutNumberEntityResponse';
  data?: Maybe<AboutNumberEntity>;
};

export type AboutNumberInput = {
  description?: InputMaybe<Scalars['String']>;
  numbers?: InputMaybe<Array<InputMaybe<ComponentCommonNumbersInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AboutTsc = {
  __typename?: 'AboutTsc';
  button?: Maybe<ComponentCommonLink>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<ComponentCommonDetail>>>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutTscDetailsArgs = {
  filters?: InputMaybe<ComponentCommonDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutTscEntity = {
  __typename?: 'AboutTscEntity';
  attributes?: Maybe<AboutTsc>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutTscEntityResponse = {
  __typename?: 'AboutTscEntityResponse';
  data?: Maybe<AboutTscEntity>;
};

export type AboutTscInput = {
  button?: InputMaybe<ComponentCommonLinkInput>;
  description?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Array<InputMaybe<ComponentCommonDetailInput>>>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AboutWorkValue = {
  __typename?: 'AboutWorkValue';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  values?: Maybe<Array<Maybe<ComponentCommonDetail>>>;
};

export type AboutWorkValueValuesArgs = {
  filters?: InputMaybe<ComponentCommonDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutWorkValueEntity = {
  __typename?: 'AboutWorkValueEntity';
  attributes?: Maybe<AboutWorkValue>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutWorkValueEntityResponse = {
  __typename?: 'AboutWorkValueEntityResponse';
  data?: Maybe<AboutWorkValueEntity>;
};

export type AboutWorkValueInput = {
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<ComponentCommonDetailInput>>>;
};

export type Banner = {
  __typename?: 'Banner';
  buttons?: Maybe<Array<Maybe<ComponentCommonLink>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BannerButtonsArgs = {
  filters?: InputMaybe<ComponentCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BannerEntity = {
  __typename?: 'BannerEntity';
  attributes?: Maybe<Banner>;
  id?: Maybe<Scalars['ID']>;
};

export type BannerEntityResponse = {
  __typename?: 'BannerEntityResponse';
  data?: Maybe<BannerEntity>;
};

export type BannerEntityResponseCollection = {
  __typename?: 'BannerEntityResponseCollection';
  data: Array<BannerEntity>;
  meta: ResponseCollectionMeta;
};

export type BannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  buttons?: InputMaybe<ComponentCommonLinkFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BannerHeader = {
  __typename?: 'BannerHeader';
  bannerHeader?: Maybe<Array<Maybe<ComponentCommonHeaders>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BannerHeaderBannerHeaderArgs = {
  filters?: InputMaybe<ComponentCommonHeadersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BannerHeaderEntity = {
  __typename?: 'BannerHeaderEntity';
  attributes?: Maybe<BannerHeader>;
  id?: Maybe<Scalars['ID']>;
};

export type BannerHeaderEntityResponse = {
  __typename?: 'BannerHeaderEntityResponse';
  data?: Maybe<BannerHeaderEntity>;
};

export type BannerHeaderInput = {
  bannerHeader?: InputMaybe<Array<InputMaybe<ComponentCommonHeadersInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BannerInput = {
  buttons?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BannerPage = {
  __typename?: 'BannerPage';
  bannerPage?: Maybe<ComponentBannerBanner>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BannerPageEntity = {
  __typename?: 'BannerPageEntity';
  attributes?: Maybe<BannerPage>;
  id?: Maybe<Scalars['ID']>;
};

export type BannerPageEntityResponse = {
  __typename?: 'BannerPageEntityResponse';
  data?: Maybe<BannerPageEntity>;
};

export type BannerPageInput = {
  bannerPage?: InputMaybe<ComponentBannerBannerInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Blog = {
  __typename?: 'Blog';
  author?: Maybe<TeamEntityResponse>;
  bannerImage?: Maybe<UploadFileEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  readTime?: Maybe<Scalars['Int']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection';
  data: Array<BlogEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  author?: InputMaybe<TeamFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  readTime?: InputMaybe<IntFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  author?: InputMaybe<Scalars['ID']>;
  bannerImage?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  readTime?: InputMaybe<Scalars['Int']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Brand = {
  __typename?: 'Brand';
  createdAt?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  link?: Maybe<ComponentCommonLink>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BrandImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  attributes?: Maybe<Brand>;
  id?: Maybe<Scalars['ID']>;
};

export type BrandEntityResponse = {
  __typename?: 'BrandEntityResponse';
  data?: Maybe<BrandEntity>;
};

export type BrandInput = {
  heading?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  link?: InputMaybe<ComponentCommonLinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Category = {
  __typename?: 'Category';
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  image?: Maybe<UploadFileRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  courses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentBannerBanner = {
  __typename?: 'ComponentBannerBanner';
  button?: Maybe<ComponentButtonButton>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentBannerBannerInput = {
  button?: InputMaybe<ComponentButtonButtonInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
};

export type ComponentButtonButton = {
  __typename?: 'ComponentButtonButton';
  btnImage?: Maybe<UploadFileEntityResponse>;
  btnTxt?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentButtonButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentButtonButtonFiltersInput>>>;
  btnTxt?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentButtonButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentButtonButtonFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentButtonButtonInput = {
  btnImage?: InputMaybe<Scalars['ID']>;
  btnTxt?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonAdress = {
  __typename?: 'ComponentCommonAdress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  pincode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ComponentCommonAdressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonAdressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  latitude?: InputMaybe<FloatFilterInput>;
  line1?: InputMaybe<StringFilterInput>;
  line2?: InputMaybe<StringFilterInput>;
  longitude?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentCommonAdressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonAdressFiltersInput>>>;
  pincode?: InputMaybe<StringFilterInput>;
  state?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonAdressInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  latitude?: InputMaybe<Scalars['Float']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  pincode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonDetail = {
  __typename?: 'ComponentCommonDetail';
  button?: Maybe<ComponentButtonButton>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCommonDetailFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonDetailFiltersInput>>>;
  button?: InputMaybe<ComponentButtonButtonFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonDetailFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonDetailFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonDetailInput = {
  button?: InputMaybe<ComponentButtonButtonInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonHeaders = {
  __typename?: 'ComponentCommonHeaders';
  SEO?: Maybe<ComponentCommonSeo>;
  button?: Maybe<ComponentCommonLink>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCommonHeadersFiltersInput = {
  SEO?: InputMaybe<ComponentCommonSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentCommonHeadersFiltersInput>>>;
  button?: InputMaybe<ComponentCommonLinkFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonHeadersFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonHeadersFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonHeadersInput = {
  SEO?: InputMaybe<ComponentCommonSeoInput>;
  button?: InputMaybe<ComponentCommonLinkInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonInfo = {
  __typename?: 'ComponentCommonInfo';
  id: Scalars['ID'];
  title: Scalars['String'];
  value: Scalars['String'];
};

export type ComponentCommonInfoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonInfoFiltersInput>>>;
  not?: InputMaybe<ComponentCommonInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonInfoFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonInfoInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonLink = {
  __typename?: 'ComponentCommonLink';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentCommonLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonLinkFiltersInput>>>;
  not?: InputMaybe<ComponentCommonLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonLinkInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonNumbers = {
  __typename?: 'ComponentCommonNumbers';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCommonNumbersFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonNumbersFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonNumbersFiltersInput>;
  number?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonNumbersFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonNumbersInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  number?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonPrice = {
  __typename?: 'ComponentCommonPrice';
  currency: Enum_Componentcommonprice_Currency;
  description?: Maybe<Scalars['String']>;
  format: Enum_Componentcommonprice_Format;
  id: Scalars['ID'];
  price: Scalars['Float'];
  unit?: Maybe<Enum_Componentcommonprice_Unit>;
};

export type ComponentCommonPriceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonPriceFiltersInput>>>;
  currency?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  format?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonPriceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonPriceFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  unit?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonPriceInput = {
  currency?: InputMaybe<Enum_Componentcommonprice_Currency>;
  description?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Enum_Componentcommonprice_Format>;
  id?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Enum_Componentcommonprice_Unit>;
};

export type ComponentCommonSeo = {
  __typename?: 'ComponentCommonSeo';
  description: Scalars['String'];
  id: Scalars['ID'];
  images: UploadFileRelationResponseCollection;
  keywords: Scalars['String'];
  noFollow: Scalars['Boolean'];
  noIndex: Scalars['Boolean'];
  title: Scalars['String'];
};

export type ComponentCommonSeoImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentCommonSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonSeoFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  noFollow?: InputMaybe<BooleanFilterInput>;
  noIndex?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentCommonSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonSeoFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonSeoInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  keywords?: InputMaybe<Scalars['String']>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCourseCourseFeatures = {
  __typename?: 'ComponentCourseCourseFeatures';
  icons?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ComponentCourseCourseFeaturesFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentCourseCourseFeaturesFiltersInput>>
  >;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCourseCourseFeaturesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCourseCourseFeaturesFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentCourseCourseFeaturesInput = {
  icons?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ComponentCourseCurriculam = {
  __typename?: 'ComponentCourseCurriculam';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentCourseCurriculamFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCourseCurriculamFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCourseCurriculamFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCourseCurriculamFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCourseCurriculamInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentFieldsCheckbox = {
  __typename?: 'ComponentFieldsCheckbox';
  component?: Maybe<Scalars['String']>;
  field_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  initialvalue?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<ComponentFieldsOptions>>>;
  validation?: Maybe<Array<Maybe<ComponentFieldsValidation>>>;
  wrapperClass?: Maybe<Scalars['String']>;
};

export type ComponentFieldsCheckboxOptionsArgs = {
  filters?: InputMaybe<ComponentFieldsOptionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFieldsCheckboxValidationArgs = {
  filters?: InputMaybe<ComponentFieldsValidationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFieldsMultiSelect = {
  __typename?: 'ComponentFieldsMultiSelect';
  component?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  initialvalue?: Maybe<Scalars['JSON']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<ComponentFieldsOptions>>>;
  placeholder?: Maybe<Scalars['String']>;
  validation?: Maybe<Array<Maybe<ComponentFieldsValidation>>>;
  wrapperClass?: Maybe<Scalars['String']>;
};

export type ComponentFieldsMultiSelectOptionsArgs = {
  filters?: InputMaybe<ComponentFieldsOptionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFieldsMultiSelectValidationArgs = {
  filters?: InputMaybe<ComponentFieldsValidationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFieldsOptions = {
  __typename?: 'ComponentFieldsOptions';
  id: Scalars['ID'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type ComponentFieldsOptionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFieldsOptionsFiltersInput>>>;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFieldsOptionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFieldsOptionsFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentFieldsTextInput = {
  __typename?: 'ComponentFieldsTextInput';
  autoComplete?: Maybe<Scalars['String']>;
  component?: Maybe<Enum_Componentfieldstextinput_Component>;
  field_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  initialvalue?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  rows?: Maybe<Scalars['Int']>;
  type?: Maybe<Enum_Componentfieldstextinput_Type>;
  validation?: Maybe<Array<Maybe<ComponentFieldsValidation>>>;
  wrapperClass?: Maybe<Scalars['String']>;
};

export type ComponentFieldsTextInputValidationArgs = {
  filters?: InputMaybe<ComponentFieldsValidationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFieldsValidation = {
  __typename?: 'ComponentFieldsValidation';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  validation?: Maybe<Scalars['String']>;
  validationType: Enum_Componentfieldsvalidation_Validationtype;
};

export type ComponentFieldsValidationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFieldsValidationFiltersInput>>>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFieldsValidationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFieldsValidationFiltersInput>>>;
  validation?: InputMaybe<StringFilterInput>;
  validationType?: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderHeader = {
  __typename?: 'ComponentHeaderHeader';
  button?: Maybe<ComponentButtonButton>;
  description?: Maybe<Scalars['String']>;
  heading1?: Maybe<Scalars['String']>;
  heading2?: Maybe<Scalars['String']>;
  heading3?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentHeaderHeaderInput = {
  button?: InputMaybe<ComponentButtonButtonInput>;
  description?: InputMaybe<Scalars['String']>;
  heading1?: InputMaybe<Scalars['String']>;
  heading2?: InputMaybe<Scalars['String']>;
  heading3?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentPersonalInfoCertification = {
  __typename?: 'ComponentPersonalInfoCertification';
  credentialID?: Maybe<Scalars['String']>;
  credentialURL?: Maybe<Scalars['String']>;
  expireDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  issueDate?: Maybe<Scalars['Date']>;
  issuingOrganization?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']>;
  neverExpire?: Maybe<Scalars['Boolean']>;
};

export type ComponentPersonalInfoCertificationFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoCertificationFiltersInput>>
  >;
  credentialID?: InputMaybe<StringFilterInput>;
  credentialURL?: InputMaybe<StringFilterInput>;
  expireDate?: InputMaybe<DateFilterInput>;
  issueDate?: InputMaybe<DateFilterInput>;
  issuingOrganization?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  neverExpire?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentPersonalInfoCertificationFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoCertificationFiltersInput>>
  >;
};

export type ComponentPersonalInfoCertificationInput = {
  credentialID?: InputMaybe<Scalars['String']>;
  credentialURL?: InputMaybe<Scalars['String']>;
  expireDate?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  issueDate?: InputMaybe<Scalars['Date']>;
  issuingOrganization?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  neverExpire?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentPersonalInfoEducation = {
  __typename?: 'ComponentPersonalInfoEducation';
  degree?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  extraActivity?: Maybe<Scalars['String']>;
  fieldOfStudy?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  logo?: Maybe<UploadFileEntityResponse>;
  school?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type ComponentPersonalInfoEducationFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoEducationFiltersInput>>
  >;
  degree?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  extraActivity?: InputMaybe<StringFilterInput>;
  fieldOfStudy?: InputMaybe<StringFilterInput>;
  grade?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentPersonalInfoEducationFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoEducationFiltersInput>>
  >;
  school?: InputMaybe<StringFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
};

export type ComponentPersonalInfoEducationInput = {
  degree?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  extraActivity?: InputMaybe<Scalars['String']>;
  fieldOfStudy?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  logo?: InputMaybe<Scalars['ID']>;
  school?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type ComponentPersonalInfoExperiance = {
  __typename?: 'ComponentPersonalInfoExperiance';
  ProfileHeadline?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  employeeType?: Maybe<Enum_Componentpersonalinfoexperiance_Employeetype>;
  endDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  industry?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  technologies?: Maybe<TechnologyRelationResponseCollection>;
};

export type ComponentPersonalInfoExperianceTechnologiesArgs = {
  filters?: InputMaybe<TechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPersonalInfoExperianceFiltersInput = {
  ProfileHeadline?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoExperianceFiltersInput>>
  >;
  companyName?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  employeeType?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  industry?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPersonalInfoExperianceFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoExperianceFiltersInput>>
  >;
  startDate?: InputMaybe<DateFilterInput>;
  technologies?: InputMaybe<TechnologyFiltersInput>;
};

export type ComponentPersonalInfoExperianceInput = {
  ProfileHeadline?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  employeeType?: InputMaybe<Enum_Componentpersonalinfoexperiance_Employeetype>;
  endDate?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  industry?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
  technologies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentPersonalInfoProject = {
  __typename?: 'ComponentPersonalInfoProject';
  categories?: Maybe<CategoryRelationResponseCollection>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  projectName: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  technologies?: Maybe<TechnologyRelationResponseCollection>;
};

export type ComponentPersonalInfoProjectCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPersonalInfoProjectTechnologiesArgs = {
  filters?: InputMaybe<TechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPersonalInfoProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoProjectFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPersonalInfoProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoProjectFiltersInput>>>;
  projectName?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<StringFilterInput>;
  technologies?: InputMaybe<TechnologyFiltersInput>;
};

export type ComponentPersonalInfoProjectInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  projectName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  technologies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentPersonalInfoTechnology = {
  __typename?: 'ComponentPersonalInfoTechnology';
  id: Scalars['ID'];
  proficiency: Scalars['Int'];
  technology?: Maybe<TechnologyEntityResponse>;
};

export type ComponentPersonalInfoTechnologyFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>>
  >;
  not?: InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>>
  >;
  proficiency?: InputMaybe<IntFilterInput>;
  technology?: InputMaybe<TechnologyFiltersInput>;
};

export type ComponentPersonalInfoTechnologyInput = {
  id?: InputMaybe<Scalars['ID']>;
  proficiency?: InputMaybe<Scalars['Int']>;
  technology?: InputMaybe<Scalars['ID']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String'];
  metaViewport?: Maybe<Scalars['String']>;
  structuredData?: Maybe<Scalars['JSON']>;
};

export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
  structuredData?: InputMaybe<Scalars['JSON']>;
};

export type ComponentTeamTeam = {
  __typename?: 'ComponentTeamTeam';
  icons?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type ComponentTeamTeamIconsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTeamTeamFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTeamTeamFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTeamTeamFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTeamTeamFiltersInput>>>;
  role?: InputMaybe<StringFilterInput>;
};

export type ComponentTeamTeamInput = {
  icons?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type ComponentUserUserInfo = {
  __typename?: 'ComponentUserUserInfo';
  FirstName: Scalars['String'];
  LastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentUserUserInfoFiltersInput = {
  FirstName?: InputMaybe<StringFilterInput>;
  LastName?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentUserUserInfoFiltersInput>>>;
  not?: InputMaybe<ComponentUserUserInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUserUserInfoFiltersInput>>>;
};

export type ComponentUserUserInfoInput = {
  FirstName?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactDetail = {
  __typename?: 'ContactDetail';
  addresses?: Maybe<Array<Maybe<ComponentCommonAdress>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  map?: Maybe<UploadFileEntityResponse>;
  phoneNumber?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  socialMedia?: Maybe<Array<Maybe<ComponentCommonLink>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactDetailAddressesArgs = {
  filters?: InputMaybe<ComponentCommonAdressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactDetailSocialMediaArgs = {
  filters?: InputMaybe<ComponentCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactDetailEntity = {
  __typename?: 'ContactDetailEntity';
  attributes?: Maybe<ContactDetail>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactDetailEntityResponse = {
  __typename?: 'ContactDetailEntityResponse';
  data?: Maybe<ContactDetailEntity>;
};

export type ContactDetailInput = {
  addresses?: InputMaybe<Array<InputMaybe<ComponentCommonAdressInput>>>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<Scalars['ID']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  socialMedia?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  subject?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type Course = {
  __typename?: 'Course';
  aboutCourse?: Maybe<Scalars['String']>;
  brochure: UploadFileEntityResponse;
  category?: Maybe<CategoryEntityResponse>;
  complitionResult?: Maybe<Scalars['String']>;
  courseFeatures?: Maybe<Array<Maybe<ComponentCourseCourseFeatures>>>;
  courseVideo?: Maybe<UploadFileEntityResponse>;
  courseVideoPoster: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']>;
  curriculam?: Maybe<Array<Maybe<ComponentCourseCurriculam>>>;
  description: Scalars['String'];
  duration?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  level: Enum_Course_Level;
  price: ComponentCommonPrice;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  technologies?: Maybe<TechnologyRelationResponseCollection>;
  testimonials?: Maybe<TestimonialRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CourseCourseFeaturesArgs = {
  filters?: InputMaybe<ComponentCourseCourseFeaturesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseCurriculamArgs = {
  filters?: InputMaybe<ComponentCourseCurriculamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseTechnologiesArgs = {
  filters?: InputMaybe<TechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  attributes?: Maybe<Course>;
  id?: Maybe<Scalars['ID']>;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
  data?: Maybe<CourseEntity>;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  aboutCourse?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  complitionResult?: InputMaybe<StringFilterInput>;
  courseFeatures?: InputMaybe<ComponentCourseCourseFeaturesFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  curriculam?: InputMaybe<ComponentCourseCurriculamFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  duration?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  isFeatured?: InputMaybe<BooleanFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  price?: InputMaybe<ComponentCommonPriceFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  technologies?: InputMaybe<TechnologyFiltersInput>;
  testimonials?: InputMaybe<TestimonialFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  aboutCourse?: InputMaybe<Scalars['String']>;
  brochure?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  complitionResult?: InputMaybe<Scalars['String']>;
  courseFeatures?: InputMaybe<
    Array<InputMaybe<ComponentCourseCourseFeaturesInput>>
  >;
  courseVideo?: InputMaybe<Scalars['ID']>;
  courseVideoPoster?: InputMaybe<Scalars['ID']>;
  curriculam?: InputMaybe<Array<InputMaybe<ComponentCourseCurriculamInput>>>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Enum_Course_Level>;
  price?: InputMaybe<ComponentCommonPriceInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  technologies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  testimonials?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type CourseRelationResponseCollection = {
  __typename?: 'CourseRelationResponseCollection';
  data: Array<CourseEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentcommonprice_Currency {
  Inr = 'INR',
  Usd = 'USD',
}

export enum Enum_Componentcommonprice_Format {
  EnIn = 'en_IN',
}

export enum Enum_Componentcommonprice_Unit {
  Month = 'Month',
}

export enum Enum_Componentfieldstextinput_Component {
  TextArea = 'TextArea',
  TextInput = 'TextInput',
}

export enum Enum_Componentfieldstextinput_Type {
  Date = 'date',
  DatetimeLocal = 'datetime_local',
  Email = 'email',
  Number = 'number',
  Password = 'password',
  Tel = 'tel',
  Text = 'text',
  Url = 'url',
  Week = 'week',
}

export enum Enum_Componentfieldsvalidation_Validationtype {
  Email = 'email',
  Length = 'length',
  Max = 'max',
  Min = 'min',
  Pattern = 'pattern',
  Required = 'required',
  Tel = 'tel',
  Url = 'url',
}

export enum Enum_Componentpersonalinfoexperiance_Employeetype {
  Freelancer = 'Freelancer',
  FullTime = 'Full_Time',
  Internship = 'Internship',
  PartTime = 'Part_Time',
  SelfEmployed = 'Self_Employed',
  Trainee = 'Trainee',
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
}

export enum Enum_Course_Level {
  Beginner = 'Beginner',
  Expert = 'Expert',
  Intermediate = 'Intermediate',
  Novice = 'Novice',
}

export enum Enum_Menusmenuitem_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top',
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  category?: Maybe<CategoryEntityResponse>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  registerButtonURL?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFileEntityResponse>;
  location: ComponentCommonAdress;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  attributes?: Maybe<Event>;
  id?: Maybe<Scalars['ID']>;
};

export type EventEntityResponse = {
  __typename?: 'EventEntityResponse';
  data?: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
  __typename?: 'EventEntityResponseCollection';
  data: Array<EventEntity>;
  meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  eventEndDate?: InputMaybe<DateTimeFilterInput>;
  eventStartDate?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<ComponentCommonAdressFiltersInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
  category?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<ComponentCommonAdressInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'Faq';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqEntity = {
  __typename?: 'FaqEntity';
  attributes?: Maybe<Faq>;
  id?: Maybe<Scalars['ID']>;
};

export type FaqEntityResponse = {
  __typename?: 'FaqEntityResponse';
  data?: Maybe<FaqEntity>;
};

export type FaqEntityResponseCollection = {
  __typename?: 'FaqEntityResponseCollection';
  data: Array<FaqEntity>;
  meta: ResponseCollectionMeta;
};

export type FaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  question?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Form = {
  __typename?: 'Form';
  createdAt?: Maybe<Scalars['DateTime']>;
  fields?: Maybe<Array<Maybe<FormFieldsDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  submitURL?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FormEntity = {
  __typename?: 'FormEntity';
  attributes?: Maybe<Form>;
  id?: Maybe<Scalars['ID']>;
};

export type FormEntityResponse = {
  __typename?: 'FormEntityResponse';
  data?: Maybe<FormEntity>;
};

export type FormEntityResponseCollection = {
  __typename?: 'FormEntityResponseCollection';
  data: Array<FormEntity>;
  meta: ResponseCollectionMeta;
};

export type FormFieldsDynamicZone =
  | ComponentFieldsCheckbox
  | ComponentFieldsMultiSelect
  | ComponentFieldsTextInput
  | Error;

export type FormFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FormFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FormFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  submitURL?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FormInput = {
  fields?: InputMaybe<Array<Scalars['FormFieldsDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  submitURL?: InputMaybe<Scalars['String']>;
};

export type FunFact = {
  __typename?: 'FunFact';
  button?: Maybe<ComponentCommonLink>;
  createdAt?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Array<Maybe<ComponentCommonInfo>>>;
  image: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FunFactDetailsArgs = {
  filters?: InputMaybe<ComponentCommonInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FunFactEntity = {
  __typename?: 'FunFactEntity';
  attributes?: Maybe<FunFact>;
  id?: Maybe<Scalars['ID']>;
};

export type FunFactEntityResponse = {
  __typename?: 'FunFactEntityResponse';
  data?: Maybe<FunFactEntity>;
};

export type FunFactInput = {
  button?: InputMaybe<ComponentCommonLinkInput>;
  details?: InputMaybe<Array<InputMaybe<ComponentCommonInfoInput>>>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GenericMorph =
  | About
  | AboutDetail
  | AboutHistory
  | AboutNumber
  | AboutTsc
  | AboutWorkValue
  | Banner
  | BannerHeader
  | BannerPage
  | Blog
  | Brand
  | Category
  | ComponentBannerBanner
  | ComponentButtonButton
  | ComponentCommonAdress
  | ComponentCommonDetail
  | ComponentCommonHeaders
  | ComponentCommonInfo
  | ComponentCommonLink
  | ComponentCommonNumbers
  | ComponentCommonPrice
  | ComponentCommonSeo
  | ComponentCourseCourseFeatures
  | ComponentCourseCurriculam
  | ComponentFieldsCheckbox
  | ComponentFieldsMultiSelect
  | ComponentFieldsOptions
  | ComponentFieldsTextInput
  | ComponentFieldsValidation
  | ComponentHeaderHeader
  | ComponentPersonalInfoCertification
  | ComponentPersonalInfoEducation
  | ComponentPersonalInfoExperiance
  | ComponentPersonalInfoProject
  | ComponentPersonalInfoTechnology
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | ComponentTeamTeam
  | ComponentUserUserInfo
  | Contact
  | ContactDetail
  | Course
  | Event
  | Faq
  | Form
  | FunFact
  | History
  | HomeBanner
  | HomeBlog
  | HomeCategory
  | HomeCourse
  | HomeGrowCareer
  | HomeHeader
  | HomeLeader
  | HomeTestimonial
  | I18NLocale
  | MenusMenu
  | MenusMenuItem
  | NewsHeader
  | Newsletter
  | Perk
  | Service
  | Team
  | TeamMember
  | Technology
  | Testimonial
  | Trainer
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type History = {
  __typename?: 'History';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type HistoryEntity = {
  __typename?: 'HistoryEntity';
  attributes?: Maybe<History>;
  id?: Maybe<Scalars['ID']>;
};

export type HistoryEntityResponse = {
  __typename?: 'HistoryEntityResponse';
  data?: Maybe<HistoryEntity>;
};

export type HistoryEntityResponseCollection = {
  __typename?: 'HistoryEntityResponseCollection';
  data: Array<HistoryEntity>;
  meta: ResponseCollectionMeta;
};

export type HistoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HistoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HistoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HistoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  year?: InputMaybe<IntFilterInput>;
};

export type HistoryInput = {
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type HomeBanner = {
  __typename?: 'HomeBanner';
  buttons?: Maybe<Array<Maybe<ComponentCommonLink>>>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fromDate?: Maybe<Scalars['Date']>;
  isActive: Scalars['Boolean'];
  isStatic: Scalars['Boolean'];
  media?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  toDate?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeBannerButtonsArgs = {
  filters?: InputMaybe<ComponentCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeBannerEntity = {
  __typename?: 'HomeBannerEntity';
  attributes?: Maybe<HomeBanner>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeBannerEntityResponse = {
  __typename?: 'HomeBannerEntityResponse';
  data?: Maybe<HomeBannerEntity>;
};

export type HomeBannerEntityResponseCollection = {
  __typename?: 'HomeBannerEntityResponseCollection';
  data: Array<HomeBannerEntity>;
  meta: ResponseCollectionMeta;
};

export type HomeBannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HomeBannerFiltersInput>>>;
  buttons?: InputMaybe<ComponentCommonLinkFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fromDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  isStatic?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<HomeBannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HomeBannerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  toDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HomeBannerInput = {
  buttons?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
  content?: InputMaybe<Scalars['String']>;
  fromDate?: InputMaybe<Scalars['Date']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isStatic?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  toDate?: InputMaybe<Scalars['Date']>;
};

export type HomeBlog = {
  __typename?: 'HomeBlog';
  button?: Maybe<ComponentCommonLink>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeBlogEntity = {
  __typename?: 'HomeBlogEntity';
  attributes?: Maybe<HomeBlog>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeBlogEntityResponse = {
  __typename?: 'HomeBlogEntityResponse';
  data?: Maybe<HomeBlogEntity>;
};

export type HomeBlogInput = {
  button?: InputMaybe<ComponentCommonLinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HomeCategory = {
  __typename?: 'HomeCategory';
  button?: Maybe<Array<Maybe<ComponentCommonLink>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeCategoryButtonArgs = {
  filters?: InputMaybe<ComponentCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeCategoryEntity = {
  __typename?: 'HomeCategoryEntity';
  attributes?: Maybe<HomeCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeCategoryEntityResponse = {
  __typename?: 'HomeCategoryEntityResponse';
  data?: Maybe<HomeCategoryEntity>;
};

export type HomeCategoryInput = {
  button?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HomeCourse = {
  __typename?: 'HomeCourse';
  button?: Maybe<ComponentCommonLink>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeCourseEntity = {
  __typename?: 'HomeCourseEntity';
  attributes?: Maybe<HomeCourse>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeCourseEntityResponse = {
  __typename?: 'HomeCourseEntityResponse';
  data?: Maybe<HomeCourseEntity>;
};

export type HomeCourseInput = {
  button?: InputMaybe<ComponentCommonLinkInput>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HomeGrowCareer = {
  __typename?: 'HomeGrowCareer';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<ComponentCommonDetail>>>;
  link?: Maybe<ComponentCommonLink>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeGrowCareerDetailsArgs = {
  filters?: InputMaybe<ComponentCommonDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeGrowCareerEntity = {
  __typename?: 'HomeGrowCareerEntity';
  attributes?: Maybe<HomeGrowCareer>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeGrowCareerEntityResponse = {
  __typename?: 'HomeGrowCareerEntityResponse';
  data?: Maybe<HomeGrowCareerEntity>;
};

export type HomeGrowCareerInput = {
  description?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Array<InputMaybe<ComponentCommonDetailInput>>>;
  link?: InputMaybe<ComponentCommonLinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HomeHeader = {
  __typename?: 'HomeHeader';
  createdAt?: Maybe<Scalars['DateTime']>;
  homeHeader?: Maybe<ComponentHeaderHeader>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeHeaderEntity = {
  __typename?: 'HomeHeaderEntity';
  attributes?: Maybe<HomeHeader>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeHeaderEntityResponse = {
  __typename?: 'HomeHeaderEntityResponse';
  data?: Maybe<HomeHeaderEntity>;
};

export type HomeHeaderInput = {
  homeHeader?: InputMaybe<ComponentHeaderHeaderInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HomeLeader = {
  __typename?: 'HomeLeader';
  btns?: Maybe<Array<Maybe<ComponentCommonLink>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  testimonial?: Maybe<TestimonialEntityResponse>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeLeaderBtnsArgs = {
  filters?: InputMaybe<ComponentCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeLeaderEntity = {
  __typename?: 'HomeLeaderEntity';
  attributes?: Maybe<HomeLeader>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeLeaderEntityResponse = {
  __typename?: 'HomeLeaderEntityResponse';
  data?: Maybe<HomeLeaderEntity>;
};

export type HomeLeaderInput = {
  btns?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  testimonial?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HomeTestimonial = {
  __typename?: 'HomeTestimonial';
  btn?: Maybe<ComponentCommonLink>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  numbers?: Maybe<Array<Maybe<ComponentCommonDetail>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeTestimonialNumbersArgs = {
  filters?: InputMaybe<ComponentCommonDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeTestimonialEntity = {
  __typename?: 'HomeTestimonialEntity';
  attributes?: Maybe<HomeTestimonial>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeTestimonialEntityResponse = {
  __typename?: 'HomeTestimonialEntityResponse';
  data?: Maybe<HomeTestimonialEntity>;
};

export type HomeTestimonialInput = {
  btn?: InputMaybe<ComponentCommonLinkInput>;
  description?: InputMaybe<Scalars['String']>;
  numbers?: InputMaybe<Array<InputMaybe<ComponentCommonDetailInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type MenusMenu = {
  __typename?: 'MenusMenu';
  createdAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<MenusMenuItemRelationResponseCollection>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenusMenuEntity = {
  __typename?: 'MenusMenuEntity';
  attributes?: Maybe<MenusMenu>;
  id?: Maybe<Scalars['ID']>;
};

export type MenusMenuEntityResponse = {
  __typename?: 'MenusMenuEntityResponse';
  data?: Maybe<MenusMenuEntity>;
};

export type MenusMenuEntityResponseCollection = {
  __typename?: 'MenusMenuEntityResponseCollection';
  data: Array<MenusMenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<MenusMenuItemFiltersInput>;
  not?: InputMaybe<MenusMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenusMenuInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MenusMenuItem = {
  __typename?: 'MenusMenuItem';
  createdAt?: Maybe<Scalars['DateTime']>;
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<MenusMenuItemEntityResponse>;
  root_menu: MenusMenuEntityResponse;
  target?: Maybe<Enum_Menusmenuitem_Target>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type MenusMenuItemEntity = {
  __typename?: 'MenusMenuItemEntity';
  attributes?: Maybe<MenusMenuItem>;
  id?: Maybe<Scalars['ID']>;
};

export type MenusMenuItemEntityResponse = {
  __typename?: 'MenusMenuItemEntityResponse';
  data?: Maybe<MenusMenuItemEntity>;
};

export type MenusMenuItemEntityResponseCollection = {
  __typename?: 'MenusMenuItemEntityResponseCollection';
  data: Array<MenusMenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MenusMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<MenusMenuItemFiltersInput>;
  root_menu?: InputMaybe<MenusMenuFiltersInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type MenusMenuItemInput = {
  order?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  root_menu?: InputMaybe<Scalars['ID']>;
  target?: InputMaybe<Enum_Menusmenuitem_Target>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MenusMenuItemRelationResponseCollection = {
  __typename?: 'MenusMenuItemRelationResponseCollection';
  data: Array<MenusMenuItemEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBanner?: Maybe<BannerEntityResponse>;
  createBlog?: Maybe<BlogEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  createFaq?: Maybe<FaqEntityResponse>;
  createForm?: Maybe<FormEntityResponse>;
  createHistory?: Maybe<HistoryEntityResponse>;
  createHomeBanner?: Maybe<HomeBannerEntityResponse>;
  createMenusMenu?: Maybe<MenusMenuEntityResponse>;
  createMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  createNewsletter?: Maybe<NewsletterEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createTeam?: Maybe<TeamEntityResponse>;
  createTeamMember?: Maybe<TeamMemberEntityResponse>;
  createTechnology?: Maybe<TechnologyEntityResponse>;
  createTestimonial?: Maybe<TestimonialEntityResponse>;
  createTrainer?: Maybe<TrainerEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteAboutDetail?: Maybe<AboutDetailEntityResponse>;
  deleteAboutHistory?: Maybe<AboutHistoryEntityResponse>;
  deleteAboutNumber?: Maybe<AboutNumberEntityResponse>;
  deleteAboutTsc?: Maybe<AboutTscEntityResponse>;
  deleteAboutWorkValue?: Maybe<AboutWorkValueEntityResponse>;
  deleteBanner?: Maybe<BannerEntityResponse>;
  deleteBannerHeader?: Maybe<BannerHeaderEntityResponse>;
  deleteBannerPage?: Maybe<BannerPageEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteBrand?: Maybe<BrandEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteContactDetail?: Maybe<ContactDetailEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteFaq?: Maybe<FaqEntityResponse>;
  deleteForm?: Maybe<FormEntityResponse>;
  deleteFunFact?: Maybe<FunFactEntityResponse>;
  deleteHistory?: Maybe<HistoryEntityResponse>;
  deleteHomeBanner?: Maybe<HomeBannerEntityResponse>;
  deleteHomeBlog?: Maybe<HomeBlogEntityResponse>;
  deleteHomeCategory?: Maybe<HomeCategoryEntityResponse>;
  deleteHomeCourse?: Maybe<HomeCourseEntityResponse>;
  deleteHomeGrowCareer?: Maybe<HomeGrowCareerEntityResponse>;
  deleteHomeHeader?: Maybe<HomeHeaderEntityResponse>;
  deleteHomeLeader?: Maybe<HomeLeaderEntityResponse>;
  deleteHomeTestimonial?: Maybe<HomeTestimonialEntityResponse>;
  deleteMenusMenu?: Maybe<MenusMenuEntityResponse>;
  deleteMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  deleteNewsHeader?: Maybe<NewsHeaderEntityResponse>;
  deleteNewsletter?: Maybe<NewsletterEntityResponse>;
  deletePerk?: Maybe<PerkEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteTeam?: Maybe<TeamEntityResponse>;
  deleteTeamMember?: Maybe<TeamMemberEntityResponse>;
  deleteTechnology?: Maybe<TechnologyEntityResponse>;
  deleteTestimonial?: Maybe<TestimonialEntityResponse>;
  deleteTrainer?: Maybe<TrainerEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateAboutDetail?: Maybe<AboutDetailEntityResponse>;
  updateAboutHistory?: Maybe<AboutHistoryEntityResponse>;
  updateAboutNumber?: Maybe<AboutNumberEntityResponse>;
  updateAboutTsc?: Maybe<AboutTscEntityResponse>;
  updateAboutWorkValue?: Maybe<AboutWorkValueEntityResponse>;
  updateBanner?: Maybe<BannerEntityResponse>;
  updateBannerHeader?: Maybe<BannerHeaderEntityResponse>;
  updateBannerPage?: Maybe<BannerPageEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateBrand?: Maybe<BrandEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateContactDetail?: Maybe<ContactDetailEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateFaq?: Maybe<FaqEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateForm?: Maybe<FormEntityResponse>;
  updateFunFact?: Maybe<FunFactEntityResponse>;
  updateHistory?: Maybe<HistoryEntityResponse>;
  updateHomeBanner?: Maybe<HomeBannerEntityResponse>;
  updateHomeBlog?: Maybe<HomeBlogEntityResponse>;
  updateHomeCategory?: Maybe<HomeCategoryEntityResponse>;
  updateHomeCourse?: Maybe<HomeCourseEntityResponse>;
  updateHomeGrowCareer?: Maybe<HomeGrowCareerEntityResponse>;
  updateHomeHeader?: Maybe<HomeHeaderEntityResponse>;
  updateHomeLeader?: Maybe<HomeLeaderEntityResponse>;
  updateHomeTestimonial?: Maybe<HomeTestimonialEntityResponse>;
  updateMenusMenu?: Maybe<MenusMenuEntityResponse>;
  updateMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  updateNewsHeader?: Maybe<NewsHeaderEntityResponse>;
  updateNewsletter?: Maybe<NewsletterEntityResponse>;
  updatePerk?: Maybe<PerkEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateTeam?: Maybe<TeamEntityResponse>;
  updateTeamMember?: Maybe<TeamMemberEntityResponse>;
  updateTechnology?: Maybe<TechnologyEntityResponse>;
  updateTestimonial?: Maybe<TestimonialEntityResponse>;
  updateTrainer?: Maybe<TrainerEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationCreateBannerArgs = {
  data: BannerInput;
};

export type MutationCreateBlogArgs = {
  data: BlogInput;
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};

export type MutationCreateContactArgs = {
  data: ContactInput;
};

export type MutationCreateCourseArgs = {
  data: CourseInput;
};

export type MutationCreateEventArgs = {
  data: EventInput;
};

export type MutationCreateFaqArgs = {
  data: FaqInput;
};

export type MutationCreateFormArgs = {
  data: FormInput;
};

export type MutationCreateHistoryArgs = {
  data: HistoryInput;
};

export type MutationCreateHomeBannerArgs = {
  data: HomeBannerInput;
};

export type MutationCreateMenusMenuArgs = {
  data: MenusMenuInput;
};

export type MutationCreateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
};

export type MutationCreateNewsletterArgs = {
  data: NewsletterInput;
};

export type MutationCreateServiceArgs = {
  data: ServiceInput;
};

export type MutationCreateTeamArgs = {
  data: TeamInput;
};

export type MutationCreateTeamMemberArgs = {
  data: TeamMemberInput;
};

export type MutationCreateTechnologyArgs = {
  data: TechnologyInput;
};

export type MutationCreateTestimonialArgs = {
  data: TestimonialInput;
};

export type MutationCreateTrainerArgs = {
  data: TrainerInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteBannerArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteBlogArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteFaqArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteFormArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteHistoryArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteHomeBannerArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteMenusMenuArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteMenusMenuItemArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteNewsletterArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteServiceArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTeamArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTeamMemberArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTechnologyArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTestimonialArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTrainerArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateAboutArgs = {
  data: AboutInput;
};

export type MutationUpdateAboutDetailArgs = {
  data: AboutDetailInput;
};

export type MutationUpdateAboutHistoryArgs = {
  data: AboutHistoryInput;
};

export type MutationUpdateAboutNumberArgs = {
  data: AboutNumberInput;
};

export type MutationUpdateAboutTscArgs = {
  data: AboutTscInput;
};

export type MutationUpdateAboutWorkValueArgs = {
  data: AboutWorkValueInput;
};

export type MutationUpdateBannerArgs = {
  data: BannerInput;
  id: Scalars['ID'];
};

export type MutationUpdateBannerHeaderArgs = {
  data: BannerHeaderInput;
};

export type MutationUpdateBannerPageArgs = {
  data: BannerPageInput;
};

export type MutationUpdateBlogArgs = {
  data: BlogInput;
  id: Scalars['ID'];
};

export type MutationUpdateBrandArgs = {
  data: BrandInput;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};

export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
};

export type MutationUpdateContactDetailArgs = {
  data: ContactDetailInput;
};

export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID'];
};

export type MutationUpdateEventArgs = {
  data: EventInput;
  id: Scalars['ID'];
};

export type MutationUpdateFaqArgs = {
  data: FaqInput;
  id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateFormArgs = {
  data: FormInput;
  id: Scalars['ID'];
};

export type MutationUpdateFunFactArgs = {
  data: FunFactInput;
};

export type MutationUpdateHistoryArgs = {
  data: HistoryInput;
  id: Scalars['ID'];
};

export type MutationUpdateHomeBannerArgs = {
  data: HomeBannerInput;
  id: Scalars['ID'];
};

export type MutationUpdateHomeBlogArgs = {
  data: HomeBlogInput;
};

export type MutationUpdateHomeCategoryArgs = {
  data: HomeCategoryInput;
};

export type MutationUpdateHomeCourseArgs = {
  data: HomeCourseInput;
};

export type MutationUpdateHomeGrowCareerArgs = {
  data: HomeGrowCareerInput;
};

export type MutationUpdateHomeHeaderArgs = {
  data: HomeHeaderInput;
};

export type MutationUpdateHomeLeaderArgs = {
  data: HomeLeaderInput;
};

export type MutationUpdateHomeTestimonialArgs = {
  data: HomeTestimonialInput;
};

export type MutationUpdateMenusMenuArgs = {
  data: MenusMenuInput;
  id: Scalars['ID'];
};

export type MutationUpdateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
  id: Scalars['ID'];
};

export type MutationUpdateNewsHeaderArgs = {
  data: NewsHeaderInput;
};

export type MutationUpdateNewsletterArgs = {
  data: NewsletterInput;
  id: Scalars['ID'];
};

export type MutationUpdatePerkArgs = {
  data: PerkInput;
};

export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID'];
};

export type MutationUpdateTeamArgs = {
  data: TeamInput;
  id: Scalars['ID'];
};

export type MutationUpdateTeamMemberArgs = {
  data: TeamMemberInput;
  id: Scalars['ID'];
};

export type MutationUpdateTechnologyArgs = {
  data: TechnologyInput;
  id: Scalars['ID'];
};

export type MutationUpdateTestimonialArgs = {
  data: TestimonialInput;
  id: Scalars['ID'];
};

export type MutationUpdateTrainerArgs = {
  data: TrainerInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NewsHeader = {
  __typename?: 'NewsHeader';
  NewsHeader?: Maybe<ComponentHeaderHeader>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NewsHeaderEntity = {
  __typename?: 'NewsHeaderEntity';
  attributes?: Maybe<NewsHeader>;
  id?: Maybe<Scalars['ID']>;
};

export type NewsHeaderEntityResponse = {
  __typename?: 'NewsHeaderEntityResponse';
  data?: Maybe<NewsHeaderEntity>;
};

export type NewsHeaderInput = {
  NewsHeader?: InputMaybe<ComponentHeaderHeaderInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Newsletter = {
  __typename?: 'Newsletter';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NewsletterEntity = {
  __typename?: 'NewsletterEntity';
  attributes?: Maybe<Newsletter>;
  id?: Maybe<Scalars['ID']>;
};

export type NewsletterEntityResponse = {
  __typename?: 'NewsletterEntityResponse';
  data?: Maybe<NewsletterEntity>;
};

export type NewsletterEntityResponseCollection = {
  __typename?: 'NewsletterEntityResponseCollection';
  data: Array<NewsletterEntity>;
  meta: ResponseCollectionMeta;
};

export type NewsletterFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewsletterFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NewsletterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsletterFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NewsletterInput = {
  email?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Perk = {
  __typename?: 'Perk';
  benifits?: Maybe<Array<Maybe<ComponentCommonDetail>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PerkBenifitsArgs = {
  filters?: InputMaybe<ComponentCommonDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PerkEntity = {
  __typename?: 'PerkEntity';
  attributes?: Maybe<Perk>;
  id?: Maybe<Scalars['ID']>;
};

export type PerkEntityResponse = {
  __typename?: 'PerkEntityResponse';
  data?: Maybe<PerkEntity>;
};

export type PerkInput = {
  benifits?: InputMaybe<Array<InputMaybe<ComponentCommonDetailInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  aboutDetail?: Maybe<AboutDetailEntityResponse>;
  aboutHistory?: Maybe<AboutHistoryEntityResponse>;
  aboutNumber?: Maybe<AboutNumberEntityResponse>;
  aboutTsc?: Maybe<AboutTscEntityResponse>;
  aboutWorkValue?: Maybe<AboutWorkValueEntityResponse>;
  banner?: Maybe<BannerEntityResponse>;
  bannerHeader?: Maybe<BannerHeaderEntityResponse>;
  bannerPage?: Maybe<BannerPageEntityResponse>;
  banners?: Maybe<BannerEntityResponseCollection>;
  blog?: Maybe<BlogEntityResponse>;
  blogs?: Maybe<BlogEntityResponseCollection>;
  brand?: Maybe<BrandEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  contactDetail?: Maybe<ContactDetailEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courses?: Maybe<CourseEntityResponseCollection>;
  event?: Maybe<EventEntityResponse>;
  events?: Maybe<EventEntityResponseCollection>;
  faq?: Maybe<FaqEntityResponse>;
  faqs?: Maybe<FaqEntityResponseCollection>;
  form?: Maybe<FormEntityResponse>;
  forms?: Maybe<FormEntityResponseCollection>;
  funFact?: Maybe<FunFactEntityResponse>;
  histories?: Maybe<HistoryEntityResponseCollection>;
  history?: Maybe<HistoryEntityResponse>;
  homeBanner?: Maybe<HomeBannerEntityResponse>;
  homeBanners?: Maybe<HomeBannerEntityResponseCollection>;
  homeBlog?: Maybe<HomeBlogEntityResponse>;
  homeCategory?: Maybe<HomeCategoryEntityResponse>;
  homeCourse?: Maybe<HomeCourseEntityResponse>;
  homeGrowCareer?: Maybe<HomeGrowCareerEntityResponse>;
  homeHeader?: Maybe<HomeHeaderEntityResponse>;
  homeLeader?: Maybe<HomeLeaderEntityResponse>;
  homeTestimonial?: Maybe<HomeTestimonialEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menusMenu?: Maybe<MenusMenuEntityResponse>;
  menusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  menusMenuItems?: Maybe<MenusMenuItemEntityResponseCollection>;
  menusMenus?: Maybe<MenusMenuEntityResponseCollection>;
  newsHeader?: Maybe<NewsHeaderEntityResponse>;
  newsletter?: Maybe<NewsletterEntityResponse>;
  newsletters?: Maybe<NewsletterEntityResponseCollection>;
  perk?: Maybe<PerkEntityResponse>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  team?: Maybe<TeamEntityResponse>;
  teamMember?: Maybe<TeamMemberEntityResponse>;
  teamMembers?: Maybe<TeamMemberEntityResponseCollection>;
  teams?: Maybe<TeamEntityResponseCollection>;
  technologies?: Maybe<TechnologyEntityResponseCollection>;
  technology?: Maybe<TechnologyEntityResponse>;
  testimonial?: Maybe<TestimonialEntityResponse>;
  testimonials?: Maybe<TestimonialEntityResponseCollection>;
  trainer?: Maybe<TrainerEntityResponse>;
  trainers?: Maybe<TrainerEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryAboutArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryAboutDetailArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryAboutHistoryArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryAboutNumberArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryAboutTscArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryAboutWorkValueArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryBannerArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug: Scalars['String'];
};

export type QueryBannerHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryBannerPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryBannersArgs = {
  filters?: InputMaybe<BannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug: Scalars['String'];
};

export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryBrandArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryContactDetailArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug: Scalars['String'];
};

export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryFormArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryFormsArgs = {
  filters?: InputMaybe<FormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryFunFactArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryHistoriesArgs = {
  filters?: InputMaybe<HistoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryHistoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryHomeBannerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryHomeBannersArgs = {
  filters?: InputMaybe<HomeBannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryHomeBlogArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryHomeCategoryArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryHomeCourseArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryHomeGrowCareerArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryHomeHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryHomeLeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryHomeTestimonialArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryMenusMenuArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryMenusMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryMenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryMenusMenusArgs = {
  filters?: InputMaybe<MenusMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryNewsHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryNewsletterArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryNewslettersArgs = {
  filters?: InputMaybe<NewsletterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryPerkArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryTeamMemberArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryTeamMembersArgs = {
  filters?: InputMaybe<TeamMemberFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTeamsArgs = {
  filters?: InputMaybe<TeamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTechnologiesArgs = {
  filters?: InputMaybe<TechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTechnologyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryTestimonialArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTrainerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryTrainersArgs = {
  filters?: InputMaybe<TrainerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  link?: Maybe<ComponentCommonLink>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  data: Array<ServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<ComponentCommonLinkFiltersInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<ComponentCommonLinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  about: Scalars['String'];
  avatar: UploadFileEntityResponse;
  certification?: Maybe<Array<Maybe<ComponentPersonalInfoCertification>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  education?: Maybe<Array<Maybe<ComponentPersonalInfoEducation>>>;
  experience?: Maybe<Array<Maybe<ComponentPersonalInfoExperiance>>>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  projects?: Maybe<Array<Maybe<ComponentPersonalInfoProject>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  resume: UploadFileEntityResponse;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  technology?: Maybe<Array<Maybe<ComponentPersonalInfoTechnology>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCertificationArgs = {
  filters?: InputMaybe<ComponentPersonalInfoCertificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeamEducationArgs = {
  filters?: InputMaybe<ComponentPersonalInfoEducationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeamExperienceArgs = {
  filters?: InputMaybe<ComponentPersonalInfoExperianceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeamProjectsArgs = {
  filters?: InputMaybe<ComponentPersonalInfoProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeamTechnologyArgs = {
  filters?: InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeamEntity = {
  __typename?: 'TeamEntity';
  attributes?: Maybe<Team>;
  id?: Maybe<Scalars['ID']>;
};

export type TeamEntityResponse = {
  __typename?: 'TeamEntityResponse';
  data?: Maybe<TeamEntity>;
};

export type TeamEntityResponseCollection = {
  __typename?: 'TeamEntityResponseCollection';
  data: Array<TeamEntity>;
  meta: ResponseCollectionMeta;
};

export type TeamFiltersInput = {
  about?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TeamFiltersInput>>>;
  certification?: InputMaybe<ComponentPersonalInfoCertificationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  education?: InputMaybe<ComponentPersonalInfoEducationFiltersInput>;
  experience?: InputMaybe<ComponentPersonalInfoExperianceFiltersInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TeamFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeamFiltersInput>>>;
  projects?: InputMaybe<ComponentPersonalInfoProjectFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  technology?: InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeamInput = {
  about?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['ID']>;
  certification?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoCertificationInput>>
  >;
  education?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoEducationInput>>
  >;
  experience?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoExperianceInput>>
  >;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoProjectInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  resume?: InputMaybe<Scalars['ID']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  technology?: InputMaybe<
    Array<InputMaybe<ComponentPersonalInfoTechnologyInput>>
  >;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  team?: Maybe<Array<Maybe<ComponentTeamTeam>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamMemberTeamArgs = {
  filters?: InputMaybe<ComponentTeamTeamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeamMemberEntity = {
  __typename?: 'TeamMemberEntity';
  attributes?: Maybe<TeamMember>;
  id?: Maybe<Scalars['ID']>;
};

export type TeamMemberEntityResponse = {
  __typename?: 'TeamMemberEntityResponse';
  data?: Maybe<TeamMemberEntity>;
};

export type TeamMemberEntityResponseCollection = {
  __typename?: 'TeamMemberEntityResponseCollection';
  data: Array<TeamMemberEntity>;
  meta: ResponseCollectionMeta;
};

export type TeamMemberFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TeamMemberFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TeamMemberFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeamMemberFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  team?: InputMaybe<ComponentTeamTeamFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeamMemberInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  team?: InputMaybe<Array<InputMaybe<ComponentTeamTeamInput>>>;
};

export type Technology = {
  __typename?: 'Technology';
  createdAt?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<UploadFileEntityResponse>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TechnologyEntity = {
  __typename?: 'TechnologyEntity';
  attributes?: Maybe<Technology>;
  id?: Maybe<Scalars['ID']>;
};

export type TechnologyEntityResponse = {
  __typename?: 'TechnologyEntityResponse';
  data?: Maybe<TechnologyEntity>;
};

export type TechnologyEntityResponseCollection = {
  __typename?: 'TechnologyEntityResponseCollection';
  data: Array<TechnologyEntity>;
  meta: ResponseCollectionMeta;
};

export type TechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TechnologyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TechnologyFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TechnologyInput = {
  icon?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TechnologyRelationResponseCollection = {
  __typename?: 'TechnologyRelationResponseCollection';
  data: Array<TechnologyEntity>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  avatar?: Maybe<UploadFileEntityResponse>;
  company?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  designation?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  quote?: Maybe<Scalars['String']>;
  rating: Scalars['Int'];
  tag?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TestimonialEntity = {
  __typename?: 'TestimonialEntity';
  attributes?: Maybe<Testimonial>;
  id?: Maybe<Scalars['ID']>;
};

export type TestimonialEntityResponse = {
  __typename?: 'TestimonialEntityResponse';
  data?: Maybe<TestimonialEntity>;
};

export type TestimonialEntityResponseCollection = {
  __typename?: 'TestimonialEntityResponseCollection';
  data: Array<TestimonialEntity>;
  meta: ResponseCollectionMeta;
};

export type TestimonialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  company?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  designation?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TestimonialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quote?: InputMaybe<StringFilterInput>;
  rating?: InputMaybe<IntFilterInput>;
  tag?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TestimonialInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  company?: InputMaybe<Scalars['String']>;
  designation?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  quote?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type TestimonialRelationResponseCollection = {
  __typename?: 'TestimonialRelationResponseCollection';
  data: Array<TestimonialEntity>;
};

export type Trainer = {
  __typename?: 'Trainer';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  trainerBasicDetails: ComponentUserUserInfo;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TrainerEntity = {
  __typename?: 'TrainerEntity';
  attributes?: Maybe<Trainer>;
  id?: Maybe<Scalars['ID']>;
};

export type TrainerEntityResponse = {
  __typename?: 'TrainerEntityResponse';
  data?: Maybe<TrainerEntity>;
};

export type TrainerEntityResponseCollection = {
  __typename?: 'TrainerEntityResponseCollection';
  data: Array<TrainerEntity>;
  meta: ResponseCollectionMeta;
};

export type TrainerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TrainerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TrainerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TrainerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  trainerBasicDetails?: InputMaybe<ComponentUserUserInfoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TrainerInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  trainerBasicDetails?: InputMaybe<ComponentUserUserInfoInput>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
