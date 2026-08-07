document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page");

  // Highlight the current page in the nav (service sub-pages highlight "Services")
  let current = location.pathname.split("/").pop();
  if (!current) current = "index.html";
  const target = current.startsWith("services-") ? "services.html" : current;

  document.querySelectorAll("nav div a[href]").forEach(link => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === target);
  });
});
