class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    set checkedOut(status){
      this._isCheckedOut = status;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating(){
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this.ratings.length;
      return ratingsSum / lengthOfArray;
    }
  
    addRating(rated){
      this.ratings.push(rated);
    }
}
  
class Book extends Media {
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
}
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 554);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
class Movie extends Media {
    constructor(director,title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
     get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
}
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
class CD extends Media {
    constructor(artist, title){
      super(title);
      this._artist = artist;
      this._songs = [];
    }
  
    get artist(){
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  
    addSongs(song){
      return this.songs.push(song);
    }
  
}
  
  const jackStauber = new CD('Jack Stauber', 'Hi-Lo');
  
  jackStauber.addRating(5);
  jackStauber.addRating(5);
  jackStauber.addRating(5);
  jackStauber.addSongs('Benny Worm');
  jackStauber.addSongs('Getting My Mom On');
  
  console.log(jackStauber.songs);
  
  console.log(jackStauber.getAverageRating());