# Review Topics
## Table of Contents
1. [OOP Concepts](#oop-concepts)
2. [Java](#java)
3. [Database/SQL](#database-and-sql)

## OOP concepts
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
    - class contains constructors that are invoked to create obj from the class blueprint
    - declarations use the name of the class and have no return type
        - e.g. to create a Bike obj called myBike, a constructor is called by the new operator
        - `Bike myBike = new Bike(30, 0, 8);`
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
    - when to use
        - total abstraction, all methods declared within interface must be implemented by class(es) that implements interface
        - class can implement more than one interface, multiple inheritance
        - specify behavior of particular data type, but not concerned about who implements its behavior
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
    - techniques classes use to associate with each other: association, aggregation, composition
        - *association*: a relationship between 2 classes, all one obj instance to cause another to perform an action on its behalf
            - just connectivity between two classes
            - when define a var of one class in another class, you enable 1st to associate fn and prop of 2nd class
            - no ownership in place, e.g. a teacher *has-a* or *teaches* a student, they don't own each other
        - *aggregation*: weaj type of association with partial ownership
            - can survive the aggregation life cycle without existence of parent object
                - e.g. a school uses teachers, but any teachers can belong to more than one department, so if a department disappears, the teacher will still exist
        - *composition* strong type of association with full ownership.
            - e.g. department owns courses, so if a department disappears, those courses will disappear as well
- **Abstraction** (sounds soo abstract o.o)
    - development of classes, objects, types in terms of their interfaces and functionality, instead of implmentation to details
    - denotes a model, a view, or some other focused representation for an actual item
    - denotes the essential characteristics of an obj that distinguish it from all other kinds of obj. and thus provide crisply defined conceptual boundaries, relative to perspective of viewers.
    - implementation of an obj that contains the same essential properties and actions we can find in the original object we are representing.
    - when to use:
        - some related classes that need to share some lines of code
            - can put these code into abstract class and should be extended to all related classes
        - define non-static or non-final field(s)
            - so by method you can access and modify the state of obj to which they belong
        - expect classes extend an abstract class have many common methods or fields, or req. access modifier other than public
- **[Abstract class](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)**
    - may or may not include abstract methods. cannot be instantiated, but can be subclassed
        - interface can only have abstract; abstract can have default and static methods
    - *abstract method*: declared without an implementation (no braces, and followed by semicolon)
        - `abstract void moveTo(double deltaX, double deltaY);`
    - if a class includes abstract methods, then the class itself must be declared abstract
    - when an abstract class is subclassed, subclass usually provides implementations for all abstract methods in parent class
        - if not, must be declared abstract
    - can be extended with "extends" compared to interface "implements"
    - can extend another java class and implement multiple Java interfaces
- **Polymorphism**
    - subclasses of a class can define their own unique behaviors and yet share some of the same functionality of parent class
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
10. Which of the following is FALSE about abstract classes in Java
    - If we derive an abstract class and do not implement all the abstract methods, then the derived class should also be marked as abstract using 'abstract' keyword
    - Abstract classes can have constructors
    - A class can be made abstract without any abstract method
    - (x) A class can inherit from multiple abstract classes.
11. Which of the following is true about interfaces in java.
    - (x) An interface can contain following type of members.
        - ....public, static, final fields (i.e., constants)
        - ....default and static methods with bodies
    - An instance of interface can be created.
    - (x) A class can implement multiple interfaces.
    - (x) Many classes can implement the same interface.
---

## Java
- Syntax
    - built almost exclusively as an OOP language
    - all code written inside classes and every data items is an object (except data types)
    - **instance variable** (non-static fields)
        - fields declared without static keyword and their values are unique to each instance of a class
    - **class variables** (static fields) is any field declared with static modifier
        - tells compiler there is exactly one copy of this variable in existence
        - e.g. a field defining num of gears for a type of bike could be marked static
            - `static final int numGears = 6`, with final it means the num of gears will never change
    - **local variables** only visible to the methods in which they are declared; not accessible from the rest of the class
    - **parameters** are always classified as variables and not fields
        - in `public static void main(String[] args)` args variable is the parameter
    - Naming: use camelcase if multiple words
        - if variable stores constant value do something like `static final int NUM_GEARS = 6`
- Primitive Data Types (8 of them)
    - **byte**: 8 bit signed two's complement integer from -128 to 127
        - useful for saving memory in large arrays
    - **short**: 16 bit signed 2's complement integer from -32,768 to 32767
    - **int**: 32 bit 2's complement
    - **long**: 64 bit 2's complement
    - **float**: single precision 32 bit, use float instead double if need save memory in large arrays of floating point nums
    - **double**: single precision 64 bit usually default choice for decimal values
    - **boolean**: true and false conditions
    - **char**: 16 bit unicode char from \u0000 to \uffff
- Arrays: container obj holding fixed num of values of single type
    - length of array is est. when array is created
    - ```java
        int[] someArray;
        //allocates memory for 10 ints
        someArray = new int[10];
        someArray[0] = 100;
        // can initalize array by
        int[] anArray = {100, 200, 300, 400};
      ```
- Questions: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/QandE/questions_variables.html
- Conditional Statements: if and else and switch
    - operators used in building expressions, which computers values
    - expressions are core components of statements
        - construct made of var, ops, and method invocations
    - statements may be grouped into blocks
    - block is a group of 0 or more statements between braces and used anywhere a single statement is allowed
- Loops: for and while and do-while
    - statements in do-while are always executed at least once
- Classes
    - class declarations can include these componenets
        - Modifiers: public, private, and others
        - class name, with initial letter capitalized
        - name of class's parent (superclass), preceded with *extends*; can only extend(subclass) one parent
        - comma separated list of interfaces implemented by class, preceded with *implement*
        - class body surrounded by braces {}
    - variables
        - Member vars in class are *fields*
        - var in method or block of code are *local variables*
        - var in method declarations are *parameters*
    - access modifiers
        - **public** modifier: the field is accessible from all classes
        - **private** modifier: field is accessible only within its own class
        - in the spirit of encapsulation to make fields private, can only be directly accessed from its class
            - only way to access the values is by indirectly adding public methods to find or edit field values
- **Interfaces**:
    - a contract that spells out how their contract interacts
        - each group should be able to write their own code without any knowledge how other group's code is written
    - reference type similar to class that can only contain constants, method signatures, default methods, static methods, and nested types
        - default methods can be overriden in implementing class, while static cannot
        - static belongs only to interface class, so can only invoke static method on interface class
    - can only be implemented by classes or extended by other interfaces
    - not method have no braces and terminated with semicolon
    -   ```java
            public interface Mother {
                boolean getAngry(boolean isAngry);
                int foldClothes(int numClothes);
                //...
            }
            public class Mom implements Mother {
                boolean getAngry(boolean isAngry) {
                    // code to implment what happens
                }
                int foldClothes(int numClothes) {
                    // code to fold num of clothes
                }
            }
        ```
- **Inheritance**:
    - why use? when you want to create a new class and there is already a class that includes some code you want
        - reuse fields and methods of existing class without having to write and debug yourself
    - classes can be derived from other classes; inheriting fields and methods
        - a class derived from another class is a subclass
        - class from which subclass is derived is called a superclass
    - `@Override` if you want to override a method from superclass
    - when superclass provides multiple default methods with same signature, follows this principle
        - instance methods are preferred over interface default methods
        - methods that are already overridden by other candidates are ignored
- **Abstract Classes**:
    - when you want to share code amont several closely related classes
    - classes that extend abstract class to have many common methods or fields, or req access modifiers other than public (protected, private)
    - example would be GraphicObjects must be able to resize themselves, just differ how they do it
        - similarities would be moveTo, rotate; differing is resize or draw
        -   ```java
                abstract class GraphicObject {
                    int x, y;
                    ...
                    void moveTo(int newX, int newY) {
                        ...
                    }
                    abstract void draw();
                    abstract void resize();
                }
                // then you would create other objects extending
                class Circle extends GraphicObject {
                    void draw() {
                        ... //implement its version
                    }
                    void resize() {
                        ...
                    }
                }
            ```
        - abstract class implements interface does not have implment all the interface's methods
- **Exceptions**
    - unwanted or unexpected event which occurs during the execution of a program that disrupts the normal flow of program's instructions
    - exceptions and errors are subclasses of class **Throwable**
        - *error*: indicates serious problem that a reasonable app should not try to catch
            - used by Java run-time system(JVM) to indicate errors having to do with run-time env(JRE)
            - g.g. StackOverflowError
        - *exception*: conditions that a reasonable app might try to catch
            - e.g. NullPointerException, ArrayIndexOutOfBoundsException
            - if exception occurs, method creates an Exception Object and hands to JVM
                - *call stack* might be a list methods called to get to the method where exception occured
                - JVM search call stack to find method that can handle occurred exception
                    - block of code is *Exception handler*
                - JVM search from method where occurs in reverse order in which methods called
                - if finds appropriate handler then it passes exception to it
                - if can't find then hands over to *default exception handler*
            - how to handle exceptions by using try, catch, throw, throws, finally
- **Collections**
    - represents a single unit of objects e.g. group
        - is an object that can hold references to other obj
    - **collection framework**: represents a unified architecture for storing and manipulating group of obj
        - interfaces
            - allows collections to be manipulated independently of the details of their representation
        - implementations, e.g. classes
            - concrete implementation of the collection interfaces
                - basically reusable data structures
        - algorithm
            - methods that perform useful computations
            - said to be polymorphic
    - Java collections framework gives programmer access to prepackaged data structs as well as algo to manipulate them
    - classes and interfaces of the collection framework are in package java.util
    - advantages
        - consistent API: basic set of interfaces like Collection, Set, List, or Map
        - reduces programming effort: does not have to worry about design of Collection, and can focus elsewhere
        - increases program speed and quality: provides high performance implementations of useful data structures and algorithms
---

## Database and SQL
- Relational Database Management System (RDMS)
    - structured in database tables, fields, and records
    - table consists of db table rows
    - each db table row consists of one or more db table fields
    - stores data into collection of tables, which might be related by common fields
    - uses re;atopma; ops to manipulate data stored
- **SQL**(Structured Query Language): used to communicate with a db
- Structure
    - RDMS contains one or more obj called tables
        - data or info for db are stored in tables
        - uniquely identified by their names and comprised of col and rows
            - *column*: contain col name, data type, and other attributes for col
            - *rows*: contain records or data for columns
    - **select** used to query the db and retrieve seleced data that match criteria specified
        -   ```sql
                select "col1"
                    [,"col2",etc]
                    from "tablename"
                    [where "condition"];
                    [] = optional
            ```
        - "\*" is used to select all col
        - *where* clause specifies which data values or rows will be returned or displayed based on criteria
            - <> (not equal to), =, >, <, >=, <=
        - *LIKE* operator used to select only rows that you specified
            -   ```sql
                    select first, last, city
                    from empinfo
                    where first LIKE 'Er%';
                ```
            - example above will match any first name that starts with 'Er'
            - strings are in single quote
    - **create table** used to create new table
        -   ```sql
                create table "tablename"
                ("col1" "data type"
                        [constraint],
                "col2" "data type"
                        [constraint],
                "col3" "data type");
                        [constraint]
            ```
        - constraints are optional
        - common data types: char(size), varchar(size), number(size), date, number(size, d)
    - **insert** used to insert or add a row of data into the table
        -   ```sql
                insert into "tablename"
                (first_col, ... last_col)
                values (first_val, ... last val);
            ```
    - **update** used to update or change records that match specified criteria
        -   ```sql
                update "tablename"
                set "colname" =
                "newvalue"
                [,"nextcol" =
                 "newvalue2"...]
                where "colname"
                 OPERATOR "value"
                [and|or "col"
                 OPERATOR "value"];
            ```
        -   ```sql
                update phone_book
                  set area_code = 623
                  where prefix = 979;
                update phone_book
                  set last_name = 'Smith', prefix=555, suffix=9292
                  where last_name = 'Jones';
                update employee
                  set age = age+1
                  where first_name='Mary' and last_name='Williams';
            ```
    - **delete** used to delete reocrds or rows from the table
        -   ```
                delete from "tablename"
                where "columnname"
                    OPERATOR "value"
                [and|or "col"
                 OPERATOR "value"];
            ```
        - if you leave off the where clause, all records will be deleted
    - **drop table** used to delete a table and all rows in table
        - `drop table "tablename"`
    - **aggregate functions**: MIN, MAX, SUM, AVG, COUNT, COUNT(\*)
    - **GROUP BY** clause will gather all rows that contain data in specified col
        -   ```sql
                SELECT col1,
                SUM(col2)
                FROM "list-of-tables"
                GROUP BY "col-list";
            ```
        - example to retrieve list of highest paid salaries in each department
            - ```sql
                SELECT max(salary), dept
                FROM employee
                GROUP BY dept;
              ```
    - **HAVING** allows to specify conditions on the row for each group; should follow GROUP BY clause
        -   ```sql
                SELECT col1,
                SUM(col2)
                FROM "list-of-tables"
                GROUP BY "column-list"
                HAVING "condition"
            ```
    - **ORDER BY** allows to display results of query in a sorted order based on col u specify order by
        -   ```sql
                SELECT col1, SUM(col2) FROM "list-of-tables" ORDER BY "col-list" [ASC | DESC];
            ```
        - e.g. `SELECT employee_id, dept, name, age, salary FROM employee_info WHERE dept = 'Sales' ORDER BY salary;`
    - **AND** operator used to join 2 or more conditions in the where clause, both sides of AND must be true for conditions to be met
    - **IN** operator used to test whether or not a value is "in" the list of values provided
        - e.g. `SELECT employeeid, lastname, salary FROM employee_info WHERE lastname IN ('Joe', 'Smith', 'Sue')`
        - can also use **NOT IN** to exclude rows in your list
    - **BETWEEN** is used to see whether or not a value is "between" the two values stated after keyword BETWEEN
        - e.g. `SELECT employeeid, age, lastname, salary FROM employee_info WHERE age BETWEEN 30 AND 40;`
        - can also use **NOT BETWEEN**
    - Useful math functions
        - ABS(x), SIGN(x), MOD(x,y), FLOOR(x), CEIL(x), POWER(x,y), ROUND(x), ROUND(x,d), SQRT(x)
- [Relationships](https://launchschool.com/books/sql/read/table_relationships)
    - **one to one relationships**
        - when a particular entity instance exists in one table and can have only one associated entity instance in another table
            - e.g. a user can have only one address, and an address belongs to one user
            - ```sql
                /*
                one to one: User has one address
                */
                CREATE TABLE addresses (
                  user_id int, -- Both a primary and foreign key
                  street varchar(30) NOT NULL,
                  city varchar(30) NOT NULL,
                  state varchar(30) NOT NULL,
                  PRIMARY KEY (user_id),
                  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
                );
              ```
    - **One to Many**
        - one to many exists between two entities if an entity instance in one of the tables can be associated with multiple records in the other table
            - e.g. a book has many reviews, but a review belonds to only one book.
            - ```sql
                CREATE TABLE books (
                  id serial,
                  title varchar(100) NOT NULL,
                  author varchar(100) NOT NULL,
                  published_date timestamp NOT NULL,
                  isbn char(12),
                  PRIMARY KEY (id),
                  UNIQUE (isbn)
                );
                /*
                 one to many: Book has many reviews
                */
                CREATE TABLE reviews (
                  id serial,
                  book_id integer NOT NULL,
                  reviewer_name varchar(255),
                  content varchar(255),
                  rating integer,
                  published_date timestamp DEFAULT CURRENT_TIMESTAMP,
                  PRIMARY KEY (id),
                  FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
                );
              ```
    - **Many to Many Relationships**
        - exists between two entities if one entity instance there may be multiple records in the other table, and vice versa
        - e.g. a user can check out many books. A book can be checked out by many users
        - need to introduce a third cross reference table that holds relationship between the two entities by having two foreign keys
    - **self referencing relationships**
- **Normalization** process of splitting up data to remove duplication and improve data integrity
    - split data across multiple different tables and create relationships between them
- Syntax: SELECT, UPDATE, DELETE, INSERT INTO, CREATE DATABASE, ALTER DATABASE, CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE INDEX, DROP INDEX
- DDL
- Constraints
- DML
- Joins
    - allows you to link data from two or more tables together into a single query result from one single SELECT statement
        - ```sql
            SELECT "list-of-columns"
            FROM table1,table2
            WHERE "search-condition(s)"
          ```
        - the below "join" is known as inner join
        - ```sql
            SELECT customer_info.firstname, customer_info.lastname, purchases.item
            FROM customer_info, purchases
            WHERE customer_info.customer_number = purchases.customer_number;
          ```
- **UNION** operator used to combine the result-set of two or more SELECT statements
    - each SELECT statement within UNION must have same num of col
    - col must also have similar data types
    - col in each SELECT statement must also be in same order
    - ```sql
        SELECT col1 FROM table1
        UNION
        SELECT col2 FROM table2
      ```
    - UNION ALL if you want to allow duplicate values

### Exercises Select from [sqlCourse](http://www.sqlcourse.com/select.html)
- Display the first name and age for everyone that's in the table.
    - select first, age from empinfo;
- Display the first name, last name, and city for everyone that's not from Payson
    - select first, last, city from empinfo where city <> 'Payson';
- Display all columns for everyone that is over 40 years old.
    - select * from empinfo where age > 40;
- Display the first and last names for everyone whose last name ends in an "ay".
    - select first, last from empinfo where Like '%ay';
- Display all columns for everyone whose first name equals "Mary".
    - select from first where first = 'Mary';
- Display all columns for everyone whose first name contains "Mary".
    - select * from empinfo where first LIKE '%Mary%';
- Jonie Weber just got married to Bob Williams. She has requested that her last name be updated to Weber-Williams.
    - update phone_book set last_name = 'Williams' where first_name='Jonie' and last_name="Weber"
- Dirk Smith's birthday is today, add 1 to his age.
    - update phone_kook set age=age+1 where first_name='Dirk' and last_name='Smith'
- All secretaries are now called "Administrative Assistant". Update all titles accordingly.
    - update phone_book set title='Administrative Assistant' where title='Secretary'
- Everyone that's making under 30000 are to receive a 3500 a year raise.
    - update phone_book set wage=wage+3500 where salary < 3500
- All "Programmer II" titles are now promoted to "Programmer III".
    - update phone_book set title="Programmer III" where title = "Programmer II"
- Select the item and price of all items that start with the letters 'S', 'P', or 'F'.
    - SELECT item, price FROM items_ordered WHERE (item LIKE 'S%') or (item LIKE 'P%') or (item LIKE 'F%');
- Write a query using a join to determine which items were ordered by each of the customers in the customers table. Select the customerid, firstname, lastname, order_date, item, and price for everything each customer purchased in the items_ordered table.
    - ```sql
        SELECT customers.customerid, customers.firstname, customers.lastname,
        items_ordered.order_date, items_ordereditem, items_ordered.price
        FROM customers, items_ordered
        WHERE customers.customerid = items_ordered.customerid;
      ```
---

## HTML
- Hyper text markup language
- **Elements**
    - usually consists of a start tag and end tag
    - e.g. `<tagname>Element Content</tagname>`
    - HTML element is everything from start tag to end tag
- **Attributes**
    - all HTML elements can have attributes that provide additional info about element
    - e.g. name="value" and in image tags important to use alt attribute to describe image when it cannot be displayed
- **Forms**
    - form elements are different types of input elements (text fields, checkboxes, radio, submit buttons...)
    - ```html
        <form>
            First name: <input type="text" name="firstname">
        </form>
      ```
    - **method** attribute specifies the HTTP method (GET or POST) to be used when submitting form data
        - *GET* is default method when submitting form data
        - *POST* used if form data contains sensitive or personal info.
            - Does not display submitted data in page address field
- HTTP
    - hyper text transfer protocol
    - communication between client comp and webservers is done by sending HTTP requests and receiving HTTP responses
    - WOrld Wide Web(WWW) is about communication between web clients and web servers
    - clients are often browsers, but can be any type of program or device
    - servers are often computers in the cloud
    - HTTP Request/response
        - client sends HTTP req to web
        - web server receives it
        - server runs an app to process req
        - server returns HTTP response to browser
        - client receives response
---

## CSS
- **[Selectors](https://www.w3schools.com/cssref/css_selectors.asp)**
    - patterns used to select the elements you want to style
    - e.g. .class{}, #id{}, \*{}, div > p {} etc
- **Box Model**
    - all html elements can be considered as boxes
    - this model is essentially a box that wraps around every HTML element consists of
        - margins, borders, padding, content
- **Styling Attributes**
    - [attribute] selector is used to select elements with specified attribute
    - e.g. a[target="\_blank"]{background-color: yellow;} targets all `<a>` elements with target="\_blank" attribute

---

## JavaScript
- Syntax:
    - camelcase
    - case sensitive
    - uses const and let
- [Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
    - boolean, null, undefined, number, string, symbol, object
    - symbol is new to me so I'm not sure
- Functions:
    - block of code designed to perform particular task. Executed when something invokes it
    - ```javascript
        function someFunction (p1, p2) {
            return p1 * p2;
        }
      ```
    - can also be defined using an expression
        - `const x = function (a, b) {return a * b};`
    - can also be defined with built-in JS function constructor called Function()
        - `var myFunction = new Function("a", "b", "return a * b");`
    - also self invoking functions you can check out
- **Objects**
    - JS objects are containers for named values called properties or methods
        - values written as name: value
        - ```javascript
            const person = {
                firstName:"John",
                lastName:"Smith",
                age:"40",
                fullName: function() {
                    return this.firstName + " " + this.lastName;
                }
            };
         ```
- DOM Manipulation
    - Document Object Model (DOM) is a programming interface for HTML and XML documents
        - represents the page so programs can change the doc struct, style, content
    - JS uses the DOM to access doc and its elements
        - can traverse through the dom and manipulate its contents
        - using things like `querySelector, createElement, setAttribute, getElementsByTagName`
        - can edit css as well using inline styling
- Event Management
    - executes code when events are detected
    - HTML allows event handler attributes to be added to HTML elements
        - e.g. `<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>`
    - common html events
        - onchange, onclick, onmouseover, onmouseout, onkeydown, onload
    - event handlers used to handle and verify user input, actions, and browser actions
