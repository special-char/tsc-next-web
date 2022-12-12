export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Upload: any;
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

export type Banner = {
  __typename?: 'Banner';
  buttons?: Maybe<Array<Maybe<ComponentCommonLink>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
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

export type BannerInput = {
  buttons?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
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

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentCommonDetail = {
  __typename?: 'ComponentCommonDetail';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCommonDetailFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonDetailFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonDetailFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonDetailFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonDetailInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonHeaders = {
  __typename?: 'ComponentCommonHeaders';
  button?: Maybe<ComponentCommonLink>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
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
  and?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoCertificationFiltersInput>>>;
  credentialID?: InputMaybe<StringFilterInput>;
  credentialURL?: InputMaybe<StringFilterInput>;
  expireDate?: InputMaybe<DateFilterInput>;
  issueDate?: InputMaybe<DateFilterInput>;
  issuingOrganization?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  neverExpire?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentPersonalInfoCertificationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoCertificationFiltersInput>>>;
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
  and?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoEducationFiltersInput>>>;
  degree?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  extraActivity?: InputMaybe<StringFilterInput>;
  fieldOfStudy?: InputMaybe<StringFilterInput>;
  grade?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentPersonalInfoEducationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoEducationFiltersInput>>>;
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
  and?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoExperianceFiltersInput>>>;
  companyName?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  employeeType?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  industry?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPersonalInfoExperianceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoExperianceFiltersInput>>>;
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
  and?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>>>;
  not?: InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>>>;
  proficiency?: InputMaybe<IntFilterInput>;
  technology?: InputMaybe<TechnologyFiltersInput>;
};

export type ComponentPersonalInfoTechnologyInput = {
  id?: InputMaybe<Scalars['ID']>;
  proficiency?: InputMaybe<Scalars['Int']>;
  technology?: InputMaybe<Scalars['ID']>;
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
  categories?: Maybe<CategoryRelationResponseCollection>;
  courseVideo?: Maybe<UploadFileEntityResponse>;
  courseVideoPoster?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  curriculam?: Maybe<Array<Maybe<ComponentCourseCurriculam>>>;
  description?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  technologies?: Maybe<TechnologyRelationResponseCollection>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CourseCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  curriculam?: InputMaybe<ComponentCourseCurriculamFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  technologies?: InputMaybe<TechnologyFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  courseVideo?: InputMaybe<Scalars['ID']>;
  courseVideoPoster?: InputMaybe<Scalars['ID']>;
  curriculam?: InputMaybe<Array<InputMaybe<ComponentCourseCurriculamInput>>>;
  description?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  technologies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
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

export enum Enum_Componentpersonalinfoexperiance_Employeetype {
  Freelancer = 'Freelancer',
  FullTime = 'Full_Time',
  Internship = 'Internship',
  PartTime = 'Part_Time',
  SelfEmployed = 'Self_Employed',
  Trainee = 'Trainee'
}

export enum Enum_Menusmenuitem_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

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

export type GenericMorph = AboutTsc | Banner | Category | ComponentCommonDetail | ComponentCommonHeaders | ComponentCommonLink | ComponentCourseCurriculam | ComponentPersonalInfoCertification | ComponentPersonalInfoEducation | ComponentPersonalInfoExperiance | ComponentPersonalInfoProject | ComponentPersonalInfoTechnology | ComponentUserUserInfo | Contact | Course | Faq | Header | History | HomeBlog | HomeCategory | HomeCourse | HomeGrowCareer | HomeLeader | HomeTestimonial | I18NLocale | MenusMenu | MenusMenuItem | Perk | Team | Technology | Testimonial | Trainer | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Header = {
  __typename?: 'Header';
  button?: Maybe<ComponentCommonLink>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeaderEntity = {
  __typename?: 'HeaderEntity';
  attributes?: Maybe<Header>;
  id?: Maybe<Scalars['ID']>;
};

export type HeaderEntityResponse = {
  __typename?: 'HeaderEntityResponse';
  data?: Maybe<HeaderEntity>;
};

export type HeaderEntityResponseCollection = {
  __typename?: 'HeaderEntityResponseCollection';
  data: Array<HeaderEntity>;
  meta: ResponseCollectionMeta;
};

export type HeaderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HeaderFiltersInput>>>;
  button?: InputMaybe<ComponentCommonLinkFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HeaderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HeaderFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HeaderInput = {
  button?: InputMaybe<ComponentCommonLinkInput>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

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
  createCategory?: Maybe<CategoryEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createFaq?: Maybe<FaqEntityResponse>;
  createHeader?: Maybe<HeaderEntityResponse>;
  createHistory?: Maybe<HistoryEntityResponse>;
  createMenusMenu?: Maybe<MenusMenuEntityResponse>;
  createMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  createTeam?: Maybe<TeamEntityResponse>;
  createTechnology?: Maybe<TechnologyEntityResponse>;
  createTestimonial?: Maybe<TestimonialEntityResponse>;
  createTrainer?: Maybe<TrainerEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAboutTsc?: Maybe<AboutTscEntityResponse>;
  deleteBanner?: Maybe<BannerEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteFaq?: Maybe<FaqEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteHistory?: Maybe<HistoryEntityResponse>;
  deleteHomeBlog?: Maybe<HomeBlogEntityResponse>;
  deleteHomeCategory?: Maybe<HomeCategoryEntityResponse>;
  deleteHomeCourse?: Maybe<HomeCourseEntityResponse>;
  deleteHomeGrowCareer?: Maybe<HomeGrowCareerEntityResponse>;
  deleteHomeLeader?: Maybe<HomeLeaderEntityResponse>;
  deleteHomeTestimonial?: Maybe<HomeTestimonialEntityResponse>;
  deleteMenusMenu?: Maybe<MenusMenuEntityResponse>;
  deleteMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  deletePerk?: Maybe<PerkEntityResponse>;
  deleteTeam?: Maybe<TeamEntityResponse>;
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
  updateAboutTsc?: Maybe<AboutTscEntityResponse>;
  updateBanner?: Maybe<BannerEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateFaq?: Maybe<FaqEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateHistory?: Maybe<HistoryEntityResponse>;
  updateHomeBlog?: Maybe<HomeBlogEntityResponse>;
  updateHomeCategory?: Maybe<HomeCategoryEntityResponse>;
  updateHomeCourse?: Maybe<HomeCourseEntityResponse>;
  updateHomeGrowCareer?: Maybe<HomeGrowCareerEntityResponse>;
  updateHomeLeader?: Maybe<HomeLeaderEntityResponse>;
  updateHomeTestimonial?: Maybe<HomeTestimonialEntityResponse>;
  updateMenusMenu?: Maybe<MenusMenuEntityResponse>;
  updateMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  updatePerk?: Maybe<PerkEntityResponse>;
  updateTeam?: Maybe<TeamEntityResponse>;
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


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateContactArgs = {
  data: ContactInput;
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreateFaqArgs = {
  data: FaqInput;
};


export type MutationCreateHeaderArgs = {
  data: HeaderInput;
};


export type MutationCreateHistoryArgs = {
  data: HistoryInput;
};


export type MutationCreateMenusMenuArgs = {
  data: MenusMenuInput;
};


export type MutationCreateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
};


export type MutationCreateTeamArgs = {
  data: TeamInput;
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


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFaqArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHeaderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMenusMenuArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMenusMenuItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTeamArgs = {
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


export type MutationUpdateAboutTscArgs = {
  data: AboutTscInput;
};


export type MutationUpdateBannerArgs = {
  data: BannerInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateCourseArgs = {
  data: CourseInput;
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


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  id: Scalars['ID'];
};


export type MutationUpdateHistoryArgs = {
  data: HistoryInput;
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


export type MutationUpdatePerkArgs = {
  data: PerkInput;
};


export type MutationUpdateTeamArgs = {
  data: TeamInput;
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
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutTsc?: Maybe<AboutTscEntityResponse>;
  banner?: Maybe<BannerEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courses?: Maybe<CourseEntityResponseCollection>;
  faq?: Maybe<FaqEntityResponse>;
  faqs?: Maybe<FaqEntityResponseCollection>;
  header?: Maybe<HeaderEntityResponse>;
  headers?: Maybe<HeaderEntityResponseCollection>;
  histories?: Maybe<HistoryEntityResponseCollection>;
  history?: Maybe<HistoryEntityResponse>;
  homeBlog?: Maybe<HomeBlogEntityResponse>;
  homeCategory?: Maybe<HomeCategoryEntityResponse>;
  homeCourse?: Maybe<HomeCourseEntityResponse>;
  homeGrowCareer?: Maybe<HomeGrowCareerEntityResponse>;
  homeLeader?: Maybe<HomeLeaderEntityResponse>;
  homeTestimonial?: Maybe<HomeTestimonialEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menusMenu?: Maybe<MenusMenuEntityResponse>;
  menusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  menusMenuItems?: Maybe<MenusMenuItemEntityResponseCollection>;
  menusMenus?: Maybe<MenusMenuEntityResponseCollection>;
  perk?: Maybe<PerkEntityResponse>;
  team?: Maybe<TeamEntityResponse>;
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


export type QueryAboutTscArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBannerArgs = {
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


export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHeaderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryHeadersArgs = {
  filters?: InputMaybe<HeaderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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


export type QueryPerkArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['ID']>;
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
  avatar: UploadFileEntityResponse;
  certification?: Maybe<Array<Maybe<ComponentPersonalInfoCertification>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  education?: Maybe<Array<Maybe<ComponentPersonalInfoEducation>>>;
  experience?: Maybe<Array<Maybe<ComponentPersonalInfoExperiance>>>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  projects?: Maybe<Array<Maybe<ComponentPersonalInfoProject>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  resume?: Maybe<UploadFileEntityResponse>;
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
  technology?: InputMaybe<ComponentPersonalInfoTechnologyFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeamInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  certification?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoCertificationInput>>>;
  education?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoEducationInput>>>;
  experience?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoExperianceInput>>>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoProjectInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  resume?: InputMaybe<Scalars['ID']>;
  technology?: InputMaybe<Array<InputMaybe<ComponentPersonalInfoTechnologyInput>>>;
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
