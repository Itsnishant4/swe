const editor = document.getElementById('editor');
const output = document.getElementById('output');

editor.addEventListener('input', () => {
    const code = editor.value;

    fetch('/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
    })
    .then(response => response.json())
    .then(data => {
        output.textContent = data.output;
    })
    .catch(error => {
        console.error('Error:', error);
        output.textContent = 'An error occurred.';
    });
});
