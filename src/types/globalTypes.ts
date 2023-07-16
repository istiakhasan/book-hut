export interface IBook{
    id:string,
    title:string,
    genre:string;
    image:string;
    description:string;
    publicationDate:string;
    review?:string[],
    author:string,
    email:string
}