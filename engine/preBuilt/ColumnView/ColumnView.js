function ColumnView({
  id = "columnView",
  items = [], // array of strings or create() objects
  columns = 2, // how many fixed columns in a row
  Width = "120px",
  Height = "100px",
  MarginBetween = "10px",
  MarginLeft = "10px",
  MarginTop = "10px",
  MarginRight = "10px",
  MarginBottom = "10px",
  LineGapTop = "0px",
  LineGapBottom = "0px",
}) {
  const container = create("div")
    .id(id)
    .class("column-view-container")
    .style({
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, minmax(${Width}, 1fr))`,
      columnGap: MarginBetween,
      rowGap: MarginBetween,
      marginLeft: MarginLeft,
      marginTop: MarginTop,
      marginRight: MarginRight,
      marginBottom: MarginBottom,
      paddingTop: "0px",
      paddingBottom: "0px",
    });

  const children = {};
  items.forEach((item, index) => {
    if (typeof item === "string") {
      children[`item${index}`] = create("div")
        .class("column-view-item")
        .text(item)
        .style({
          height: Height,
          width: "100%",
        });
    } else if (item && item.el instanceof HTMLElement) {
      item.class("column-view-item").style({
        height: Height,
        width: "100%",
      });
      children[`item${index}`] = item;
    }
  });

  container.children(children);

  // Adjust padding for multi-row layouts if needed
  setTimeout(() => {
    const rowHeight = container.el.firstChild?.offsetHeight || 0;
    const totalHeight = container.el.offsetHeight;
    const rows = Math.floor(
      totalHeight / (parseInt(Height) + parseInt(MarginBetween))
    );

    if (rows > 1) {
      container.style({
        paddingTop: LineGapTop,
        paddingBottom: LineGapBottom,
      });
    }
  }, 10);

  return container;
}
