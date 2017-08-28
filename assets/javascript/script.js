

var wins = 0;
var losses = 0;
var random_target = Math.floor(Math.random() * 101) + 1;
var diamond_1_value = Math.floor(Math.random() * 19) + 1;
var diamond_2_value = Math.floor(Math.random() * 19) + 1;
var diamond_3_value = Math.floor(Math.random() * 19) + 1;
var diamond_4_value = Math.floor(Math.random() * 19) + 1;
total_value = 0;

if (total_value < random_target) {

    $("#diamond_one").on("click", function() {
        total_value = total_value + diamond_1_value;
            console.log ("total value:" + total_value);
            $("#total_value").html("Total Value: "+total_value);
            $("#target_no").html("Target Number: "+random_target);
         })
    
    $("#diamond_two").on("click", function() {
        total_value = total_value + diamond_2_value;
            console.log ("total value:" + total_value);
            $("#total_value").html("Total Value: "+total_value)
            $("#target_no").html("Target Number: "+random_target);
        })
    
    $("#diamond_three").on("click", function() {
        total_value = total_value + diamond_3_value;
                    console.log ("total value:" + total_value);
                    $("#total_value").html("Total Value: "+total_value)
                    $("#target_no").html("Target Number: "+random_target);
                })
            
    $("#diamond_four").on("click", function() {
        total_value = total_value + diamond_4_value;
                    console.log ("total value:" + total_value);
                    $("#total_value").html("Total Value: "+total_value)
                    $("#target_no").html("Target Number: "+random_target);
                })

            }
         

// To determine if game should continue.
if (random_target === total_value) {
    wins = wins++
    console.log ("wins"+wins);
    $("#wins_no").html("Wins: "+wins)


if (total_value <= random_target) {
   

    
} 

// to mark as a loss
else if

    (total_value > random_target) {
        losses = losses++
        console.log ("losses"+losses);
        $("#losses_no").html("Losses: "+losses)
    }
    


// to mark as a win
if (total_value === random_target) {
    console.log ("win")
    
}

}

// to keep track of total score and make diamonds clickable





