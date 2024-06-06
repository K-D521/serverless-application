const apiUrl = "YOUR_API_GATEWAY_URL_HERE";

async function encrypt() {
  const text = document.getElementById("inputText").value;
  const algorithm = document.getElementById("algorithm").value;
  const response = await fetch(`${apiUrl}/encrypt`, {
    method: "POST",
    body: JSON.stringify({ text, algorithm }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  document.getElementById(
    "output"
  ).textContent = `Encrypted Text: ${data.encryptedText}`;
}

async function decrypt() {
  const text = document.getElementById("inputText").value;
  const algorithm = document.getElementById("algorithm").value;
  const response = await fetch(`${apiUrl}/decrypt`, {
    method: "POST",
    body: JSON.stringify({ text, algorithm }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  document.getElementById(
    "output"
  ).textContent = `Decrypted Text: ${data.decryptedText}`;
}
