import mongoose  from 'mongoose';

const conndb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ExpressIntegration');
        console.log("Databse Connected");
    } catch (error) {
            console.error({message: "Error", error});
    }
    
}

export default conndb;