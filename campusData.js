class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime(){
      const dataUsed = this.users * 5;
      if(this.data - dataUsed >= 10){
        return true;
      }
      return false;
    }
  }
  
  const library = new Network(50,9);
  library.movieTime();