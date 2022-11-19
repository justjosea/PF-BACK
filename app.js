import express from 'express';
import mongoose from 'mongoose';

export function ShoppingApp() {
    
    const app = express();

    app.use(express.json())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', '*');

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });

    app.use(async (req, res) => {
        res.status(404).json({message: "Not found."})
    });

    return app
}

export function App() {

    const app = ShoppingApp()

    mongoose.connect(
        "mongodb+srv://rootback:YPuJKnjzDoc52cDm@backtw.sll8h6g.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Conectado a la base de datos");
    })
    .catch((e) => {
        console.log(e)
        console.log("Fallo")
    }) 

    return app
}
