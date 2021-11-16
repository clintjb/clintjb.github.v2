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
  {% for row in site.data.a350_data %}
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
