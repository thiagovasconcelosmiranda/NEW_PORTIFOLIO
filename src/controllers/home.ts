import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
   const viewHeader = true;
   const viewFooter = true;
   
   res.render('home', {
      viewHeader, viewFooter
   });
}