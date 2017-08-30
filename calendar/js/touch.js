var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];



var IDs = [];
$(".time").find("input").each(function(){ IDs.push(this.id); });



span.onclick = function() {
    modal.style.display = "none";
}



$('.day div.checkbox').on({ 'touchstart' : function(){ 
	event.preventDefault();

modal.style.display = "block";

	 } });



$("#submit").click(function(event) {
    event.preventDefault();

    //grabbing user input from form
    var startday = $('#startday').val();
    var starttime = $('#starttime').val();
    var endday = $('#endday').val();
    var endtime = $('#endtime').val();

	var start= startday+starttime;
	var end= endday+endtime;

	var start;
	var end;

	for (var i=0; i<IDs.length; i++){
		if (IDs[i]==combineOne){
			start=i;
			
		}

	} 

	for (var i=0; i<IDs.length; i++){
		if (IDs[i]==combineTwo){
			end=i;
			
		}

	} 

	for (var i=start; i<end; i++){
		$(".time").eq(i).find(':checkbox').prop('checked', true);

	}


	modal.style.display = "none";
})


