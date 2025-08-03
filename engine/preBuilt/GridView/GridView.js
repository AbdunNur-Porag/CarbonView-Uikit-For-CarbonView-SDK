function GridView({
  id = "gridView",
  items = [],
  width = "120px",
  height = "100px",
  gap = "10px", // for both row and column
  margin = "10px",
  paddingTop = "0px",
  paddingBottom = "0px",
  lineGapTop = "0px",
  lineGapBottom = "0px",
  onItemClick = null, // optional callback(index, element)
}) {
  const container = create("div")
    .id(id)
    .class("grid-view-container")
    .style({
      display: "grid",
      gridTemplateColumns: `repeat(auto-fill, minmax(${width}, 1fr))`,
      gap: gap,
      margin: margin,
      paddingTop,
      paddingBottom,
    });

  const children = {};
  items.forEach((item, index) => {
    const key = `item${index}`;
    let gridItem;

    if (typeof item === "string") {
      gridItem = create("div")
        .class("grid-view-item")
        .text(item);
    } else if (item && item.el instanceof HTMLElement) {
      gridItem = item.class("grid-view-item");
    } else {
      return;
    }

    gridItem.style({
      height,
      width: "100%",
      boxSizing: "border-box",
    });

    if (typeof onItemClick === "function") {
      gridItem.onClick(() => onItemClick(index, gridItem.el));
    }

    children[key] = gridItem;
  });

  container.children(children);

  // Auto padding adjustment if more than one row
  setTimeout(() => {
    const first = container.el.firstChild;
    if (!first) return;

    const rowHeight = first.offsetHeight;
    const totalHeight = container.el.offsetHeight;
    const estimatedRows = totalHeight / (parseInt(height) + parseInt(gap));

    if (estimatedRows > 1) {
      container.style({
        paddingTop: lineGapTop,
        paddingBottom: lineGapBottom,
      });
    }
  }, 10);

  return container;
}
