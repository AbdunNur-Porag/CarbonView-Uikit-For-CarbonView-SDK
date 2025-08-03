# `GridView`

`GridView` is a powerful UI component for building responsive grid layouts using your custom `create()` and `buildAPI()` framework. It automatically wraps items to the next row when horizontal space runs out.

## ✅ Features

- Auto-wrapping grid layout
- Customizable dimensions (width, height, gap, margin, padding)
- Supports string or element items
- Optional `onItemClick(index, element)` callback
- Smart padding adjustment for multi-line rows

---

## 📦 Usage

```javascript
const grid = GridView({
  id: "myGrid",             // Unique ID for the grid container
  width: "120px",           // Width of each grid item
  height: "100px",          // Height of each grid item
  gap: "10px",              // Gap between rows and columns
  margin: "10px",           // Outer margin of the grid
  paddingTop: "0px",        // Top padding of grid
  paddingBottom: "0px",     // Bottom padding of grid
  lineGapTop: "20px",       // Extra padding-top when multiple rows
  lineGapBottom: "20px",    // Extra padding-bottom when multiple rows
  items: [/* items here */],
  onItemClick: (index, el) => {
    console.log("Clicked item:", index, el);
  }
});

// Add to DOM
grid.add("#app"); // or any selector / element
```

> ⚠️ **Note:** All size-related values (width, height, padding, etc.) should be in **`px`**.

---

## 🧩 Item Structure

Each item inside `items` can be:

1. A plain **string**
2. A DOM element created using `create()` with your build API

### Example:

```javascript
items: [
  "First",
  "Second",
  create("div").text("Third").style({ color: "blue" }),
  create("img").attr("src", "image.jpg").style({ width: "100%" })
]
```

---

## 🔁 Event Handling

You can handle click events for each item using the `onItemClick` callback:
⚠️ use this when you use loop.
**else carbon build api event handeling can use.**
```javascript
onItemClick: (index, el) => {
  alert(`Item ${index} clicked`);
}
```

---

## 🧠 Smart Padding Behavior

When the grid overflows into multiple rows, the component will **automatically** apply `lineGapTop` and `lineGapBottom` to improve vertical spacing.

This is handled internally with a timeout check to estimate the number of rows.