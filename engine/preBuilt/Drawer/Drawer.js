const Drawers = {};

function Drawer({ Name, Position = "left", Style = {}, Children = {} }) {
  if (!Name) throw new Error("❌ Drawer must have a 'Name'.");

  const drawer = create("div")
    .addClass(["drawer", Position])
    .addStyle(Style)
    .addObj(Children);

  const backdrop = create("div")
    .addClass("drawer-backdrop")
    .onClick(() => closeDrawer(Name));

  drawer.add(document.body);
  backdrop.add(document.body);

  Drawers[Name] = {
    drawer,
    backdrop,
  };
}

function openDrawer(name) {
  const ref = Drawers[name];
  if (!ref) return;

  ref.drawer.addClass("showing");
  ref.backdrop.addClass("showing");
}

function closeDrawer(name) {
  const ref = Drawers[name];
  if (!ref) return;

  ref.drawer.removeClass("showing");
  ref.backdrop.removeClass("showing");
}
