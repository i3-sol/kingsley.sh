---
title: "The cost of two weeks in an pediatric/infant ICU"
description: Curious how much common medications such as acetaminophen/paracetamol cost in an ICU? What about the actual daily room cost in an ICU? Or, specific treatments/labs? What about diaper cream? I'm sharing the itemised bill of one of my daughter's 5 ICU addmissions to highlight the (pre-insurance) cost of being in a pediatric/infant Intensive Care Unit.
starred: true
createdAt: 2021-06-25 12:00:00
updatedAt: 2021-07-27 12:00:00
---

<div class="container">
  <p class="lead">I've decided to share a hospital bill from one of my daughter Sterling's shortest ICU stays. My little girl lost her battle to complications arising from her congenital heart disease on May 11th 2021. Why am I sharing one of her (pre-insurance) bills? Because, why not? If I can't change the issue immediately, I can at least try to bring attention to how insane it's been, in a pandemic, no doubt.</p>

  <p>Sterling was born with a rare variant of a heart disease called Hypoplastic Left Heart Syndrome on September 8th, 2020. She was ultimately diagnosed with a very rare genetic condition called Kabuki syndrome at three months old. Like other syndromes, features of Kabuki syndrome can be mild or severe. Unfortunately, Sterling was severely affected by hers.</p>

  <p class="mb-0">Sterling was in a pediatric ICU for 207 days, through 4 ICU admissions. Thankfully, we were able to experience life at home with our little girl, albeit not for long. She got to meet her (fur) brothers, her room, her crib, the beautiful sunsets of Lake Michigan/Chicago/Gary, Indiana, bath times, some family, etc.</p>

  <figure class="figure mt-4 mb-4">
    <img src="https://sterlingstrong.foundation/i/banksys-balloon-girl.gif" class="mw-100" title="photos by Wendy Swanson Photography">
  </figure>

  <p>We knowingly walked a fine line with Sterling's condition; even doctors commented on the small amounts of medication Sterling was receiving (such as 0.5ml/hr) were laughable. Sterling was hypotonic, insulinemic and had other endocrine issues. She had only had one functioning kidney, she suffered from moderate/severe hearing loss and hip dysplasia. She had a total of 9 surgeries. She was G (gastro/stomach) and J (jejunum/small intestine) fed. She had tubes in her ears. She received weekly IgG treatments to treat her immunodeficiency, and unfortunately, that isn't even all of Sterling's conditions. Kabuki syndrome affected Sterling much more than that.</p>

  <p>The bill I am sharing is from one of our shortest and most unnecessary ICU stays. Sterling was admitted after a regular/scheduled checkup because her blood work showed she had extremely low sodium levels. As we later found out, this was likely caused by my wife and I trying to treat Sterling's reflux, but as we now know, stomach acid contains a lot of your body's sodium.</p>

  <p>Not long after we were re-admitted, once the initial admission process calmed down, and Sterling was stabilised, a few millilitres of sodium later, and we were on our way home (for another nine days before being re-admitted again).</p>

  <p>After the first bill of $2,500,000+, $260,000 is should be a walk in the park... right?</p>

  <p>Thank goodness I have insurance, but it didn't stop me worrying knowing that I'm an admission away from potential bankruptcy.</p>

  <p class="mb-5">Shout out to the people who lost their jobs during the pandemic (or any other reason) and therefore their insurance, and were either sick themselves or had sick children, how can/could someone afford this?</p>
  <cost-of-two-weeks-in-the-icu></cost-of-two-weeks-in-the-icu>
  <p class="lead mt-5 font-weight-bold small">How did I get the bill in JSON?</p>
  <p class="small">Well, I opened up the hospital's bill in the browser, ran some JavaScript to spit out the contents of the span the item's name was in, as well as the category, and price. Then, I copied them over to Sublime Text, used the multi-line tool, edited each line (simultaneously) to be wrapped in quotes, then keyed the objects/array how I wanted it, finished it off by linting it. As duplicates were in the same bill (such as for different days) and billed under various codes, I used regex to ignore the code difference and finished by grouping the duplicates into one.</p>
</div>

