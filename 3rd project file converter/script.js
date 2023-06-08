function convertFile() {
    const inputFile = document.getElementById('input-file');
    const outputFormat = document.getElementById('output-format').value;
    const outputDiv = document.getElementById('output');
    
    if (inputFile.files.length === 0) {
      alert('Please select a file.');
      return;
    }
  
    const file = inputFile.files[0];
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const image = new Image();
      image.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        
        const convertedImage = canvas.toDataURL(`image/${outputFormat}`);
  
        outputDiv.innerHTML = `
          <h2>Converted Image</h2>
          <img src="${convertedImage}" alt="Converted Image">
        `;
        outputDiv.style.display = 'block';
      };
      image.src = event.target.result;
    };
  
    reader.readAsDataURL(file);
  }
  