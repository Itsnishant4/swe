function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

document.getElementById("load-url-btn").addEventListener("click", function() {
    const btn = this;
    let url = document.getElementById("url-input").value;
    if (url) {
        btn.textContent = "Loading...";
        btn.disabled = true;
        const output = document.getElementById("output");
        output.src = url;
        output.onload = function() {
            btn.textContent = "Load";
            btn.disabled = false;
        };
    }
});

run();

