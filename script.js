// Factory Function
// if a function 'returns' an object we call it a 'Factory Function'
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();

//////////////////////////////////////////////////////////

// Constructor Function
// if a function uses 'this' we call it a 'Constructor Function'

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

//////////////////////////////////////////////////////////

// // Getting properties and keys of objects

// // Using 'for...in' loops
// // To innumerate all members of an object
// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }

// // Using .keys()
// // To get all the keys of an object
// console.log(Object.keys(circle));

// // Using 'in'
// // To check if an object has a property
// if ('radius' in circle)
//     console.log('Circle has a radius.');

////////////////////////////////////////////////////////

function Circle(radius) {
    this.radius = radius;

    let defautlLocation = { x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defautlLocation;
    }
    this.draw = function() {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defautlLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location.');
            }
            defautlLocation = value;
        }
    });
}

const circle = new Circle(1);
circle.draw();