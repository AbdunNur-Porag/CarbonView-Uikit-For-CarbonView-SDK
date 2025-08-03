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
