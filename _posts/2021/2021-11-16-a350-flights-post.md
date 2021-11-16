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

<table>
  {% for row in https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.csv %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>


<script>
window.onload=function(){ with (new XMLHttpRequest()) {
  onreadystatechange=cb; open('GET','https://raw.githubusercontent.com/clintjb/A350-Tracking/main/flight_data_a350.csv',true); responseType='text';send();
}}
function cb(){if(this.readyState===4)document.getElementById('main')
                                             .innerHTML=tbl(this.responseText); }
function tbl(csv){ // do whatever is necessary to create your table here ...
 return csv.split('\n')
           .map(function(tr,i){return '<tr><td>'
                                     +tr.replace(/\t/g,'</td><td>')
                                     +'</td></tr>';})
           .join('\n'); }
</script>
<table id="A350"></table>
