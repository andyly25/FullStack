# Hash Maps
- unordered associations between keys and values
    - basically what an object is without additional protoype extras
- storage of hash map is an array
    - each key/value pair is stored in one of the array slots
    - how to store is by taking a value, and convert into a number
        - num then used as index into array
        - any input has almost equal chance of being hashed to any output index
