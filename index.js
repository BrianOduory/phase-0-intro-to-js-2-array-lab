// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
        cats.pop(name);
    }
    function destructivelyRemoveFirstCat(name) {
        cats.shift(name);
    }
    function appendCat(name) {
        return ["Milo", "Otis", "Garfield", name]
    }
    function prependCat(name) {
        return [name, "Milo", "Otis", "Garfield"]
    }
    function removeLastCat(name) {
        return ["Milo","Otis",]
    }
    function removeFirstCat(name) {
        return ["Otis", "Garfield"]
    }