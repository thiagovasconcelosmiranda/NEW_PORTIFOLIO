import { Request, Response } from "express";
import { getDate } from '../utils/date';

export const home = (req: Request, res: Response) => {
   const viewHeader: boolean = true;
   const viewFooter: boolean = true;
   const year: any = getDate()[2];
   const birth = calcBirth('1984-05-06');

   res.render('home', {
      viewHeader, viewFooter, year, birth
   });
}

const calcBirth = (birth: string) => {

   const today = new Date();

   const dateBirth = new Date(birth);

   let age = today.getFullYear() - dateBirth.getFullYear();
   const month = today.getMonth() - dateBirth.getMonth();

   if (month < 0 || (month === 0 && today.getDate() <= dateBirth.getDate())) {
      age--;
   }
   return age;

}