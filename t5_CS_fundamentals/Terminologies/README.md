# OOP concepts
It is a basically programming using objects that are usually instances of a class. A class consists of data fields and methods that work together. This includes techniques such as abstraction, polymorphism, inheritance and more.

- **Object**
    - software bundle of state and behavior
    - in pure OOP terms, an object is an instance of a class
    - models real world objects found in real life
        - e.g. dog: state (name, breed, color), behavior(barking, fetch)
    - object stores its states in fields (variables)
    - exposes behavior through methods (functions)
        - operates on internal state and serves mechanism for obj-to-obj communication
        - encapsulation is used with this (see below)
    - benefits to building code into individ. software obj
        - *modularity*: obj can be written and maintained independently of the source code for other obj
            - easily passed around inside the system
        - *information-hiding*: interact only with obj methods, details of internal implemntation remains hidden from outside
        - *code re-use*: if obj. already exists can use in your program
            - implement/test/debug complex obj that is trusted to be ran in code
        - *pluggability and debugging ease*: if problems with obj, can remove and use another obj instead
- **Class**
    - blueprint or prototype from which objects are created.
        - describes the details of an object
    - modeling the state and behavior of an object
    - composed of 3 things:
        - name
        - attributes
        - operations
- **Constructors**
- **Inheritance**
    - inherits commonly used state and behavior from other classes
    - each class allowed have one direct superclass
        - superclass has potential for unlimited num of subclassess
        - Bike is superclass of MountainBike and RoadBike
    - ability to extend components without any knowledge of the way in which a class was implemented
- **Interface**
    - contract between a class and the outside world, enforced by compiler
    - class implementing interface provides all behaviors of that interface
    - basically a group of related methods with empty bodies
    - allows a class to become more formal about behavior it promises to provide
- **Package**
    - namespace for organizing classes and interfaces in a logical manner
    - think of it like folders on your comp (one section for HTML, another for Java and etc)
    - software can be composed of thousands of individual classes, so best to place related classes in own packages
    - Appication Programming Interface (API)
        - Java Platform provides a large class library (a set of packages)
        - e.g. String, File, Socket and more!
- **OOP**
    - Object Oriented Programming
    - everything is grouped as self-sustainable objects
    - 4 major principles: *encapsulation*, *abstraction*, *inheritance*, *polymorphism*
- **Encapsulation**
    - hiding internal state and req. all interactions to be performed through obj. methods
    - can make changes without worrying about breaking other code that is using the class
    - restricts access to accessors and mutators
        - **Accessor**: method used to ask obj about itself
            - in form of properties, which usually has a *get* method, which is this
            - not restricted to properties and can be any public method that gives info about state of obj
        - **Mutator**: public methods used to modify state of obj, while hiding implementation how data is modified
            - it is considered the *set* method that lets the caller modify behind member data behind the scenes
- **Abstraction** (sounds soo abstract o.o)
    - development of classes, objects, types in terms of their interfaces and functionality, instead of implmentation to details
    - denotes a model, a view, or some other focused representation for an actual item
    - denotes the essential characteristics of an obj that distinguish it from all other kinds of obj. and thus provide crisply defined conceptual boundaries, relative to perspective of viewers.
    - implementation of an obj that contains the same essential properties and actions we can find in the original object we are representing.
- **Abstract class**
- **Polymorphism**
    - having multiple methods all with the same name, but slightly different functionality
    - having a default method, and then using the other methods depending on your needs
    - easiest example I can think of is with multiplication
        - `multiply(x) // which will multiply x with itself`
        - `multiply(x, y) // multiplies x with y`

## Questions:
1. Real world objects contain _ and _
    - state and behavior
2. A software object's state is stored in _ .
    - ~~variables~~ fields
3. A sofware object's behavior is exposed through __ .
    - methods
4. Hiding internal data from outside world, and accessing it only through publicly exposed methods is known as data __ .
    - encapsulation
5. A blueprint for a software object is called a __ .
    - class
6. Common behavior can be defined in a __ and inherited into a __ using the __ keyword.
    - ~~ineritance~~ superclass, ~~class~~ subclass, extends
7. A collection of methods with no implementation is called an __ .
    - interface
8. A namespace that organizes classes and interfaces by functionality is called a __ .
    - package
9. The term API stands for __ ?
    - Application programming interface
