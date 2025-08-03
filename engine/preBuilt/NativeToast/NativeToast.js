function NativeToast({
  Html = "",
  Position = "bottom",
  BackgroundColor = "rgba(0,0,0,0.8)",
  FontColor = "#fff",
  Duration = 3000,
  Width = "", // "full" or "300px"
  Height = "",
} = {}) {
  if (!Html) return console.error("NativeToast: Html is required");

  const toast = document.createElement("div");
  toast.innerHTML = Html;

  toast.style.position = "fixed";
  toast.style.padding = "10px 16px";
  toast.style.background = BackgroundColor;
  toast.style.color = FontColor;
  toast.style.fontSize = "14px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
  toast.style.zIndex = "9999";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  toast.style.textAlign = "center";
  toast.style.pointerEvents = "none";
  toast.style.boxSizing = "border-box";

  // === Width Handling ===
  if (Width === "full") {
    toast.style.width = "100vw";
    toast.style.left = "0";
    toast.style.transform = "none";
  } else if (Width) {
    toast.style.width = Width;
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.marginLeft = "5px";
    toast.style.marginRight = "5px";
  } else {
    toast.style.maxWidth = "80vw";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.marginLeft = "5px";
    toast.style.marginRight = "5px";
    toast.style.whiteSpace = "nowrap"; // 👈 prevent line break in default width mode
  }

  if (Height) toast.style.height = Height;

  if (Position === "top") {
    toast.style.top = "20px";
  } else {
    toast.style.bottom = "20px";
  }

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, Duration || 3000);
}
