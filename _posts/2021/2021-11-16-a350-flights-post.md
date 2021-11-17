---
title: 'A350 Test'
date: 2021-11-16
description: Some reflections on the limitations and blockers for scaling RPA
tags: [digitalization, transformation, data, devops, organisation, improvement, speed, automation, rpa, uipath, api]
categories: [digitalization]
comments: true
featured_image: '/images/posts/2021/rpa-feature.jpg'
---

![](/images/posts/2021/rpa.jpg)

{% include a350.html %}

<script>
	window.onload = function() {
		with(new XMLHttpRequest()) {
			onreadystatechange = cb;
			open('GET', 'https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.csv', true);
			responseType = 'text';
			send();
		}
	}

function cb() {
	if (this.readyState === 4) document.getElementById('A350')
		.innerHTML = tbl(this.responseText);
}

function tbl(csv) { // do whatever is necessary to create your table here ...
	return csv.split('\n')
		.map(function(tr, i) {
			return '<tr><td>' +
				tr.replace(/\t/g, '</td><td>') +
				'</td></tr>';
		})
		.join('\n');
}
</script>

<table style='font-family:monospace; font-size:50%' id="A350"></table>

var init;
    const logFileText = async file => {
        const response = await fetch(file);
        const text = await response.text();
        all = text.split('\n');
        if (init !== all.length) {
            //console.log(all.length, init);
            init = all.length;
            //console.log('changed');
            var arr=[];
            all.forEach(el => {
                el=el.split(',');
                arr.push(el);
            });
            // console.log(arr);

            createTable(arr);

        }

    }

    function createTable(array) {
        var content = "";
        array.forEach(function (row) {
            content += "<tr>";
            row.forEach(function (cell) {
                content += "<td>" + cell + "</td>";
            });
            content += "</tr>";
        });
        document.getElementById("t1").innerHTML = content;
    }

    var file = 'https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.csv';
    logFileText(file);
    setInterval(async () => {
        await logFileText(file);
    }, 2000);
    
<table id="t1"> </table>

