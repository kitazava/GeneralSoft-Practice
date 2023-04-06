class Quadrilateral{
    constructor(a){
        this.a=a
    }    
}

class Square extends Quadrilateral{
    constructor(a){
        super(a)
    }
    // squareSquare(){
    //     return Math.pow(this.a,2)
    // }
}

class Rectangle extends Quadrilateral{
    constructor(a,b){
        super(a)
        this.b =b
    }
    // squareRectangle(){
    //     return this.a * this.b
    // }
}

class Circle{
    constructor(r){
        this.r = r 
    }
    // squareCircle(){
    //     return Math.PI *(Math.pow(this.r,2))
    // }
}

function totalSquare(array){
    let sum = 0
    var squareSqu = array.shift(squ)
    //console.log(squareSqu)
    var squareRec = array.shift(rec)
    //console.log(squareRec)
    var squareCir = array.shift(cir)
    //console.log(squareCir)
    let resSqu = Math.pow(squareSqu.a,2)
    let resRec = squareRec.a * squareRec.b
    let resCir = Math.PI *(Math.pow(squareCir.r,2))
    return sum = resSqu+resRec+resCir
}

const squ = new Square(5)
const rec = new Rectangle(3,6)
const cir = new Circle(4)
const arrayFigures = [squ,rec,cir]
console.log(totalSquare(arrayFigures))
