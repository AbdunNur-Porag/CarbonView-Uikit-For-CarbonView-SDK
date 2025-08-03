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
