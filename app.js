const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome Vikas</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500&family=Inter:wght@400;500&display=swap');
  :root { --ink:#1c2230; --paper:#eef1ee; --moss:#3d5a4a; --gold:#b98b3e; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; }
  body {
    background: var(--paper); color: var(--ink); font-family: 'Inter', sans-serif;
    display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;
  }
  .field {
    position: absolute; inset: 0;
    background:
      radial-gradient(600px 600px at 15% 20%, rgba(61,90,74,0.10), transparent 60%),
      radial-gradient(500px 500px at 85% 80%, rgba(185,139,62,0.12), transparent 60%);
  }
  .card { position: relative; text-align: center; padding: 4rem 3rem; max-width: 640px; }
  .eyebrow {
    font-size: 0.9rem; color: var(--moss); letter-spacing: 0.02em; margin-bottom: 1.2rem;
    opacity: 0; animation: rise 0.8s ease-out 0.1s forwards;
  }
  h1 {
    font-family: 'Fraunces', serif; font-weight: 500; font-size: clamp(3rem, 9vw, 5.5rem);
    line-height: 1.05; letter-spacing: -0.01em; opacity: 0; animation: rise 0.9s ease-out 0.3s forwards;
  }
  h1 em { font-style: italic; font-weight: 300; color: var(--gold); }
  .rule {
    width: 64px; height: 2px; background: var(--moss); margin: 1.8rem auto;
    transform: scaleX(0); transform-origin: center; animation: grow 0.6s ease-out 0.7s forwards;
  }
  p.sub {
    font-size: 1.05rem; color: #52605a; opacity: 0; animation: rise 0.8s ease-out 0.9s forwards;
  }
  @keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes grow { to { transform: scaleX(1); } }
  @media (prefers-reduced-motion: reduce) {
    .eyebrow, h1, .rule, p.sub { animation: none; opacity: 1; transform: none; }
  }
</style>
</head>
<body>
  <div class="field"></div>
  <div class="card">
    <div class="eyebrow">Good to see you</div>
    <h1>Welcome, <em>Vikas</em></h1>
    <div class="rule"></div>
    <p class="sub">This page loaded — your pipeline is working.</p>
  </div>
</body>
</html>`;

app.get('/', (req, res) => {
  res.status(200).send(page);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;