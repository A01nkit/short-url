async function getShortUrl() {
    const longUrl = document.getElementById("longUrl").value;
    if (!longUrl) {
        alert("Please enter a valid URL");
        return;
    }
    
    try {
        
        const response = await fetch('src/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ longUrl })
        });

        const data = await response.json();
        console.log(data)
        if (response.ok) {
            document.getElementById("shortUrl").innerHTML = 
                `Shortened URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
        } else {
            alert(data.error || "Error shortening URL");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to shorten URL");
    }
}