/**
    Def:
    The intent is to decouple an abstraction from its implementation so that the two can vary independently

 */


interface IResource{
    snippet():string
    image():string
    title():string
    url():string
}

abstract class IView {
  resource: IResource;
  constructor(resource: IResource) {
    this.resource = resource;
  }

  abstract show(): string 
}


class LongFormView extends IView{
    show():string{
        return `Displaying long snippet: ${this.resource.snippet()}`;
    }
}

class ShortFormView extends IView {
  show(): string {
    return `Displaying short snippet:${this.resource.snippet()}`;
  }
}

class Artist {
  public snippet: string;
  public image: string;
  public name: string;
  public portfolio: string;

  constructor(snippet: string, image: string, name: string, portfolio: string) {
    this.snippet = snippet;
    (this.image = image), (this.name = name), (this.portfolio = portfolio);
  }
}


class Book {
  public snippet: string;
  public cover: string;
  public title: string;
  public url: string;

  constructor(snippet: string, image: string, title: string, url: string) {
    this.snippet = snippet;
    (this.cover = image), (this.title = title), (this.url = url);
  }
}

class ArtistResource implements IResource{
    artist:Artist
    
    constructor(artist:Artist){
        this.artist = artist
    }

    snippet(): string {
        return this.artist.snippet
    }

    image(): string {
        return this.artist.image
    }

    url(): string {
        return this.artist.portfolio
    }

    title(): string {
        return this.artist.name
    }
}

class BookResource implements IResource {
  book: Book;

  constructor(book: Book) {
    this.book = book;
  }

  snippet(): string {
    return this.book.snippet;
  }

  image(): string {
    return this.book.cover;
  }

  url(): string {
    return this.book.url;
  }

  title(): string {
    return this.book.title;
  }
}

const a = new Artist('<html>This is artist</html','headshot','John Doe','link_to_portfolio')
const b = new Book('<html>This is book</html>','book_cover','How to win','link_url')

const ar = new ArtistResource(a)
const br = new BookResource(b)

const lfArtist = new LongFormView(ar)
const lfBook = new LongFormView(br)

console.log(lfArtist.show());

console.log(lfBook.show());