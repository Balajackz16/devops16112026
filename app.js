const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>Jenkins EC2 Demo</title>
            </head>
            <body>
                <h1>Hello from Jenkins!</h1>
                <h2>Deployment successful ??</h2>
                <p>This application was deployed from GitHub using Jenkins to EC2.</p>
            </body>
        </html>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});
