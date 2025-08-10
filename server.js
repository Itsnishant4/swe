const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.post('/execute', (req, res) => {
    const { code } = req.body;

    // Execute the code using Node.js
    exec(`node -e "${code.replace(/"/g, '\\"')}"`, (error, stdout, stderr) => {
        if (error) {
            res.json({ output: stderr });
            return;
        }
        res.json({ output: stdout });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


