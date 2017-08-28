

var wins = 0;
var losses = 0;
var random_target = Math.floor(Math.random() * 101) + 1;
var diamond_1_value = Math.floor(Math.random() * 19) + 1;
var diamond_2_value = Math.floor(Math.random() * 19) + 1;
var diamond_3_value = Math.floor(Math.random() * 19) + 1;
var diamond_4_value = Math.floor(Math.random() * 19) + 1;
total_value = 0;
play()

function play (){
if (total_value < random_target) {

    

    $("#diamond_one").on("click", function() {
        $('#status').text('Status: In Progress')
        total_value = total_value + diamond_1_value;
            console.log ("total value:" + total_value);
            $("#total_value").html("Total Value: "+total_value);
            $("#target_no").html("Target Number: "+random_target);
            test();
         })
    
    $("#diamond_two").on("click", function() {
        $('#status').text('Status: In Progress')
        total_value = total_value + diamond_2_value;
            console.log ("total value:" + total_value);
            $("#total_value").html("Total Value: "+total_value)
            $("#target_no").html("Target Number: "+random_target);
            test();
        })
    
    $("#diamond_three").on("click", function() {
        $('#status').text('Status: In Progress')
        total_value = total_value + diamond_3_value;
                    console.log ("total value:" + total_value);
                    $("#total_value").html("Total Value: "+total_value)
                    $("#target_no").html("Target Number: "+random_target);
                    test();
                })
            
    $("#diamond_four").on("click", function() {
        $('#status').text('Status: In Progress')
        total_value = total_value + diamond_4_value;
                    console.log ("total value:" + total_value);
                    $("#total_value").html("Total Value: "+total_value)
                    $("#target_no").html("Target Number: "+random_target);
                    test();
                })

            }}


            //clear values
function clear() {
    random_target = Math.floor(Math.random() * 101) + 1;
    diamond_1_value = Math.floor(Math.random() * 19) + 1;
    diamond_2_value = Math.floor(Math.random() * 19) + 1;
    diamond_3_value = Math.floor(Math.random() * 19) + 1;
    diamond_4_value = Math.floor(Math.random() * 19) + 1;
    total_value = 0;
    $("#total_value").html("Total Value: "+total_value)
    $("#target_no").html("Target Number: "+random_target);
}

function test() {
    // To determine if game should continue.
    if (random_target === total_value) {
        play()
        wins = wins+1
        console.log ("wins"+wins);
        $("#wins_no").html("Wins: "+wins)
        $('#status').text('Status: You won!')
        clear()
    }

    
    // to mark as a loss
else if
        (total_value > random_target) {
            losses = losses+1
            console.log ("losses"+losses);
            $("#losses_no").html("Losses: "+losses)
            $('#status').text('Status: You Lost!')
            clear()
        }
}
   

// to keep track of total score and make diamonds clickable



