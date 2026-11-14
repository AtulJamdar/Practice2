import vehical  from "../models/vehical.js";

export const createVehical = async (req,res) => {
    const data = req.body;
    if (!data.model) {
        return res.status(400).json({message:"All fields are required."});
    }

    if(data.registration_no){
        data.registration_no = data.registration_no.toUpperCase().replaceAll(" ","").trim();
    }
    try {
        const Vehical = await vehical.create(data);
        return res.status(201).json(Vehical);
    } catch (error) {
        return res.status(400).json(error.message);
    }
    
}


export const getAllVehical = async (req,res) => {
    try {
        const allvechicals = await vehical.find();
        return res.status(200).json(allvechicals);
    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}

