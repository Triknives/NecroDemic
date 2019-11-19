import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Necro } from './../src/Necro.js';
import {  } from './../src/clock.js';



$(document).ready(function(){
  $('#startForm').submit(function(event){
    $('.introPage').hide();


    const userName = $('#userName').val();
    let necroMancer = new Necro(userName);
    necroMancer.zombieUp();
    necroMancer.earthCheck();
    necroMancer.zombieUpdate();
    event.preventDefault();



    $('form#zForm').submit(function(event){
      necroMancer.zombieKill();
      event.preventDefault();




    });
  });
});
