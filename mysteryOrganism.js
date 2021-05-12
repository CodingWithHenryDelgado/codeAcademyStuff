// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAeqourFactory = (number, array) => {
  return {
      specimenNum: number,
      dna: array,
      mutate () {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        const randomBase = returnRandBase();

        do {
          this.dna[randomIndex] = returnRandBase();
        } while( randomBase === this.dna[randomIndex]) 
        return this.dna;
      },
      compareDNA(object){
        let sameBases = 0;

        for(let i = 0; i < this.dna.length; i++){
          if ( object[i] === this.dna[i]) {
            sameBases += 1
          }
        }

        let commonInPercent = ((sameBases / object.length) * 100).toFixed(1)
        return ` ${commonInPercent}% in common`;
      },
      willLikelySurvive(){
        for(let i = 0; i < this.dna.length; i++){
          const cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');

          if (cAndG.length/this.dna.length > 0.6) {
            return true;
          } else {
            return false;
          }
        }
        return CAndG
      }
    }
};

let sample = [];
let i = 0;
while (sample.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() == true) {
    sample.push(temp);
    i += 1
  } 
}
