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

export const deleteVehical = async (req,res) => {
     let id =  req.params.id;
    try{
         const deleted = await vehical.findByIdAndDelete(id);
         if(!deleted){
            return res.status(404).json({message:"Vehical not found"});
         }
         return res.status(200).json({message:"Deleted successfully"});
    }catch(error){
        return res.status(404).json({message:error.message});
    }
}

export const updateVehical = async (req, res) => {
    let id = req.params.id;
    const data = req.body;
    if(data.registration_no){
        data.registration_no = data.registration_no.toUpperCase().replaceAll(" ","").trim();
    }
    try {
        const updated = await vehical.findByIdAndUpdate(id,data,{new:true});
        if(!updated){
            return res.status(404).json({message:"Vehical not found"})
        }
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(404).json({message:error.message});
    }
}

