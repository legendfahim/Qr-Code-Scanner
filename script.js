//All DOM load
window.addEventListener("DOMContentLoaded", (event) => {
  let selectedFile = null;
  //Set file
  document.getElementById("file-input").addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
  });
  //Button click event
  document.getElementById("scan-button").addEventListener("click", async () => {
    if (!selectedFile) {
      document.getElementById("log").innerText =
        "No file selected. Please choose a file first.";
      return;
    }

    //Scan code
    const html5QrCode = new Html5Qrcode("reader-placeholder");

    try {
      const qrCodeMessage = await html5QrCode.scanFile(selectedFile, true);
      document.getElementById("result").innerText = ` ${qrCodeMessage}`;
      document.getElementById("log").innerText = "";
    } catch (err) {
      document.getElementById(
        "log"
      ).innerText = `Error scanning QR Code: ${err}`;
      document.getElementById("result").innerText = "";
    }
  });
});
