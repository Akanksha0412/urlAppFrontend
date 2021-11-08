import { EmailValidator } from "@angular/forms";

export interface urlData{
    id?:string | undefined,
    longurl:string,
    shorturl:string,
    count:number
}

export interface chartData{
    name:string,
    value:number
}

export interface user{
    email:string,
    password:string,
    confirm:string,
    date:Date
}