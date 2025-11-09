// Function to load reusable components
async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();
    } else {
      el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
    }
  } catch (err) {
    el.innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}

// Load header and footer on every page
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
