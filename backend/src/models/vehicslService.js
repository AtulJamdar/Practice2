import mongoose from 'mongoose';


const vehicalServiceSchema = new mongoose.Schema(
    {
        vehical:{type:mongoose.Schema.Types.ObjectId, ref:'Vehical', required:true},
        serviceType:{type:String, required:true},
        shedule_date:{type:Date, required: true},
        estimate_cost:{type:Number, required:true},
        service_center:{type:String, required: true},
        notes:{type:String}
    },{
        timestamps: true
    }
)
export default mongoose.model('VehicalService', vehicalServiceSchema)

