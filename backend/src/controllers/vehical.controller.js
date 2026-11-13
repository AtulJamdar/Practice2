import vehical  from "../models/vehical.js";

const createVehical = async (req,res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({message:"Check all fields are correct."});
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

export default createVehical;