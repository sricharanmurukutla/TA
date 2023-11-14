const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.use(express.json());

let fruits = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 56 },
    { name: "Mango", price: 80 }
];

let selectedFruit = {};

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/page1.html");
});

app.get("/display", function (req, res) {
    res.sendFile(__dirname + "/page2.html");
});

app.post("/selectedFruit", function (req, res) {
    const selectedName = req.body.name;
    selectedFruit = fruits.find(fruit => fruit.name === selectedName);
    res.send("Fruit is selected");
});

app.get("/getSelectedFruit", function (req, res) {
    res.send(selectedFruit);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
});
