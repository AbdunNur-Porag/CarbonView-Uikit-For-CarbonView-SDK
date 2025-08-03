# `Drawer`

`Drawer` is a UI component for creating sliding panels from the left or right side of the screen. It supports dynamic content using the `create()` framework and includes backdrop handling for smooth open/close UX.

---

## ✅ Features

- Slide-in panel from **left** or **right**
- Click-to-close backdrop
- Fully customizable via `Style` and `Children`
- Lightweight and easy to integrate
- Uses your custom DOM framework

---

## 📦 Usage

```javascript
Drawer({
  Name: "myDrawer",              // Unique name for the drawer
  Position: "left",              // 'left' or 'right'
  Style: { width: "250px" },     // Optional inline styles
  Children: {
    title: create("h2").text("Side Menu"),
    button: create("button").text("Close").onClick(() => closeDrawer("myDrawer"))
  }
});
```

> ⚠️ `Name` is required and must be unique.

---

## 🧩 Children Structure

Pass a key-value object where each value is a `create()`-based element.

### Example:

```javascript
Children: {
  content: create("p").text("Drawer content goes here"),
  button: create("button").text("Close")
}
```

---

## 🔁 API Methods

### `openDrawer(name)`
Opens the drawer by name.

```javascript
openDrawer("myDrawer");
```

### `closeDrawer(name)`
Closes the drawer by name.

```javascript
closeDrawer("myDrawer");
```

---

## 💡 Notes

- Each drawer is stored inside the internal `Drawers` object by its `Name`
- Clicking outside the drawer (on backdrop) will close it
- Drawers support dynamic styles and responsive layout

---