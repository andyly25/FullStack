// Let's practice making a class
// note that a class is a blueprint from which individual objects are created
// let's try make a class for a bike
class Bike {
    // represents state
    int cadence = 0;
    int speed = 0;
    int gear = 1;

    // these are methods to define its interaction with outside world
    void changeCadence(int newValue) {
        cadence = newValue;
    }

    void changeGear(int newValue) {
        gear = newValue;
    }

    void speedUp(int increment) {
        speed += increment;
    }

    void applyBrakes(int decrement) {
        speed -= decrement;
    }

    void printStates() {
        System.out.println("cadence:" + cadence + " speed:" + speed + " gear:" + gear);
    }
}

// creating subclasses by using extends
class MountainBike extends Bike {
    // can now make code exclusive for mountain bikes
    // example, Mountain bikes have additonal chain ring, giving lower gear ratio
    // still has access to previous methods
    int chainring = 2;

    void printChainrings() {
        System.out.println("This bike has " + chainring + " chaingring(s)");
    }
}

// Let's try to make an interface now
interface Bicycle {
    void changeCadence(int someVal);
    void changeGear(int someVal);
    void speedUp(int increment);
    void applyBrakes(int decrement);
}

// to use interface we use implements
class ACMEBicycle implements Bicycle {
     // represents state
    int cadence = 0;
    int speed = 0;
    int gear = 1;

    // Compiler requires the methods of interface to be implemented, or else compilation will fail
    // also to compile this, we need to add public to beginning
    // of the implemented interface methods or else compilation error of:
    // attempting to assign weaker access privileges; was public
    public void changeCadence(int someVal) {
        cadence = someVal;
    }

    public void changeGear(int someVal) {
        gear = someVal;
    }

    public void speedUp(int increment) {
        speed += increment;
    }

    public void applyBrakes(int decrement) {
        speed -= decrement;
    }

    void printStates() {
        System.out.println("cadence:" + cadence + " speed:" + speed + " gear:" + gear);
    }
}

// now here's how to run and use classes
class JavaOopPractice {
    public static void main(String[] args) {
        // 2 different bike obj
        Bike bike1 = new Bike();
        Bike bike2 = new Bike();
        MountainBike bike3 = new MountainBike();
        ACMEBicycle bike4 = new ACMEBicycle();

        // invoke methods on objs
        bike1.changeCadence(40);
        bike1.speedUp(10);
        bike1.changeGear(3);
        bike1.printStates();

        bike2.changeCadence(60);
        bike2.speedUp(20);
        bike2.changeGear(2);
        bike2.changeCadence(40);
        bike2.speedUp(5);
        bike2.changeGear(4);
        bike2.printStates();

        bike3.changeCadence(50);
        bike3.speedUp(5);
        bike3.changeGear(2);
        bike3.printStates();
        bike3.printChainrings();

        bike4.printStates();
    }
}
