import vehicslService from "../models/vehicslService.js";


export const createService = async (req , res) => {
    const data = req.body;
    

    try {
        const service = await vehicslService.create(data);
        return res.status(201).json(service);
    } catch (error) {
        return res.status(400).json({message:"Error"});
    }
}

export const getAllServices = async (req, res) => {
   
    try {
        const allServices = await vehicslService.find();
        return res.status(200).json(allServices)
    } catch (error) {
        return res.status(404).json({message:"Error"});
    }
}

export const deleteService = async (req, res) => {
    const data = req.params.id;
    if(!data) {
        return res.status(404).json({message:"Select the service"});
    }

    try {
        const deleted = await vehicslService.findByIdAndDelete(data);
        if(!deleted){
            return res.status(404).json({message:"Service not found"});
        }
        return res.status(200).json(deleted);
    } catch (error) {
        return res.status(404).json({message:"errro"})
    }
}

export const updateService = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    if(!data) {
        return res.status(404).json({message:"Service is missing"});
    }

    try {
        const updated = await vehicslService.findByIdAndUpdate(id,data,{new:true});
        if(!updated){
            return res.status(404).json({message:"Service not found"});
        }
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(404).json({message:"Error"});
    }
}