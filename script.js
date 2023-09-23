document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById("download-button");

  // Add a click event listener to the download button
  downloadButton.addEventListener("click", function() {
    // Specify the URL to open in a new tab
    const downloadURL = "https://github.com/vqmpkillable/PingPong/archive/refs/tags/PingPong.zip";

    // Open the URL in a new tab
    window.open(downloadURL, "_blank");
  });
});
