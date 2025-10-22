document.getElementById("generateBtn").addEventListener("click", async () => {
  const occasion = document.getElementById("occasion").value;
  const messageBox = document.getElementById("message");
  const imageBox = document.getElementById("cardImage");

  messageBox.innerText = "✨ Generating your greeting...";
  imageBox.src = "";

  const res = await fetch("/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ occasion })
  });

  const data = await res.json();

  messageBox.innerText = data.message || "Something went wrong.";
  imageBox.src = data.imageUrl;
});
