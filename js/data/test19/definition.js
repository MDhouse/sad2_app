$(document).ready(function(){

});

var definition;
var sources;

function modul(id, package) {    
    $.each(package, function(key, value){
       $("#"+ id).append("<div class='card'><div class='card-content'>" +
						 "<span class='card-title'>" + package[key].number + "</span>" +
						 "<hr /><p class='contents'>" + package[key].contents + "</p></div></div>")
   }); 
};

<div class="card-content">
											<span class="card-title">Treść</span>
											<hr />
											<p class="contents">
												Znaleźć kwantyl rzędu <span class="math">$$α = 0.46$$.</span><br/>
												Wartość kwantyla z dokładnością do 2 miejsc dziesiętnych.
											</p>
										</div>