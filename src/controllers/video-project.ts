import { Request, Response } from "express";

export const getVideoProject = async (req: Request, res: Response) => {
   const video: string = req.params.video;
   const viewHeader = false;
   const viewFooter = false;

   res.render('video-project', {
    video, viewHeader, viewFooter
   });
}