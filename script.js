const codeLines = [
  "nate@root:~$ sudo nmap -sV 192.168.0.1",
  "Starting Nmap 7.91",
  "Discovered open port 22/tcp on 192.168.0.1",
  "Attempting brute-force login...",
  "Login successful as 'admin'",
  "Downloading files...",
  "Decrypting data...",
  "💀 Self-destruct protocol initiated...",
  "Just kidding 😎 You're in."
];

document.body.addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    output.innerHTML += codeLines[i] + "\n";
    i++;
    if (i >= codeLines.length) clearInterval(interval);
  }, 500);
});
