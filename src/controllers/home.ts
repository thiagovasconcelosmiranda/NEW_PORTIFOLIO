import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
   const viewHeader: boolean = true;
   const viewFooter: boolean = true;
   
   res.render('home', {
      viewHeader, viewFooter
   });
}