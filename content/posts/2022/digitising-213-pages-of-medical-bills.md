---
title: "Digitising 213 pages of medical bills (WIP)"
description: After posting about the cost of Sterling's 2 week ICU stay, I finally got a full itemised bill of Sterling's entire 7 months in the ICU. The only issue, is that it's all paper-based. Following me along my journey as I digitise 213 pages of medical bills!
starred: false
createdAt: 2022-09-21 12:00:00
updatedAt: 2022-09-21 12:00:00
img: https://raw.githubusercontent.com/kingsloi/medical-billkill/main/screenshot.png
---

<div class="container">

<p class="lead">I finally got a copy of the itemised bill for Sterling's entire ICU stay, over 7 months worth of statements. The only issue is, they're printed on paper, and there's 213 pages of them.</p>

<p class="lead">I could have spent weeks entering each page manually into a spreadsheet, but where would be the fun in doing that? Why spend weeks, when I can spend months building an app instead? 😬</p>

<figure class="figure mt-4 mb-4">
    <img src="/i/example-medical-scanned-statement.jpeg" class="w-75 mx-auto d-block" alt="an example statement">
    <figcaption class="figure-caption">An example of one of the 213 pages</figcaption>
</figure>

<p>After scanning every page, some statements are just one page long, others are many pages long. While their format remains the same, the length of the statement charges &amp; payments differs drastically, which makes it hard to automatically pull OCR data from a statement.</p>

<p>Instead, I built an app to view the statement, the generated OCR data, to correct any mistakes, and enter its data into a database, using the following tech:</p>
<ul>
    <li>Docker</li>
    <li>Laravel 9 (API)</li>
    <li>Vue.js 3 (Frontend/UI)</li>
    <li><a href="https://docparser.com/">DocParser.com</a> - to convert scanned pages in machine readable text, by using their Zonal OCR to extract data from the tables, row-by-row.</li>
</ul>

<p>It's a pretty simple app. You load the scanned statement, and then approve the OCR captured value, or edit the value to match the statement, verbatim. Save the page, rinse, and repeat.</p>

<pre class="v-highlight javascript p-3 my-5">
const str = `"Rinse & Repeat"\n`;
console.log(`${str.repeat(213)}`);
// "Rinse & Repeat"
// "Rinse & Repeat"
// "Rinse & Repeat"
...
</pre>

<p>The accuracy of OCR is around 90-99%, but I needed 100% accuracy, with every dollar accounted for, and totals, balances matching the statement values exactly, with no exceptions.</p>

<p>Which is why I'm building this app.</p>

<h2>Pages Digitised:</h2>
<span class="d-block display-3 font-weight-bold mb-5">54/213</span>

<p>Checkout the Work-In-Progress code in the <a href="https://github.com/kingsloi/medical-billkill">GitHub Repository</a>.</p>

</div>
