import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Necro } from './../src/Necro.js';




$(document).ready(function(){
  $('#startForm').submit(function(event){
    $('.subtitle').hide();


    const userName = $('#userName').val();
    let necroMancer = new Necro(userName);
    necroMancer.zombieUp();
    necroMancer.earthCheck();
    necroMancer.zombieUpdate();
    event.preventDefault();
    console.log(necroMancer);


    $('form#zForm').submit(function(event){
      necroMancer.zombieKill();
      event.preventDefault();
      console.log("hey");


      // $("#zcountOut").text(necroMancer.zCount);
    });



  });
});
