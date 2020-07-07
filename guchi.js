var dataValue;

// JSONデータ読み込み
function readJSON()
{
	var req = new XMLHttpRequest();
	req.open("GET", "./data.json");
	req.send();

	req.onreadystatechange = function()
		{
			if(req.readyState == 4 && req.status == 200)
			{
				dataValue = JSON.parse(req.responseText);
				writeChart();
			}
		};
}

function writeChart()
{

	var charValue = new Object();

	var ctx = document.getElementById("myLineChart");
	var myLineChart = new Chart(ctx, dataValue);
}
