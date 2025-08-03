# 📦 ColumnView – Grid Layout Component

`ColumnView` is a customizable and responsive grid component designed for displaying items in a fixed number of columns. It supports flexible content (text or DOM elements via `create()`), and includes adjustable spacing and smart row-based padding.

---

## ✨ Features

- 📐 **Fixed Columns** — Define how many items per row (e.g. 2, 3, 4)
- 🌐 **CSS Grid Layout** — Responsive wrapping using `grid-template-columns`
- 🧠 **Smart Row Padding** — Adds extra spacing if multiple rows exist
- 🧩 **Flexible Items** — Accepts strings or `create()` elements
- 🎛️ **Customizable Spacing** — Fine-tune margin, width, and gaps

---

## 🔧 Usage Example

```js
const column = ColumnView({
  id: "myColumnView",           // Optional ID for the container element
  items: [
    create("div").text("Item 1"),
    create("div").text("Item 2"),
    "Text Item 3"
  ],
  columns: 3,                   // Number of items per row
  Width: "120px",               // Minimum item width
  Height: "100px",              // Fixed item height
  MarginBetween: "10px",        // Space between items (row + column)
  MarginLeft: "10px",
  MarginTop: "10px",
  MarginRight: "10px",
  MarginBottom: "10px",
  LineGapTop: "20px",           // Padding above multi-row content
  LineGapBottom: "20px"         // Padding below multi-row content
});

column.add(".app"); // Mount inside a container
```

---

## 📦 Item Structure

You can mix plain strings and DOM elements created via `create()`:

```js
items: [
  "Label 1",
  create("div").text("Custom Block"),
  "Label 3"
]
```

Each item is automatically styled with:

- `width: 100%` (fills its column)
- `height: [Height]` (defined in config)

---

## 🧠 Smart Padding (Multi-Row)

When the number of items exceeds one row:

- Top padding: `LineGapTop`
- Bottom padding: `LineGapBottom`

This ensures visual separation between rows without needing manual tweaks.

---

## ⚙️ Technical Implementation

| Feature             | Description |
|---------------------|-------------|
| Layout Engine       | CSS Grid (`grid-template-columns: repeat(columns, minmax(Width, 1fr))`) |
| Row & Column Gap    | Both use `MarginBetween` |
| Compatibility       | Fully works in all modern browsers |
| Auto Layout         | Responsive wrapping and sizing |

---

## ✅ Recommended Use Cases

- Dashboard item grids  
- Icon or tool selectors  
- Gallery or product views  
- Layouts needing equal-width content blocks
