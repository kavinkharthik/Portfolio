const fs = require('fs');
const path = require('path');

const src = "C:/Users/Kavin Kharthik/.gemini/antigravity/brain/1cf7d54a-6213-4c4a-b0f7-0b020d6e5a85/react_favicon_1769662320677.png";
const destIco = "e:/portfolio/client/public/favicon.ico";
const destPng = "e:/portfolio/client/public/favicon.png";

try {
    fs.copyFileSync(src, destIco);
    fs.copyFileSync(src, destPng);
    console.log("Favicon copied successfully!");
} catch (err) {
    console.error("Error copying favicon:", err);
}
