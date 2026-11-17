import mongoose from 'mongoose';

const vehicalSchema = new mongoose.Schema({
 registration_no : {
    type:String,
    required:true,
    unique:true

 },
 model:{
    type:String,
    required:true
 },
 make:{type:String, required:true},
 manufacturing_year:{type:Number, required:true, min:0},
 fuel_type:{type:String, enum : ['Petrol', 'Diesel', 'CNG', 'Electric'], required:true},
 odometer:{type:Number,required:true, min:0},
 nickname:{type:String,trim:true}
},{
    timestamps:true
})

export default mongoose.model('Vehical',vehicalSchema); 