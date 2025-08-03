# 🧭 ScrollView – Flexible Scrollable Container

`ScrollView` is a dynamic UI component for displaying a scrollable list of elements either **vertically** or **horizontally**. It supports string-based items or `create()` elements and includes automatic styling and optional size customization.

---

## ✨ Features

- ↕️ **Vertical or Horizontal** scrolling
- 🔧 **Configurable Width & Height**, including `"DeviceWidth"` / `"DeviceHeight"` shortcuts
- 🧩 **Flexible Content** — Accepts strings or `create()` DOM elements
- 🎨 **Built-in Styling** — Items styled with padding, background, and spacing
- 🧠 **Auto-Normalization** — Converts object values to arrays if needed

---

## 🔧 Usage Example

```js
const scroll = ScrollView({
  id: "myScrollView",
  Type: "Horizontal",              // "Vertical" or "Horizontal"
  items: [
    "Item 1",
    create("div").text("Item 2"),
    "Item 3"
  ],
  Width: "DeviceWidth",            // Optional: pixel or "DeviceWidth"
  Height: "150px",                 // Optional: pixel or "DeviceHeight"
  ItemGap: "12px"                  // Gap between items
});

scroll.add(".app"); // Mount inside a container
```

---

## ⚙️ Configuration Options

| Option       | Type     | Default       | Description |
|--------------|----------|----------------|-------------|
| `id`         | String   | `"scrollView"` | HTML ID of the container |
| `Type`       | String   | `"Vertical"`   | Scroll direction: `"Vertical"` or `"Horizontal"` |
| `items`      | Array / Object | `[]`    | List of content: plain strings or `create()` objects |
| `Width`      | String   | *none*         | Container width (`"300px"`, `"DeviceWidth"`, etc.) |
| `Height`     | String   | *none*         | Container height (`"100px"`, `"DeviceHeight"`, etc.) |
| `ItemGap`    | String   | `"10px"`       | Gap between items (works as `gap` in flexbox) |

---

## 🧩 Item Rendering

Each item is normalized and rendered as a styled `<div>` with:

- Padding: `10px`
- Background: `lightgray`
- Rounded corners: `5px`
- `white-space: nowrap` (prevents wrapping)
- `flex-shrink: 0` (keeps size fixed)

Items created via `create()` also receive the same layout rules.

---

## 🧠 Auto Normalization

The `items` array supports both:

- **Arrays**: `[ "Item A", create("div").text("B") ]`
- **Objects**: `{ key1: "A", key2: create("div").text("B") }`  
  → internally converted to `Object.values(...)`

---

## 🎨 Styling Logic

Depending on scroll direction:

| Direction     | Layout                              |
|---------------|-------------------------------------|
| Horizontal    | `flexDirection: "row"` <br> `overflowX: "auto"` |
| Vertical      | `flexDirection: "column"` <br> `overflowY: "auto"` |

Size resolution:
- `"DeviceWidth"` → `window.innerWidth + "px"`
- `"DeviceHeight"` → `window.innerHeight + "px"`

---

## ✅ Ideal Use Cases

- Horizontal carousels  
- Scrollable content lists  
- Chat/message threads  
- Dynamic UI containers in WebView apps

