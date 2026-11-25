import mongoose from 'mongoose';

const vehicleServiceSchema = new mongoose.Schema(
    {
        vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
        serviceType: { type: String, required: true },
        scheduledDate: { type: Date, required: true },
        estimatedCost: { type: Number, required: true },
        serviceCenter: { type: String, required: true },
        notes: { type: String },
        status: { type: String, default: "Scheduled" }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('VehicleService', vehicleServiceSchema)