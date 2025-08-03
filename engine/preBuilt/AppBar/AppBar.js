function AppBar({
  Left = {},
  Center = {},
  Right = {},
  Fixed = true,
  Elevation = 1,
  Style = {},
  LeftStyle = {},
  CenterStyle = {},
  RightStyle = {},
}) {
  // Elevation presets
  const shadows = {
    0: "none",
    1: "0 2px 4px rgba(0,0,0,0.60)",
    2: "0 4px 8px rgba(0,0,0,0.15)",
    3: "0 6px 12px rgba(0,0,0,0.2)",
    4: "0 8px 16px rgba(0,0,0,0.25)",
    5: "0 12px 24px rgba(0,0,0,0.3)",
  };

  const Header = create("header")
    .class(["appbar"])
    .style({
      width: "100%",
      height:"80px",
      background: "#ffffff",
      boxShadow: shadows[Elevation] || shadows[1],
      ...(Fixed
        ? {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            zIndex: "999",
          }
        : {}),
      ...Style,
    });

  const Nav = create("nav")
    .class(["appbar-container"])
    .style({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px",
    })
    .children({
      Left: create("div")
        .class(["appbar-left"])
        .style({
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          ...LeftStyle,
        })
        .children(Left),

      Center: create("div")
        .class(["appbar-center"])
        .style({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
          gap: "0.5rem",
          ...CenterStyle,
        })
        .children(Center),

      Right: create("div")
        .class(["appbar-right"])
        .style({
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          ...RightStyle,
        })
        .children(Right),
    });

  Header.children({ Nav });

  return Header;
}
