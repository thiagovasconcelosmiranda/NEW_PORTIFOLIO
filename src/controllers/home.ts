import { Request, Response } from "express";
import {getDate} from '../utils/date';

export const home = (req: Request, res: Response) => {
   const viewHeader: boolean = true;
   const viewFooter: boolean = true;
   const year: any = getDate()[2];
   
   
   res.render('home', {
      viewHeader, viewFooter, year
   });
}