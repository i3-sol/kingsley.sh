---
title: Tracking air quality & industry in Gary, Indiana
description: My neighbours and I pitched in and bought a PurpleAir II to track air quality in our community. I've since added weather, plane, boat, train, and traffic tracking, and open-sourced it so other people can track pollution in their community.
createdAt: 2019-10-01 12:00:00
updatedAt: 2019-10-01 12:00:00
img: /i/posts/millerbeach-community/purple-air-quality-sensor.jpg
alt: my first blog post
---

<div class="container">
    <p>In October 2018, after my neighbors complained of a foul odor causing headaches and nausea, we took matters into our own hands and purchased an air quality sensor for our neighbourhood to track air quality ourselves.</p>
    <p>Check it out: <a href="https://millerbeach.community">millerbeach.community</a></p>
    <figure class="figure">
      <img src="/i/posts/millerbeach-community/purple-air-map-view.png" class="img-fluid" alt="Air Quality tracking provided by a PurpleAir II sensor" />
      <figcaption class="figure-caption">A map showing the current & previous air quality from the sensor located in Miller Beach.</figcaption>
    </figure>
    <p>Taking it a step further, thanks to <a href="https://aviation-edge.com/?utm_source=gary-indiana-opensource-air-monitor-auther">Aviation Edge</a>, we were able to track air traffic to/from the local international airports: O'Hare (ORD), Midway (MDW), Gary (GYY).</p>
    <figure class="figure">
      <img src="/i/posts/millerbeach-community/aviation-edge-banner.png" class="img-fluid" alt="Lake Michigan boat/ship tracking provided by AIS" />
      <figcaption class="figure-caption">image source/credits: aviation-edge.com</figcaption>
    </figure>
    <p>&hellip;and ships/boats/tankers traveling to/from the mills/refineries in the region thanks to <a href="https://www.fleetmon.com/my/ais-stations?utm_source=gary-indiana-opensource-air-monitor-auther">FleetMon</a>.</p>
    <figure class="figure">
      <img src="/i/posts/millerbeach-community/fleetmon-vessel-tracking.png" class="img-fluid" alt="Lake Michigan boat/ship tracking provided by AIS" />
      <figcaption class="figure-caption">A real-world example of a ship in Lake Michigan traveling through the Great Lakes going to/from the Steel Mills/Refineries in the region, provided by FleetMon/AIS.</figcaption>
    </figure>
    <p>Combining it all together, I used Express.js & Vue.js to create a map of all the data, allowing my neighbours to track air quality & industry in real time.</p>
    <figure class="figure">
      <img src="/i/posts/millerbeach-community/millerbeach.community-example.png" class="img-fluid" alt="Industry in/around Miller Beach" />
      <figcaption class="figure-caption">A screenshot of the <a href="https://millerbeach.community">millerbeach.community</a> website showing the top 10 polluters in NWI, planes, traffic congestion, boats, &amp; weather in/around Miller Beach.</figcaption>
    </figure>
</div>
