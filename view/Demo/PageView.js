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
