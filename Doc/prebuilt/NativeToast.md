# `NativeToast`

`NativeToast` is a lightweight, native-like toast notification system designed for instant feedback in mobile and web apps. It supports positioning, styling, duration, and responsive widths.

---

## ✅ Features

- Appears at **top** or **bottom** of screen
- Fully customizable background, font color, size, and duration
- Supports full width or fixed width toasts
- Smooth fade-in and fade-out animations
- No dependencies — pure native JS/DOM

---

## 📦 Usage

```javascript
NativeToast({
  Html: "This is a toast!",             // Required: message or HTML string
  Position: "bottom",                   // 'top' or 'bottom' (default: bottom)
  BackgroundColor: "rgba(0,0,0,0.8)",   // Background color of toast
  FontColor: "#fff",                    // Font color
  Duration: 3000,                       // Duration in milliseconds (default: 3000)
  Width: "300px",                       // 'full', fixed width (e.g. '300px'), or leave blank
  Height: "40px"                        // Optional: fixed height
});
```

---

## 🎨 Parameters

| Property         | Type     | Default              | Description |
|------------------|----------|----------------------|-------------|
| `Html`           | string   | —                    | **Required** HTML/text content |
| `Position`       | string   | `"bottom"`           | `"top"` or `"bottom"` |
| `BackgroundColor`| string   | `"rgba(0,0,0,0.8)"`  | Background color of the toast |
| `FontColor`      | string   | `"#fff"`             | Text color |
| `Duration`       | number   | `3000`               | Visibility time in ms |
| `Width`          | string   | `""`                 | `"full"`, `"300px"`, etc. |
| `Height`         | string   | `""`                 | Optional fixed height |

---

## 💡 Notes

- If `Width` is `"full"`, the toast spans 100% of the screen width
- If `Width` is empty, toast fits content and maxes out at 80vw
- `pointerEvents` is set to `none` so the toast won’t block clicks
- Toast will auto-destroy after the given duration
- Transition includes `opacity` and optional slide via `transform`

---

## 🧪 Example

```javascript
NativeToast({
  Html: "<b>Success!</b> Data saved.",
  Position: "top",
  BackgroundColor: "#28a745",
  FontColor: "#fff",
  Duration: 2000,
  Width: "250px"
});
```

---