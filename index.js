'use strict';

const { createCanvas, loadImage } = require('canvas');

exports.handler = (event) => {

    let name;
    let course;

    if (event.body.name === null || event.body.course === null
        || event.body.name === undefined || event.body.course === undefined) {
        name = "Some name";
        course = "Test course";
    } else {
        name = event.body.name;
        course = event.body.course;
    }
    let res = createCertificate(name, course);
    console.log(`Result: ${res.toString()}`);

    return res;
};

function createCertificate(name, course) {
    let file = "certificate.png";
    let canvas = createCanvas(image.width, image.height);
    let context = canvas.getContext('2d');
    loadImage(file).then((image) => {
        context.drawImage(image, 0, 0);
        context.font = 'italic 100pt Calibri';
        context.fillStyle = "black";
        context.fillText(name, 1800, 1500);
        context.fillText(course, 1900, 2000);
        console.log('<img src="' + canvas.toDataURL() + '" />')
    });

    return canvas.toDataURL();
}
