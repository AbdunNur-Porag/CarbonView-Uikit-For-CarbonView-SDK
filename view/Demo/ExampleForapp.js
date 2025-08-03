ActionSheet({
  Name: "mySheet",
  Position: "bottom",
  SwipeAble: false,
  Blur: 1,
  Style:{
    
  },
  Children: {
    title: create("h3").text("Swipe down to close"),
    scrollable: create("p").text("Item"),
    closeBtn: create("button")
      .text("Close")
      .onClick(() => closeActionSheet("mySheet"))
  }
});

create("button")
  .text("Open ActionSheet")
  .onClick(() => openActionSheet("mySheet"))
  .add("body");

Drawer({
  Name: "myDrawer",
  Position: "left", // or "left"
  SwipeAble: false,
  Blur: 1,
  Style:{
  borderTopRightRadius:"20px",
  borderBottomRightRadius:"20px"
  },
  Children: {
    title: create("h3").text("Right Drawer Example"),
    body: create("p").text("Drawer content here"),
    btn: create("button")
      .text("Close")
      .onClick(() => closeDrawer("myDrawer"))
  }
});

create("button")
  .text("Open Drawer")
  .onClick(() => openDrawer("myDrawer"))
  .add(document.body);


NativeToast({
  Html: "<b>✅ Action Successful!</b> Your data has been saved.",
  Position: "top",                  // or "bottom"
  BackgroundColor: "#2E7D32",      // dark green background
  FontColor: "#fff",               // white text
  Duration: 1000,                  // show for 5 seconds
  Width: "320px",                  // fixed width (or "full" or leave empty for default)
  Height: "60px"                   // fixed height
});

const items = Array.from({ length: 10 }, (_, i) =>
  create("div").text("Item " + (i + 1)).style({
    background: "#eee",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

const grid = GridView({
  id: "myGrid",
  items: [
   create("button").text("1"),create("button").text("1"),create("button").text("1"),create("button").text("1"),create("button").text("1"),
],

  width: "100px",
  height: "80px",
  gap: "10px",
  margin: "12px",
  /*onItemClick: (i, el) => alert(`Clicked item ${i + 1}`),*/
});

grid.add("body");



/*AppBar*/

PageView({
  Name: "MainView",
  InitialPage: true,
  Children: {
    title: create("h1").text("Main Page"),
    button: create("button").text("Go Settings").onClick(() => OpenPageView("SettingsView")),
  },
});

PageView({
  Name: "SettingsView",
  Children: {
    title: create("div").html("<h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1><h1>Porag</h1>"),
    back: create("button").text("Back").onClick(BackPageView),
  },
});
