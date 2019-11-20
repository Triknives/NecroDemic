import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Necro } from './../src/Necro.js';

//API Request for Pokemon
let request = new XMLHttpRequest();
 const url = 'https://pokeapi.co/api/v2/pokemon/haunter';

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
}

request.open("GET", url, true);
request.send();

const getElements = function(response) {
  $('.apiImage').prepend('<img src="' + response.sprites.front_default + '"/>');
}



//GUI Logic
$(document).ready(function(){
  $('#startForm').submit(function(event){
    event.preventDefault();
    $('.introPage').hide();
    $('.zGame').show();

    const userName = $('#userName').val();
    let necroMancer = new Necro(userName);
    necroMancer.zombieUp();
    necroMancer.zombieUpdate();


    $('form#zForm').submit(function(event){
      necroMancer.zombieKill();
        $('#zProgress').animate({ width: ((((necroMancer.zCount)/1024)*100) + '%')});

      event.preventDefault();



    });
  });
});
