
  $('form').submit(function(e) {
    e.preventDefault();
/*
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
    $.post("http://ec2-15-236-90-41.eu-west-3.compute.amazonaws.com/form.php",postMsg,(data)=>{
        $("form").fadeOut(1000,()=>{
            $("#enviado").fadeIn(2000);
        });
        console.log(data)
        
    })



 */

  });
  $("#enviado").hide();

  function pintaRojo(selector){
      $(selector).addClass("border").addClass("border-danger");

  }
  function quitaRojo(selector){
    $(selector).removeClass("border").removeClass("border-danger");

}