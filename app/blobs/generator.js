import blobshape from 'blobshape';
import { randomInt, uniqueName } from 'utils';

const gradientColors = [
    ['#f97316', '#fff7ed'],
    ['#fb923c', '#ffedd5'],
    ['#ea580c', '#ffffff'],
    ['#fdba74', '#c2410c'],
    ['#ffedd5', '#f97316'],
    ['#ffffff', '#fb923c']
];

export const fixedSize = 512;

/*
If given existing parameters, creates SVG path based on it (so you can store just the params, not the actual path).
If not, creates new parameter values first.

Returns { parameters, svgPath }.
*/
export function generateBlob(parameters) {
    parameters = {
        seed: null,
        edges: randomInt(3, 20),
        growth: randomInt(2, 9),
        colors: gradientColors[randomInt(0, gradientColors.length - 1)],
        name: uniqueName(),
        ...parameters
    };

    // If seed is not given, a new seed is generated and returned (so it can be stored)
    const { path: svgPath, seedValue: seed } = blobshape({ ...parameters, size: fixedSize });
    return { parameters: { ...parameters, seed }, svgPath };
}
