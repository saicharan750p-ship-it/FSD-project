const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, "..");
app.use(express.json());
app.use(express.static(ROOT));
app.get("/api/health", (_req, res) => res.json({ status: "ok", app: "PlatePilot" }));
app.get("/api/recipes", (_req, res) => {
  const file = path.join(ROOT, "data", "recipes.json");
  try { res.json(JSON.parse(fs.readFileSync(file, "utf8"))); }
  catch { res.status(500).json({ error: "Recipe data unavailable" }); }
});
app.get("*", (req, res) => {
  const requested = path.join(ROOT, req.path === "/" ? "index.html" : req.path);
  if (requested.startsWith(ROOT) && fs.existsSync(requested) && fs.statSync(requested).isFile()) return res.sendFile(requested);
  res.status(404).sendFile(path.join(ROOT, "index.html"));
});
app.listen(PORT, () => console.log(`PlatePilot running at http://localhost:${PORT}`));
