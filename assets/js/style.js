$(document).ready(function(){     
    //Dès qu'on clique sur #b1, on applique hide() au titre
    $("#hide").click(function(){
        $("#texte").hide();
    });
    
    //Dès qu'on clique sur #b1, on applique show() au titre
    $("#show").click(function(){
        $("#texte").show();
    });
});

