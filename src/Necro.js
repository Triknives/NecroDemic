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
      let timeleft = 5;
      let zombieTimer = setInterval(function(){
        document.getElementById("timeOutput").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if(timeleft < 0){
          clearInterval(zombieTimer);
          timeleft = 5;
        }
      }, 1000);
    }, 6000);
  }
}
