// === Inject PageView Styles ===
(function injectPageViewStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .page-view {
      display: none;
    }

    .page-view.active {
      display: block;
    }
  `;
  document.head.appendChild(style);
})();

// === PAGEVIEW ROUTER ===
const PageRegistry = {};
let NotFoundPage = null;

// === Android Notifier ===
function notifyAndroidCurrentPage() {
  const currentPage = new URLSearchParams(window.location.search).get("page") || "";
  if (window.AndroidBridge?.updateBackState) {
    AndroidBridge.updateBackState(currentPage);
  }
}

// === PageView Component ===
function PageView({ Name, InitialPage = false, Children }) {
  const view = create("div")
    .id("page-" + Name)
    .class(["page-view"])
    .children(Children)
    .add("#app");

  PageRegistry[Name] = view;

  const current = new URLSearchParams(window.location.search).get("page");

  if ((current === Name) || (!current && InitialPage)) {
    view.el.classList.add("active");
    history.replaceState({}, "", "?page=" + Name);
    notifyAndroidCurrentPage();
  }

  return view;
}

// === Open Page ===
function OpenPageView(name, fromPopState = false) {
  let found = false;

  for (const key in PageRegistry) {
    const page = PageRegistry[key];
    const isTarget = key === name;
    page.el.classList.toggle("active", isTarget);
    if (isTarget) found = true;
  }

  if (!found && NotFoundPage) {
    for (const key in PageRegistry) {
      PageRegistry[key].el.classList.remove("active");
    }
    NotFoundPage.el.classList.add("active");
    if (!fromPopState) {
      history.pushState({}, "", "?page=notfound");
    }
    notifyAndroidCurrentPage();
    return;
  }

  if (!fromPopState) {
    const current = new URLSearchParams(window.location.search).get("page");
    if (current !== name) {
      history.pushState({}, "", "?page=" + name);
    }
  }

  notifyAndroidCurrentPage();
}

// === Back Page ===
function BackPageView() {
  history.back();
}

// === Handle URL on Load/Back ===
function handlePageFromURL() {
  const pageName = new URLSearchParams(window.location.search).get("page");
  OpenPageView(pageName || "", true);
}

// === Not Found Page Setter ===
function SetNotFoundPage(view) {
  NotFoundPage = view;
}

// === Init Event Listeners ===
window.addEventListener("DOMContentLoaded", () => {
  handlePageFromURL();
  notifyAndroidCurrentPage();
});

window.addEventListener("popstate", handlePageFromURL);

// === Expose Globally ===
window.PageView = PageView;
window.OpenPageView = OpenPageView;
window.BackPageView = BackPageView;
window.SetNotFoundPage = SetNotFoundPage;

