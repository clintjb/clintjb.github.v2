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

<iframe src="https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.html" height="450" width="100%" frameborder="0" scrolling="no" seamless="seamless"></iframe>

<iframe width=100%, height=650, src='https://githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.html'></iframe>

<iframe width=100%, height=650, src='https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.html'></iframe>

<iframe width=100%, height=650, src='https://htmlpreview.github.io/?https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.html'></iframe>

    <script src="jquery.js"></script> 
    <script> 
    $(function(){
      $("#includedContent").load("https://htmlpreview.github.io/?https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.html"); 
    });
    </script> 
     <div id="includedContent"></div>

    <script src="jquery.js"></script> 
    <script> 
    $(function(){
      $("#includedContent").load("https://htmlpreview.github.io/?https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.html"); 
    });
    </script> 
     <div id="includedContent"></div>
     
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
