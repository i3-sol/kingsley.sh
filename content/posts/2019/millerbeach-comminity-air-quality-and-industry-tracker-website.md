---
title: Tracking air quality & industry in Gary, Indiana
description: My neighbours and I pitched in and bought a PurpleAir II to track air quality in our community. I've since added weather, plane, boat, train, and traffic tracking, and open-sourced it so other people can track pollution in their community.
createdAt: 2019-10-01 12:00:00
updatedAt: 2019-10-01 12:00:00
img: /i/posts/millerbeach-community/gary-indiana-industry-and-air-quality-tracker.png
alt: my first blog post
---

<div class="container">
    <p>Dubbed the "Magic City" in 1960, Gary, located at the Southernmost tip of the 5th largest fresh-water lake in the world, Lake Michigan, has an <a href="https://allthatsinteresting.com/gary-indiana">interesting history</a>, mainly involving steel manufacturing, with the city actually named after Elbert Henry Gary, who was the founding chairman of the United States Steel Corporation. Gary was home to the world largest steel mill, USS Gary Works, while not the largest in the world anymore, it's still the largest in the USA.</p>
    <blockquote class="text-center my-5 text-monospace"><p>Miller Beach, the secret little beach town where the Indiana Dunes National Park begins! Walk out onto five and a half miles of continuous public beaches, buffered by the gorgeous natural dunes that protect our shore.</p><footer class="blockquote-footer"><cite title="Source Title"><a href="https://www.southshorecva.com/listing/visit-miller-beach/2997/">SouthShore Indiana</a></cite></footer></blockquote>
    <p>Miller Beach is the Easternmost neighbourhood of Gary, and is in the middle between Gary's steel mills 10 miles to the West, and another large steel mill in Portage, the next city over, 5 miles to the East. Nestled in between mega-polluters, but with a beautiful dunes &amp; beaches, nature reserves, and big fresh water swimming pool!</p>
    <blockquote class="text-center my-5 text-monospace"><p>Indiana Dunes National Park, which includes large areas in and around Miller Beach, is a place of extremely high biodiversity.[81] The neighborhood's Miller Woods area alone is home to 287 species of plants and animals,[39] including the federally endangered Karner Blue butterfly and the federally threatened Pitcher's thistle.[82]</p><footer class="blockquote-footer"><cite title="Source Title"><a href="https://en.wikipedia.org/wiki/Miller_Beach#Flora_and_fauna">Miller Beach's Flora and Fauna on Wikipedia</a></cite></footer></blockquote>
    <p>Miller Beach, like most of Northern Indiana, is exposed to pollution from the steel mills both by <a href="https://www.chicagotribune.com/news/ct-met-burns-harbor-steel-mill-lead-pollution-20180723-story.html">air</a>, and by <a href="https://www.in.gov/idem/cleanwater/2576.htm">water</a>. In October 2018, after my neighbors complained of a foul odor causing headaches and nausea, and while the federal government do track <a href="https://www.airnow.gov/?reportingArea=Hammond-Gary&stateCode=IN">some air quality metrics</a>, we took matters into our own hands and purchased an air quality sensor for our neighbourhood to track air quality ourselves. It's since grown, and we now track industry that affects air quality, such as air traffic thanks to <a href="https://aviation-edge.com/?utm_source=gary-indiana-opensource-air-monitor-footer">Aviation Edge</a>, boat/tanker traffic thanks to <a href="https://www.fleetmon.com/my/ais-stations?utm_source=gary-indiana-opensource-air-monitor-footer">Fleet Mon</a>, traffic jams, trains, weather, etc.</p>
    <p>Check it out: <a href="https://millerbeach.community">millerbeach.community</a></p>
    <figure class="figure">
      <img src="/i/posts/millerbeach-community/purple-air-quality-and-fleetmon-ais-sensor.jpg" class="img-fluid" alt="Air Quality tracking provided by a PurpleAir II sensor" />
      <figcaption class="figure-caption">FleetMon AIS & Purple Air PA-II air quality sensor located in Miller Beach.</figcaption>
    </figure>
    <p>We measure air quality with a Purple Air PA-II, A low cost air quality sensor network providing real time measurement of air quality on a public map. Useful to citizen scientists or air quality professionals alike, PurpleAir sensors are easy to install, requiring only a power outlet and WiFi.</p>
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
