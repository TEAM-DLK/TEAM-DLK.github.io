async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><b>You:</b> ${userInput}</p>`;

    document.getElementById("userInput").value = "";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer YOUR_OPENAI_API_KEY",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;
    chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
}
