// Get DOM elements
const generateBtn = document.getElementById("generate-btn");
const qrInput = document.getElementById("qr-input");
const qrImage = document.getElementById("qr-image");

// Event: Generate QR on button click
generateBtn.addEventListener("click", () => {
  const inputValue = qrInput.value.trim();

  // If input is empty, do nothing
  if (inputValue === "") {
    alert("Please enter text or a URL.");
    return;
  }

  // Set QR image using qrserver.com API
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputValue)}`;
});
