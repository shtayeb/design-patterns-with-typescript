/** 
    Def:
    Provides a surrogate or placeholder for another object to control access to it.
    
    Three ways to Control Access
        1 - Remote Proxy: outside the namespace or service
        2 - Virtual Proxy: Controls access to a resource that is expensive to create
        3 - Protection Proxy: Access management 

    Virtual Proxy:
*/ 
 
interface IBookParser{
    getNumPages():number
}

class BookParser implements IBookParser{
    constructor(book:string){
        // Expensive parsing here
        console.log("Expensive parsing here...")
    }

    public getNumPages(): number{
        return 100
    }
}

class LazyBookParserProxy implements IBookParser{
    private bookParser:BookParser|null = null
    public book:string = ""

    constructor(book: string){
        this.book = book
    }

    public getNumPages(): number {
        if(this.bookParser === null){
            this.bookParser = new BookParser(this.book)
        }

        return this.bookParser.getNumPages()
    }

}

const book_text:string = "This is a super long text ...."

const bp = new LazyBookParserProxy(book_text)
const n_of_pages = bp.getNumPages();
console.log(n_of_pages)