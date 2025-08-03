const slideView = SlideView({
  direction: "left-to-right",
  items: [
    create("div").style({ background: "#f44336" }).children({ text: create("h1").text("Slide 1") }),
    create("div").style({ background: "#4caf50" }).children({ text: create("h1").text("Slide 2") }),
    create("div").style({ background: "#2196f3" }).children({ text: create("h1").text("Slide 3") }),
  ],
});

slideView.add("body");

// Control buttons
create("button")
  .text("Next")
  .onClick(() => slideView.goNextSlide())
  .style({ position: "fixed", bottom: "10px", right: "10px", zIndex: 99 })
  .add("body");

create("button")
  .text("Previous")
  .onClick(() => slideView.goPreviousSlide())
  .style({ position: "fixed", bottom: "10px", left: "10px", zIndex: 99 })
  .add("body");
