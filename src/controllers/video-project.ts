import { Request, Response } from "express";

export const getVideoProject = async (req: Request, res: Response) => {
   const video: any = req.params.video;
   const viewHeader:boolean = false;
   const viewFooter:boolean = false;

   res.render('video-project', {
    video, viewHeader, viewFooter
   });
}