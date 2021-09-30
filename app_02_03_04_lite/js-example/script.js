// // шаблон
// class Header {
//     constructor (img, h1, h2) {
//         this.src = img;
//         this.h1 = h1;
//         this.h2 = h2;
//     }

//     render (x) {
//         // console.log(this.h1);
//         let out = '';
//         out += `
//             <img src=${this.src} alt="" class="logo">
//             <h1>${this.h1}</h1>
//             <h2>${this.h2}</h2>
//         `
//         document.getElementById(x).innerHTML = out;
//     }
// }

// const img = 'https://cdn2.iconfinder.com/data/icons/free-line-halloween-icons/24/Spider-512.png';

// let header = new Header(img, 'hello', 'world');

// console.log(header);
// header.render("header");

// // class -> object
// // метод -> ресует // render (что рисовать, куда рисовать)


// class 1
class Header {
    constructor(h1, h2) {
        this.h1 = h1;
        this.h2 = h2;
    }
    render(x) {
        let out = '';
        out += `
            <h1>${this.h1}</h1>
            <h2>${this.h2}</h2>
        `
        document.getElementById(x).innerHTML = out;
    }
    static hello(a) {
        console.log('work ' + a);
    }
}

const header = new Header('Hello', 'World');
header.render("header");
console.log(header);



// class 2
class Header2 extends Header {
    constructor(h1, h2, hero) {
        super(h1, h2);
        this._hero = hero;
    }
    get hero() { 
        return this._hero; 
    }
    set hero(c) {
        this._hero = c;
    }
}

const header2 = new Header2('new Hello', 'new World', 'go-go-go!');

header2.render("header");

header2.hero = 'Google';
console.log(header2.hero);

console.log(header2);
Header2.hello('hard');