class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
  }
  
  // Write function below
  function balloonAttack(playerOne, playerTwo) {
    const timeOverOne = playerOne.hitsPerMinute * 10;
    const timeOverTwo = playerTwo.hitsPerMinute * 10;
  
    const resultOne = timeOverOne / 100;
    const resultTwo = timeOverTwo / 100;
  
    if(resultOne == resultTwo){
      return "Tie";
    }else if(resultOne < resultTwo){
      return playerTwo.name;
    }else {
      return playerOne.name;
    }
  }
  
  const p1 = new Player('p1', 11);
  const p2 = new Player('p2', 12);
   
  console.log(balloonAttack(p1, p2));