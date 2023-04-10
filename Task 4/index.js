class Quadrilateral{
    constructor(a){
        this.a=a
    }    
}

class Square extends Quadrilateral{
    constructor(a){
        super(a)
    }
    calcSquare(){
        return Math.pow(this.a,2)
    }
}

class Rectangle extends Quadrilateral{
    constructor(a,b){
        super(a)
        this.b =b
    }
    calcSquare(){
        return this.a * this.b
    }
}

class Circle{
    constructor(r){
        this.r = r 
    }
    calcSquare(){
        return Math.PI *(Math.pow(this.r,2))
    }
}

function totalSquare(array){
    var sum = 0
    array.map(element => sum+=element.calcSquare())
    return sum;
}

const squ = new Square(5)
const rec = new Rectangle(3,6)
const cir = new Circle(4)
const arrayFigures = [squ,rec,cir]
console.log(totalSquare(arrayFigures))
