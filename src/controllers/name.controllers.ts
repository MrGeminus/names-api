import { Request, Response } from "express";
import nameServices from "../services/name.services";

const getNameById = async (request: Request, response: Response) => {
    const data = await nameServices.findNameById(Number(request.params.id))
    return response.status(200).json({ data })
}

const getAllNames = async (request: Request, response: Response) => {
    const names = await nameServices.findAllNames()
    return response.status(200).json({ names })
}

const getNamesByGender = async (request: Request, response: Response) => {
    const names = await nameServices.findNamesByGender(request.params.gender)
    return response.status(200).json({ names })
}

const getNamesByCountry = async (request: Request, response: Response) => {
    const names = await nameServices.findNamesByCountry(request.params.country)
    return response.status(200).json({ names })
}

export default { getNameById, getAllNames, getNamesByGender, getNamesByCountry }