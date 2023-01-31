import { Request, Response } from "express";

interface IError {
    message: string
}

const error = (error: IError, request: Request, response: Response) => {
    const status: number = response.statusCode ? response.statusCode : 500
    const message: string = error.message
    return response.status(status).json({ message })
}

export default error;