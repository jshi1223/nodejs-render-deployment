const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Node.js App</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          padding: 20px;
        }
        .container {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          max-width: 600px;
          text-align: center;
        }
        h1 {
          color: #667eea;
          margin-bottom: 10px;
          font-size: 2.5em;
        }
        .section {
          color: #764ba2;
          font-size: 1.2em;
          font-weight: bold;
          margin: 20px 0;
        }
        .quote {
          background: #f7f7f7;
          border-left: 4px solid #667eea;
          padding: 20px;
          margin: 30px 0;
          font-style: italic;
          color: #555;
          font-size: 1.1em;
          line-height: 1.6;
        }
        .footer {
          margin-top: 30px;
          color: #888;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 My Node.js Application</h1>
        <div class="section">
          <strong>Name:</strong> John Vaness Aquino
        </div>
        <div class="section">
          <strong>Class Section:</strong> [NT 4101]
        </div>
        <div class="quote">
          "Success is not final, failure is not fatal: it is the courage to continue that counts."
          <br>— Winston Churchill
        </div>
        <div class="footer">
          Deployed on Render.com | Powered by Node.js & Express
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});