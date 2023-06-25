// function to use template to generate square using user input
function genSVGSqr(a, b, c) {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="250" height="250" fill="${c}" stroke="black" stroke-width="5"/>
    <text x="130" y="160" text-anchor="middle" fill="${b}" font-size="100">${a}</text>
    </svg>`
}
// function to use template to generate circle using user input
function genSVGCir(a, b, c) {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <circle cx="130" cy="125" r="100" fill="${c}" stroke="black" stroke-width="5"/>
    <text x="130" y="160" text-anchor="middle" fill="${b}" font-size="100">${a}</text>
    </svg>`
}
// function to use template to generate triangle using user input
function genSVGTri(a, b, c) {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="130,25 5,200 255,200" fill="${c}" stroke="black" stroke-width="5"/>
    <text x="130" y="165" text-anchor="middle" fill="${b}" font-size="75">${a}</text>
    </svg>`
}

module.exports = { genSVGSqr, genSVGCir, genSVGTri };