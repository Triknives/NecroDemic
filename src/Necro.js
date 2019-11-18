import $ from 'jquery';
export class Necro {

  constructor(name){
    this.name = name;
    this.zCount = 1;
  }

  zombieUp() {
    setInterval(() => {
      this.zCount *= 2;
    }, 5000);
  }

  earthCheck() {
    if (this.zCount < 1024) {
      //call question
      return true;
    } else {
      return "ya dead";
    }
  }
  zombieKill() {
   this.zCount *= .75;
  }

  zombieUpdate() {
    setInterval(() => {
      $("#zcountOut").text(this.zCount);
    }, 5000);
  }
}
