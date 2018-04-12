$(document).ready(function () {

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(initialize);

    function initialize() {
        drawPieChart("pieChart");
        drawLineChart("lineChart");
    }
/*Pie Chart START*/

    function drawPieChart(HTMLElementId){
      alert ("1");

      var chartData = {
  "cols": [
        {"id":"","label":"","type":"string"},
        {"id":"","label":"","type":"number"}
      ],
  "rows": [

      ]
};

      var jsonData;
      $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1wZ-4C0_lMuGPsutp0qceUzOvM1V_1z7bHYVhlTXrYVc/values/'Ark1'!C14%3AG15?majorDimension=COLUMNS&valueRenderOption=FORMULA&key=AIzaSyDBrBt63Jb_CYXzPdnTwa_Y7fpnseTVnXk",
        dataType: "json",
        async: false
      }).done(function(data){
        jsonData = data;
        console.log(jsonData);

      });

      $.each(jsonData.values, function (k, v){
        chartData.rows.push(
          {"c":[{"v":v[0],"f":null},{"v":v[1],"f":null}]}
        );
      });

  // Create our data table out of JSON data loaded from server.
  var data = new google.visualization.DataTable(chartData);

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById(HTMLElementId));
  chart.draw(data, {width: 400, height: 240});
}
/*Pie Chart END*/
/*Line Chart START*/
    function drawLineChart(HTMLElementId){
      alert ("2");

        var jsonData;

        var chartData = {
            "cols": [
                {"id":"","label":"Week","type":"string"},
                {"id":"","label":"Instagram","type":"number"}
            ],
            "rows": [
            ]
        };

        $.ajax({
            url: "https://sheets.googleapis.com/v4/spreadsheets/1wZ-4C0_lMuGPsutp0qceUzOvM1V_1z7bHYVhlTXrYVc/values/'Ark1'!C19%3AG20?majorDimension=COLUMNS&valueRenderOption=FORMULA&key=AIzaSyDBrBt63Jb_CYXzPdnTwa_Y7fpnseTVnXk",
            dataType: "json",
            async: false
        }).done(function (data) {
            jsonData = data;
        });

        $.each(jsonData.values, function (k, v) {
            chartData.rows.push(
                {"c":[{"v":v[0]}, {"v": v[1]}, {"v": v[2]}]});
        });


        var data = new google.visualization.DataTable(chartData);

        var chart = new google.visualization.LineChart(document.getElementById(HTMLElementId));
        var options = {
            title: 'Klik på profil per dag',
            curveType: 'function',
            legend: { position: 'bottom' }
        };
        chart.draw(data, options);
    }
/*Line Chart END*/
/*instergramLineChart START*/
/*instergramLineChart END*/


});
