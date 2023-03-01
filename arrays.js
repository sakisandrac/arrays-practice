var animals = ['dog', 'cat', 'rabbit', 'ferret']
var ages = [5, 6, 7, 8]
var isTall = [true, false, true, false]

// this will use the method pop to remove ferret from the animal array
animals.pop()

//this will add 9 to the end of the animals array
ages.push(9)

//this will add false to the beginning of the isTall array
isTall.unshift(false)

var cars = ['Toyota', 'Tesla', 'Honda', 'Mini', 'BMW']
//this will use the method slice to change the array from index 1 up to index 3
//the array will now be 'Tesla', 'Honda', 'Mini'
cars.slice(1, 4)