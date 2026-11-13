import express  from 'express';
import conndb from '../src/config/db.js'

const app = express();
const PORT = 3000;

const startServer = async () => {
    try {
    await conndb();
    app.listen(PORT, () => {
    console.log("Server is Successfully Running, "
        + "and App is listening on port " + PORT);
    });
} catch (error) {
    console.error({message : "Error", error})
}
}

export default startServer;