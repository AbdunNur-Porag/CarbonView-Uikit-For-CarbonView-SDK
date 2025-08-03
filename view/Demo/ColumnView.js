const colView = ColumnView({
  columns: 3,
  items: [
    "One",
    "Two",
    create("div").text("Three").style({ background: "yellow" }),
  ],
});
colView.add("#app");
