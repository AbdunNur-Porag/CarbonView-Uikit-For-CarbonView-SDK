function buildAPI(el) {
  let toggleState = false;

  return {
    el,

    // ID
    id(id) {
      el.id = id;
      return this;
    },
    addId(value) {
      el.id = value;
      return this;
    },
    removeId() {
      el.removeAttribute("id");
      return this;
    },
    isExistId() {
      return !!el.id;
    },
    getId() {
      return el.id || null;
    },

    // Class
    class(classes) {
      return this.addClass(classes);
    },
    addClass(classList) {
      if (Array.isArray(classList)) {
        el.classList.add(...classList);
      } else if (typeof classList === "string") {
        el.classList.add(classList);
      }
      return this;
    },
    removeClass(classList) {
      if (Array.isArray(classList)) {
        el.classList.remove(...classList);
      } else if (typeof classList === "string") {
        el.classList.remove(classList);
      }
      return this;
    },
    removeAllClass() {
      el.className = "";
      return this;
    },
    isExistClass(value) {
      return el.classList.contains(value);
    },
    getAllClass() {
      return Array.from(el.classList);
    },

    // Attributes
    attrs(attrObj) {
      return this.addAttr(attrObj);
    },
    addAttr(attrObj) {
      for (const key in attrObj) {
        el.setAttribute(key, attrObj[key]);
      }
      return this;
    },
    removeAttr(attrList) {
      attrList.forEach(attr => el.removeAttribute(attr));
      return this;
    },
    updateAttrValue(...updates) {
      updates.forEach(([key, value]) => {
        el.setAttribute(key, value);
      });
      return this;
    },
    getAttrValue(name) {
      return el.getAttribute(name);
    },
    getAllAttr() {
      const attrs = {};
      for (const attr of el.attributes) {
        attrs[attr.name] = attr.value;
      }
      return attrs;
    },

    // Style
    style(styleObj) {
      return this.addStyle(styleObj);
    },
    addStyle(styleObj) {
      Object.assign(el.style, styleObj);
      return this;
    },
    removeStyle() {
      el.removeAttribute("style");
      return this;
    },

    // Events
    event(name, handler) {
      if (typeof name === "string" && typeof handler === "function") {
        el.addEventListener(name, handler);
      }
      return this;
    },
    onClick(handler) {
      return this.event("click", handler);
    },
    toggleEvent({ initial = false, WhenTrue, WhenFalse }) {
      toggleState = initial;
      el.addEventListener("click", () => {
        toggleState = !toggleState;
        if (toggleState && typeof WhenTrue === "function") {
          WhenTrue();
        } else if (!toggleState && typeof WhenFalse === "function") {
          WhenFalse();
        }
      });
      return this;
    },

    // Content
    html(rawHTML) {
      el.innerHTML = rawHTML;
      return this;
    },
    text(textContent) {
      el.innerText = textContent;
      return this;
    },

    // DOM Insertion
    add(target) {
      let parent = null;
      if (typeof target === "string") {
        parent = document.querySelector(target);
      } else if (target && target.el instanceof HTMLElement) {
        parent = target.el;
      } else if (target instanceof HTMLElement) {
        parent = target;
      }

      if (parent) {
        parent.appendChild(el);
      }
      return this;
    },

    // Children
    children(childMap) {
      for (const key in childMap) {
        const child = childMap[key];
        if (child && child.el instanceof HTMLElement) {
          el.appendChild(child.el);
          this[key] = child;
        }
      }
      return this;
    },
    addObj(obj) {
      return this.children(obj);
    },
    removeChildren() {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
      return this;
    },
  };
}

// Main API to create new elements
function create(tag) {
  const el = document.createElement(tag);
  return buildAPI(el);
}

// Global $() to bind API to existing DOM
function $(selector) {
  const el = document.querySelector(selector);

  if (!el) {
    throw new Error(`❌ Element "${selector}" not found in the DOM.`);
  }

  return buildAPI(el);
}

