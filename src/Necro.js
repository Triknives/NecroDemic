import $ from 'jquery';
// import { progressLoad } from './progressLoad.js';
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
      $('.zGame').hide();
      $('.zEnd').show();
      return "ya dead";
    }
  }
  zombieKill() {
   this.zCount *= .75;
   $("#zcountOut").text(this.zCount);
   // progressLoad();
  }

  progressLoad() {
    var zProgress = (Necro.zCount/1024)*100;
    return zProgress;
  }

  zombieUpdate() {
    setInterval(() => {
      $("#zcountOut").text(this.zCount);
      this.earthCheck();
      let proxyCount = this.zCount
      let timeleft = 5;
      let zombieTimer = setInterval(function(){
        document.getElementById("timeOutput").innerHTML = timeleft;
        timeleft -= 1;
        $('#zProgress').animate({ width: ((((proxyCount)/1024)*100) + '%')});
        console.log(proxyCount);

        if(timeleft < 0){
          clearInterval(zombieTimer);
          timeleft = 5;
        }
      }, 1000);
    }, 6000);
  }
}
