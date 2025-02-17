const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./routes/users");

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});