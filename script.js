
function showSteps() {
    const url = document.getElementById("url").value.trim();
    const result = document.getElementById("result");

    if (!url) {
        result.textContent = "Please enter a URL first.";
        return;
    }

    const steps = [
        ["1. URL and Cache", "Browser checks cached resources."],
        ["2. DNS Lookup", "DNS resolves the domain to an IP address."],
        ["3. Connection", "Browser establishes a connection to the server."],
        ["4. TLS Handshake", "HTTPS connections negotiate encryption."],
        ["5. HTTP Request", "Browser sends a request to the server."],
        ["6. Server Response", "Server returns a response, such as 200 OK."],
        ["7. DOM and CSSOM", "Browser parses HTML and CSS."],
        ["8. Rendering", "Browser calculates layout and paints pixels."],
        ["9. JavaScript", "Scripts can make the page interactive."]
    ];

    result.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Browser process for: " + url;
    result.appendChild(heading);

    steps.forEach(function(step) {
        const card = document.createElement("div");
        card.className = "step";

        const title = document.createElement("h3");
        title.textContent = step[0];

        const description = document.createElement("p");
        description.textContent = step[1];

        card.append(title, description);
        result.appendChild(card);
    });
}
