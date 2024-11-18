// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random hex color
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Add click event listener to the button
    changeColorBtn.addEventListener("click", () => {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});
