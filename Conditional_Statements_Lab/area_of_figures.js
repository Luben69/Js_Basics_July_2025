function calculateArea(figure, ...params) {
    let area;

    switch (figure.toLowerCase()) {
        case 'square':
            const side = params[0];
            area = side * side;
            break;
        case 'rectangle':
            const [width, height] = params;
            area = width * height;
            break;
        case 'circle':
            const radius = params[0];
            area = Math.PI * radius * radius;
            break;
        case 'triangle':
            const [base, triangleHeight] = params;
            area = 0.5 * base * triangleHeight;
            break;
        default:
            return 'Unknown figure';
    }

    return area;
}
