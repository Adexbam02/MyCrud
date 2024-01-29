const express = require("express")
const app = express()
const PORT = process.env.PORT || 5500
const Crud = require("./models/CrudModel")
const connectDB = require("./connectDB")


connectDB()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
    console.log(req.method, req.url)
    res.send("Alright")
})

// api createCrud
app.post("/api/create-cruds", async (req, res) => {
    console.log(req.method, req.url);
    try {
        const { title, author, content } = req.body;

        const data = await Crud.create({ title, author, content });
        if (!data) {
            throw new Error("An error occurred while fetching the data");
        }

        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while fetching the data" });
    }
});

// api updateCrud
app.patch("/api/update-cruds/:id", async (req, res) => {
    console.log(req.method, req.url);
    try {
        const crudId = req.params.id
        const { title, author, content } = req.body;

        const data = await Crud.findByIdAndUpdate(crudId, { title, author, content });
        if (!data) {
            throw new Error("An error occurred while fetching the data");
        }

        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while fetching the data" });
    }
});


//api getCrud
app.get("/api/cruds", async (req, res) => {
    console.log(req.method, req.url)
    try {
        const data = await Crud.find({})
        if (!data) {
            throw new Error("An error occur while fetching the data")

        }

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "An error occur while fetching the data" })
    }
})

//api crud by Id
app.get("/api/crud/:id", async (req, res) => {
    console.log(req.method, req.url)
    try {
        const crudId = req.params.id
        const data = await Crud.findById(crudId)
        if (!data) {
            throw new Error("An error occur while fetching the data")

        }

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "An error occur while fetching the data" })
    }
})

//api crud delete Id
app.delete("/api/crud/:id", async (req, res) => {
    console.log(req.method, req.url)
    try {
        const crudId = req.params.id
        const data = await Crud.findByIdAndDelete(crudId)
        if (!data) {
            throw new Error("An error occur while fetching the data")

        }

        res.status(200).json(data)
        console.log(`${crudId} deleted succesfully`)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "An error occur while fetching the data" })
    }
})


app.listen(PORT, () => {
    console.log(`Server up and running port ${PORT}`)
})