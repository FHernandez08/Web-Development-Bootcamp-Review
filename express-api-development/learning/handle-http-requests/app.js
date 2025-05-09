const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

// GET request
app.get("/items", (req, res) => {
  res.status(200).json(items);
});

// POST request
app.post("/items", (req, res) => {
  const { item } = req.body;
  items.push(item);
  res.status(201).json({ message: "Item added", item });
});

// PUT request
app.put("/items/:id", (req, res) => {
  const id = req.params.id;
  const { item } = req.body;

  if (!items[id]) {
    return res.status(404).json({ message: 'Item not found' });
  }

  items[id] = item;
  res.status(200).json({ message: 'Item updated', item });
});

// DELETE request
app.delete("/items/:id", (req, res) => {
  const id = req.params.id;
  items.splice(id, 1);

  res.json({ message: "Item deleted" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
