const words = new Map();
words.set("Room", "Can be rented")
words.set("Flat", "Can be rented")
words.set("Laptop", "Can be rented")
words.set("Hall", "Can be rented")
words.set("Car", "Can be rented")
console.log('words :>> ', words);
for (const word of words.keys()) {
    console.log(`${word} , ${words.get(word)}`);
}