// Start Jquery Area

$(document).ready(function(){

    // start header
    // start navbar

    $('.navbuttons').click(function(){
        $(this).toggleClass('crossxs');
    });

    // end navbar
    // end header
    
});

// End Jquery Area


// Start JavaScript Area

// start student counter section

var getcountervalues = document.querySelectorAll('.countervalues');
// console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue){

    getcountervalues.textContent = 0;

    // console.log(getcountervalue);

    const updatecounter = function(){
        // console.log('i am working');

        const getcttarget = +getcountervalue.getAttribute('data-target'); // plus sign to change number type
        // console.log(getcttarget);
        // console.log(typeof getcttarget,getcttarget);

        const getctcontent = +getcountervalue.innerText;
        // console.log(typeof getctcontent,getctcontent);

        const incnumber = getcttarget / 100;
        // console.log(incnumber);

        if(getctcontent < getcttarget){
            getcountervalue.textContent = getctcontent+incnumber;

            setTimeout(updatecounter,50);
        }

    };

    updatecounter();

})

// end student counter section

// Start Rating Section

// start google code for chart
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Country', 'Students per Attance'],
          ['Myanmar',    8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonisa', 2],
          ['Sirilanka',    8]
        ]);

        var options = {
          title: 'Intational Students',
          // is3D: true,
          // pieHole: 0.4,
          width:550,
          height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

// end google code for chart


// End Rating Section


// End JavaScript Area