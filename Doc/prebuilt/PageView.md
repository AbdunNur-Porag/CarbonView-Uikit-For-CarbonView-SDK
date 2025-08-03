# `PageView`

`PageView` is a lightweight client-side page router for single-page applications (SPAs), designed for native-like navigation without reloading the page. It uses the URL `?page=name` to control which page is currently active.

---

## ✅ Features

- URL-based routing (`?page=home`)
- Custom page registration using `PageView()`
- Automatic back button support with `popstate`
- Android bridge support for back stack notification
- Built-in "Not Found" fallback page
- Only one `.active` page is shown at a time

---

## 📦 Usage

### Register a Page

```javascript
PageView({
  Name: "home",              // Required: Unique name for the page
  InitialPage: true,         // Optional: First page to load by default
  Children: {
    header: create("h1").text("Home Page"),
    content: create("p").text("Welcome!")
  }
});
```

### Open a Page

```javascript
OpenPageView("home");
```

### Go Back

```javascript
BackPageView(); // Uses history.back()
```

### Set 404 Page

```javascript
const notFoundPage = PageView({
  Name: "notfound",
  Children: {
    msg: create("div").text("404 Page Not Found")
  }
});
SetNotFoundPage(notFoundPage);
```

---

## 🔁 Navigation Logic

- Appends `?page=Name` to the URL using `history.pushState`
- Reads `page` param on load and `popstate`
- Displays only the matching page (`.page-view.active`)
- All other pages are hidden (`.page-view` default: `display: none`)

---

## 🧠 Android Integration

If `window.AndroidBridge.updateBackState` exists, the router will notify Android of the current page using:

```javascript
AndroidBridge.updateBackState(currentPage);
```

---

## 💡 Notes

- Requires a wrapper container like `#app` to render pages
- CSS is auto-injected for `.page-view` visibility control
- Does not support nested routes or transitions (you can extend it)

---

## 🧪 Example URL

```url
https://your-app.com/?page=about
```

Loads the page registered with `Name: "about"`.

---