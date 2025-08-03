const items = Array.from({ length: 10 }, (_, i) =>
  create("div").text("Item " + (i + 1)).style({
    background: "#eee",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

const grid = GridView({
  id: "myGrid",
  items: [
   create("button").text("1"),create("button").text("1"),create("button").text("1"),create("button").text("1"),create("button").text("1"),
],

  width: "50px",
  height: "80px",
  gap: "10px",
  margin: "12px",
  /*onItemClick: (i, el) => alert(`Clicked item ${i + 1}`),*/
});

grid.add("body");
