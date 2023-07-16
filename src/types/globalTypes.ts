export interface IBook{
    id:number,
    title:string,
    genre:string;
    image:string;
    description:string;
    publicationDate:string;
    review?:string[],
    author:string,
    email:string
}