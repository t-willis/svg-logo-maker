const genSVGSqr = () => {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="250" height="250" fill="${answers.shapeColor}" stroke="black" stroke-width="5"/>
    <text x="130" y="160" text-anchor="middle" fill="${answers.textColor}" font-size="100">${answers.text}</text>
    </svg>`
}
const genSVGCir = () => {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <circle cx="130" cy="125" r="100" fill="${answers.shapeColor}" stroke="black" stroke-width="5"/>
    <text x="130" y="160" text-anchor="middle" fill="${answers.textColor}" font-size="100">${answers.text}</text>
    </svg>`
}
const genSVGTri = () => {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="130,25 5,200 255,200" fill="${answers.shapeColor}" stroke="black" stroke-width="5"/>
    <text x="130" y="165" text-anchor="middle" fill="${answers.textColor}" font-size="75">${answers.text}</text>
    </svg>`
}

module.exports = genSVGSqr;
module.exports = genSVGCir;
module.exports = genSVGTri;