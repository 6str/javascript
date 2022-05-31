//https://www.hackinbits.com/articles/js/how-to-iterate-a-map-in-javascript---map-part-2

let map = new Map()
map.set("one", "first element");
map.set("two", "second element");
map.set(3, "third element");

console.log("iterate map")
for (let [key, value] of map) {
    console.log(key + " = " + value);
}


console.log("iterate keys")
for (let key of map.keys()) {
    console.log(key);
}


console.log("iterate values")
for (let value of map.values()){
	console.log(value);
}


console.log("iterate entries")
for (let [key, value] of  map.entries()) {
	console.log(key + " = " + value)
}


console.log("iterate map again")
for (let [_name, _sender] of map) {
    console.log("=>" + _name + " = " + _sender);
}

