/**
 * Template Pattern
 * Defines the skeleton of an algorithm in an operation,Defering some steps to 
 * subclasses.
 * 
 * Template pattern lets subclasses redefine some steps on an alogorith without
 * changing the structure of the algorithm.
 */

abstract class MyRecord {
    save(){
        this.validate()
        this.beforeSave()
        // Save to DB
        console.log("Saved to DB")
    }

    abstract validate():void
    abstract beforeSave():void
}

class User extends MyRecord{
    validate(): void {
        console.log("User validated")
    }

    beforeSave(): void {
        console.log("Before Saving User")
    }
}