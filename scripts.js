$(document).ready(function(){

    var move = 1;
    var play = true;
  
    $("#board tr td").click(function() {
        if ($(this).text()=="" && play) {
            if ((move%2)==1) { 
                $(this).append("X"); 
            } else {
                $(this).append("O"); 
            }
        move++;
        if (checkForWinner()!=-1 && checkForWinner()!="") { 
            if (checkForWinner()=="X") {
                 alert("Player 1 wins!"); 
            }else if (checkForWinner()=="O"){
                alert("Player 2 wins!"); 
            }
            reset()
        }
        }
    });
    function checkForWinner() {
        var space1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
        var space2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
        var space3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
        var space4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
        var space5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
        var space6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
        var space7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
        var space8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
        var space9 = $("#board tr:nth-child(3) td:nth-child(3)").text();


        // check rows
        if (space1==space2 && space2==space3){ 
            return space1; 
        }else if (space4==space5 && space5==space6){ 
            return space4; 	
        }else if(space7==space8 && space8==space9){ 
            return space7; 
        }

        // check columns
        else if (space1==space4 && space4==space7){ 
            return space1; 
        }else if (space2==space5 && space5==space8){ 
            return space2; 
        }else if (space3==space6 && space6==space9){ 
            return space3; 
        }


        // check diagonals
        else if (space1==space5 && space5==space9){
             return space1; 
        }else if (space3==space5 && space5==space7){
             return space3; 
        
        }else{return -1;
        }
      }

    $("#reset").click(function(){
        space1 = $("#board tr:nth-child(1) td:nth-child(1)").html('');
        space2 = $("#board tr:nth-child(1) td:nth-child(2)").html('');
        space3 = $("#board tr:nth-child(1) td:nth-child(3)").html('');
        space4 = $("#board tr:nth-child(2) td:nth-child(1)").html('');
        space5 = $("#board tr:nth-child(2) td:nth-child(2)").html('');
        space6 = $("#board tr:nth-child(2) td:nth-child(3)").html('');
        space7 = $("#board tr:nth-child(3) td:nth-child(1)").html('');
        space8 = $("#board tr:nth-child(3) td:nth-child(2)").html('');
        space9 = $("#board tr:nth-child(3) td:nth-child(3)").html('');
      });
    

      function reset(){
        space1 = $("#board tr:nth-child(1) td:nth-child(1)").html('');
        space2 = $("#board tr:nth-child(1) td:nth-child(2)").html('');
        space3 = $("#board tr:nth-child(1) td:nth-child(3)").html('');
        space4 = $("#board tr:nth-child(2) td:nth-child(1)").html('');
        space5 = $("#board tr:nth-child(2) td:nth-child(2)").html('');
        space6 = $("#board tr:nth-child(2) td:nth-child(3)").html('');
        space7 = $("#board tr:nth-child(3) td:nth-child(1)").html('');
        space8 = $("#board tr:nth-child(3) td:nth-child(2)").html('');
        space9 = $("#board tr:nth-child(3) td:nth-child(3)").html('');
      }
    
  
  });