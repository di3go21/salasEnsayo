
  $('form').submit(function(e) {
    e.preventDefault();

    var nombreR=$("#name").val().trim();    
    if(nombreR=="") pintaRojo("#name"); else quitaRojo("#name");
    var asuntoR=$("#subject").val().trim();
    if(asuntoR=="") pintaRojo("#subject"); else quitaRojo("#subject");
    var emailR=$("#email").val().trim();
    if(emailR=="") pintaRojo("#email"); else quitaRojo("#email");
    var mensajeR=$("textarea[name='message']").val().trim();
    if(mensajeR=="") pintaRojo("textarea[name='message']"); else quitaRojo("textarea[name='message']");
    var postMsg={nombre:nombreR,asunto:asuntoR,email:emailR,mensaje:mensajeR};
    console.log(postMsg);
    if(nombreR!="" && asuntoR!="" && mensajeR!="" && emailR!="" )
    /*$.ajax({
        url: "https://j982nbapid.execute-api.eu-west-1.amazonaws.com/aaa/emailform",
        type:"POST",
        data:postMsg,
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        crossDomain:true,
        success: function(data){
            $("form").fadeOut(1000,()=>{
                $("#enviado").fadeIn(2000);
            });
            console.log(data)
        }
      });
*/
var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", "https://j982nbapid.execute-api.eu-west-1.amazonaws.com/aaa/emailform");
		xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send(JSON.stringify(postMsg));
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4) {
			var response = JSON.parse(xmlhttp.responseText);
			if (xmlhttp.status === 200 ) {
        $("form").fadeOut(1000,()=>{
                $("#enviado").fadeIn(2000);
            });
            console.log(data)
		    } else {
			    console.log('failed');
			}
		}
	}

 

  });
  $("#enviado").hide();

  function pintaRojo(selector){
      $(selector).addClass("border").addClass("border-danger");

  }
  function quitaRojo(selector){
    $(selector).removeClass("border").removeClass("border-danger");

}
