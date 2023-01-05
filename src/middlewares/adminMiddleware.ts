import { Response, NextFunction} from "express";

export function authorisation(req: Request, res: Response,next:NextFunction):void {
    console.log(req.headers);
    next()
    
}