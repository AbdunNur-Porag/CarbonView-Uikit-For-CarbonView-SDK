# `SlideView`

`SlideView` is a touch-friendly, native-feel sliding view component. It allows horizontal or vertical swiping between full-screen views or panels, with smooth transitions and full control over direction and index.

---

## ✅ Features

- Swipeable fullscreen panels (horizontal or vertical)
- Touch and mouse gesture support
- Smooth native-like animation using `transform`
- Fully customizable style and item content
- Exposes public API for manual control

---

## 📦 Usage

```javascript
const slider = SlideView({
  id: "MySlider",                      // Optional: HTML id for the container
  direction: "left-to-right",          // left-to-right | right-to-left | top-to-bottom | bottom-to-top
  style: { background: "#f0f0f0" },    // Custom container styles
  items: [
    create("div").text("Slide 1"),
    create("div").text("Slide 2"),
    create("div").text("Slide 3")
  ]
});

slider.add(".app"); // Add to your app
```

---

## 🔁 API Methods

After creating the component, you can use:

```javascript
slider.goNextSlide();         // Move to next slide
slider.goPreviousSlide();     // Move to previous slide
slider.getIndex();            // Get current slide index
slider.setIndex(2);           // Go to a specific slide (0-based)
```

---

## 🧭 Direction Options

| Direction         | Behavior                            |
|------------------|-------------------------------------|
| `left-to-right`   | Default, slide from left to right   |
| `right-to-left`   | Reverse horizontal                  |
| `top-to-bottom`   | Vertical downward                   |
| `bottom-to-top`   | Reverse vertical                    |

---

## 🎨 Style

You can pass custom style to the wrapper using the `style` option:

```javascript
style: {
  background: "#fff",
  border: "1px solid #ccc"
}
```

Each slide automatically gets:

- `width: 100vw`
- `height: 100vh`
- `overflow: auto`
- `flexShrink: 0`

---

## 🧠 Notes

- Gesture handling supports both **touch** and **mouse** interactions
- Slides snap only when swiped beyond a threshold
- `items` can be array or object, each item must be a valid `create()`-based component
- Uses `translateX` or `translateY` for performant animations

---