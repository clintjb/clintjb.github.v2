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

<script>
window.onload=function(){ with (new XMLHttpRequest()) {
  onreadystatechange=cb; open('GET','https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.csv',true); responseType='text';send();
}}
function cb(){if(this.readyState===4)document.getElementById('A350')
                                             .innerHTML=tbl(this.responseText); }
function tbl(csv){ // do whatever is necessary to create your table here ...
 return csv.split('\n')
           .map(function(tr,i){return '<tr><td>'
                                     +tr.replace(/\t/g,'</td><td>')
                                     +'</td></tr>';})
           .join('\n'); }
</script>
<table id="A350"></table>

        <script src="d3.min.js?v=3.2.8"></script>

        <script type="text/javascript"charset="utf-8">
            d3.text("data.csv", function(data) {
                var parsedCSV = d3.csv.parseRows(data);

                var container = d3.select("body")
                    .append("table")

                    .selectAll("tr")
                        .data(parsedCSV).enter()
                        .append("tr")

                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
            });
        </script>
       
       
    <head>
        <meta charset="utf-8">
        <style>
            table {
                border-collapse: collapse;
                border: 2px black solid;
                font: 12px sans-serif;
            }

            td {
                border: 1px black solid;
                padding: 5px;
            }
        </style>
    </head>
    <body>
        <!-- <script src="http://d3js.org/d3.v3.min.js"></script> -->
        <script src="d3.min.js?v=3.2.8"></script>

        <script type="text/javascript"charset="utf-8">
            d3.text("https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.csv", function(data) {
                var parsedCSV = d3.csv.parseRows(data);

                var container = d3.select("body")
                    .append("table")

                    .selectAll("tr")
                        .data(parsedCSV).enter()
                        .append("tr")

                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
            });
        </script>
    </body>
