# `ActionSheet`

`ActionSheet` is a dynamic and flexible component for displaying modal-like sheets from the top or bottom of the screen. It supports swipe gestures, blur backgrounds, and custom content using your `create()`-based framework.

---

## ✅ Features

- Supports both **top** and **bottom** sheets
- Optional **swipe-to-open** and **swipe-to-close** behavior
- **Backdrop blur** for background content
- Fully customizable content via `Children` object
- Dynamic open/close triggers with smooth animations

---

## 📦 Usage

```javascript
ActionSheet({
  Name: "mySheet",           // Unique ID for the sheet
  Position: "bottom",        // 'bottom' or 'top'
  SwipeAble: true,           //false or true
  Blur: 8,                   // Blur intensity for background (in px) by 0 to 10
  Style: { background: "#fff", borderRadius: "12px" }, // Custom CSS styles
  Children: {
    content1: create("div").text("Hello World"),
    content2: create("button").text("Close").onClick(() => closeActionSheet("mySheet"))
  }
});
```

> ⚠️ `Name` must be unique and should not conflict with exist another ActionSheet name.

---

## 🧩 Children Structure

Pass an object of named children. Each value should be a valid `create()` element.

### Example:

```javascript
Children: {
  title: create("h2").text("Menu"),
  button: create("button").text("Okay")
}
```

---

## 🔁 API Methods

### `openActionSheet(name)`
Opens the sheet by name.

```javascript
openActionSheet("mySheet");
```

### `closeActionSheet(name)`
Closes the sheet by name.

```javascript
closeActionSheet("mySheet");
```

---

## 📱 Swipe Behavior

- Swipe **up** to open (when closed) if `Position` is `"bottom"`
- Swipe **down** to close (when open) if `Position` is `"bottom"`
- Works in reverse if `Position` is `"top"`
- Scroll position is intelligently handled to avoid accidental closing

---

## 🧠 Notes

- Only one ActionSheet per `Name` will be created
- Internally stores references in `ActionSheets` object
- Disables body scroll when open and restores on close

---