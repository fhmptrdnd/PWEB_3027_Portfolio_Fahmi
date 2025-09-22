document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector("#hero .hero-content p");
    const staticText = "Seorang mahasiswa yang ";
    const dynamicTextArray = [
        "semangat belajar programming web.",
        "suka mendesain.",
        "tertarik dengan kecerdasan buatan.",
        "bersemangat dalam programming web."
    ];

    let dynamicTextIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < dynamicTextArray[dynamicTextIndex].length) {
            textElement.textContent = staticText + dynamicTextArray[dynamicTextIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, 50); 
        } else {
            setTimeout(erase, 2000); 
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = staticText + dynamicTextArray[dynamicTextIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 25);
        } else {
            dynamicTextIndex++;
            if (dynamicTextIndex >= dynamicTextArray.length) {
                dynamicTextIndex = 0;
            }
            setTimeout(type, 500); 
        }
    }

    textElement.textContent = staticText;
    setTimeout(type, 1500);
});