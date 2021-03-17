---
title: Tracking air quality & industry in Gary, Indiana
description: My neighbours and I in Miller Beach pitched in and bought a PurpleAir II to track air quality in our community. I've since added weather, plane, boat, train, and traffic tracking, and open-sourced it so other people can track pollution in their communities.
createdAt: 2019-10-01 12:00:00
updatedAt: 2019-10-01 12:00:00
img: /i/posts/millerbeach-community/gary-indiana-industry-and-air-quality-tracker.png
alt: gary indiana air quality tracker
---

<div class="container">

  <p>link: <a href="https://millerbeach.community">https://millerbeach.community</a></p>

  <p>Dubbed the "Magic City" in 1960, Gary is located at the southernmost tip of Lake Michigan, the fifth largest freshwater lake in the world. Gary has a <a href="https://allthatsinteresting.com/gary-indiana">rich history</a>, mainly involving steel manufacturing, and was actually named after Elbert Henry Gary, who was the founding chairman of the United States Steel Corporation. The city is home to the vast and sprawling USS Gary Works which, while no longer the largest in the world, is still the biggest facility of its kind in the USA.</p>

  <p>Miller Beach is the easternmost neighbourhood of Gary, and lies between Gary's steel mills ten miles to the west, and another large steel mill in Portage, the next city over, five miles to the east. Our beautiful community, complete with <a href="https://www.youtube.com/watch?v=0xCpyVrdt3c">stunning dunes and beaches</a>, nature reserves, and big freshwater swimming pool, is nestled in between two mega-polluters.</p>

  <blockquote class="text-center my-5 text-monospace"><p>Indiana Dunes National Park, which includes large areas in and around Miller Beach, is a place of extremely high biodiversity [...] The neighborhood's Miller Woods area alone is home to 287 species of plants and animals [...] including the federally endangered Karner Blue butterfly and the federally threatened Pitcher's thistle.</p><footer class="blockquote-footer"><cite title="Source Title"><a href="https://en.wikipedia.org/wiki/Miller_Beach#Flora_and_fauna">Miller Beach's Flora and Fauna on Wikipedia</a></cite></footer></blockquote>

  <p>Miller Beach, like most of Northern Indiana, is exposed to pollution from the steel mills both by <a href="https://www.chicagotribune.com/news/ct-met-burns-harbor-steel-mill-lead-pollution-20180723-story.html">air</a> and by <a href="https://www.in.gov/idem/cleanwater/2576.htm">water</a>. In October 2018, my neighbors complained of a foul odor causing headaches and nausea. The federal government does <a href="https://www.airnow.gov/?reportingArea=Hammond-Gary&stateCode=IN">track some</a> air quality metrics, but these are limited in scope so we took matters into our own hands and purchased an air quality sensor for our neighborhood so we could track the data ourselves. The scale of our mission has since grown, and we now use additional data inputs to track other sources of pollutants affecting air quality, such as air, road, boat and tanker traffic, train movements, and weather, etc.</p>

  <figure class="figure">
    <img src="/i/posts/millerbeach-community/purple-air-quality-and-fleetmon-ais-sensor.jpg" class="img-fluid" alt="Air Quality tracking provided by a PurpleAir II sensor" />
    <figcaption class="figure-caption">FleetMon AIS & Purple Air PA-II air quality sensor located in Miller Beach.</figcaption>
  </figure>

  <p>We measure basic air quality with a Purple Air PA-II, a low-cost air quality sensor network providing real time measurement of air quality on a public map. Useful to citizen scientists or air quality professionals alike, PurpleAir sensors are easy to install, requiring only a power outlet and WiFi.</p>

  <p>Taking things a step further, thanks to <a href="https://aviation-edge.com/?utm_source=gary-indiana-opensource-air-monitor-blog-post">Aviation Edge</a> we are able to track air traffic to/from the local international airports: O'Hare (ORD), Midway (MDW), Gary (GYY).</p>

  <figure class="figure">
    <img src="/i/posts/millerbeach-community/aviation-edge-banner.png" class="img-fluid" alt="Lake Michigan boat/ship tracking provided by AIS" />
    <figcaption class="figure-caption">image source/credits: aviation-edge.com</figcaption>
  </figure>

  <p>And thanks to <a href="https://www.fleetmon.com/my/ais-stations?utm_source=gary-indiana-opensource-air-monitor-blog-post">FleetMon</a> we can also keep tabs on ships/boats/tankers traveling to/from the mills/refineries in the region.</p>

  <figure class="figure">
    <img src="/i/posts/millerbeach-community/fleetmon-vessel-tracking.png" class="img-fluid" alt="Lake Michigan boat/ship tracking provided by AIS" />
    <figcaption class="figure-caption">A real-world example of a ship in Lake Michigan traveling through the Great Lakes going to the industry in the region, provided by FleetMon/AIS.</figcaption>
  </figure>

  <p>Combining this information, I used Express.js and Vue.js to create a map showing all the data in one place, allowing my neighbors and I to track air quality and industry in real time: <a href="https://millerbeach.community">https://millerbeach.community</a></p>

  <p>I'll write about the tech behind this soon.</p>
</div>
