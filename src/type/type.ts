export type SignInFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};


export type CardsData={
  title:string, 
  startMonth:string, 
  duration:string,
  location:string,
  format:string,
  language:string,
  isFree:boolean
}

export type Question = {
  question: string;
  options: string[];
  answer: string;
};


export type LoginFormData = {
  email: string;
  password: string;
};
