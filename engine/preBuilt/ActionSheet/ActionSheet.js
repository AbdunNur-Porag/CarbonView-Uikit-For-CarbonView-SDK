const ActionSheets = {};

function ActionSheet({
  Name,
  Position = "bottom",
  SwipeAble = false,
  Blur = 6,
  Style = {},
  Children = {}
}) {
  if (document.getElementById(Name)) return;

  const backdrop = create("div")
    .addClass("action-backdrop")
    .addStyle({ backdropFilter: `blur(${parseInt(Blur)}px)` })
    .add(document.body)
    .onClick(() => closeActionSheet(Name));

  const wrapper = create("div")
    .id(Name)
    .addClass(["action-sheet", Position])
    .addStyle(Style)
    .add(document.body);

  const content = create("div")
    .addClass("sheet-content")
    .add(wrapper);

  for (const key in Children) {
    const child = Children[key];
    if (child?.el instanceof HTMLElement) {
      content.el.appendChild(child.el);
    }
  }

  ActionSheets[Name] = {
    wrapper,
    backdrop,
    Position
  };

  if (SwipeAble) {
    addSwipeEvents(wrapper, Name, Position);
  }
}

function openActionSheet(name) {
  const sheet = ActionSheets[name];
  if (!sheet) return;

  sheet.backdrop.addClass("showing");
  sheet.wrapper.addClass("showing");
  document.body.style.overflow = "hidden";
}

function closeActionSheet(name) {
  const sheet = ActionSheets[name];
  if (!sheet) return;

  sheet.wrapper.removeClass("showing");
  sheet.backdrop.removeClass("showing");

  setTimeout(() => {
    document.body.style.overflow = "";
  }, 350);
}

function addSwipeEvents(wrapper, name, position) {
  let startY = 0, currentY = 0, endY = 0;
  const content = wrapper.el.querySelector(".sheet-content");

  wrapper.event("touchstart", (e) => {
    startY = e.touches[0].clientY;
  });

  wrapper.event("touchmove", (e) => {
    currentY = e.touches[0].clientY;
  });

  wrapper.event("touchend", (e) => {
    endY = e.changedTouches[0].clientY;
    const delta = endY - startY;
    const scrollTop = content.scrollTop;
    const scrollBottom = content.scrollHeight - content.clientHeight - scrollTop;

    if (position === "bottom" && delta > 50 && scrollTop <= 0) closeActionSheet(name);
    if (position === "top" && delta < -50 && scrollBottom <= 0) closeActionSheet(name);
  });

  document.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
  });

  document.addEventListener("touchend", (e) => {
    endY = e.changedTouches[0].clientY;
    const delta = endY - startY;

    if (!wrapper.el.classList.contains("showing")) {
      if (position === "bottom" && delta < -80) openActionSheet(name);
      if (position === "top" && delta > 80) openActionSheet(name);
    }
  });
}
