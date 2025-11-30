import fs from "fs";
import path from "path";

const dataPath = path.resolve("data/data.json");

export const getCoffees = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  res.json({
    success: true,
    coffees: data,
  });
};

export const addCoffee = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const { name, sugar } = req.body;

  const newCoffee = {
    id: data.length + 1,
    name: name, // nama kopi
    sugar: sugar, // contohnya: "manis", "less sugar", "tanpa gula"
  };

  data.push(newCoffee);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  res.json({
    success: true,
    message: "Coffee added",
    data: newCoffee,
  });
};
