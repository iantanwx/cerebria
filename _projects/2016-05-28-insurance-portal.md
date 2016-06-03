---
layout: project
title: "Insurance Portal"
modified: 2016-05-28 15:20:29 +0800
tags: [Node.js, AngularJS, Fullstack]
type: Web App
stack:
  front: AngularJS
  back: Node.js/Express.js
  infrastructure: Heroku
image: projects/insured_united/insured_united_logo.jpg
comments: 
share: 
---

<figure>
	<img src="{{ site.url }}/images/projects/insured_united/devices.jpg"/>
</figure>

<a href="http://app.bestcarinsurance.com.sg" class="black project md-button">Visit Site</a>

This project was the first paid non-trivial web app I wrote with a full JavaScript stack. It exposes a RESTful HTTP API, and comes with two clients -- a user-facing client, and an admin dashboard which functions as a lightweight CMS. Both are responsive and were designed mobile-first.

I rolled my own CMS as the other viable alternatives were either too feature-rich and heavyweight for the purposes of this project (Keystone.js), or not flexible enough to accomodate the unique needs of this client.

The CMS is presently being refactored. Since it was the first REST API I built, mistakes were made that should be corrected. The admin dashboard will also undergo a full rebuild with React.js, as Angular 2 is, in my opinion, too opionated. When refactoring is complete, I will open source the CMS for the benefit of other developers looking for a lightweight yet customisable CMS.

<figure>
	<img src="{{ site.url }}/images/projects/insured_united/home/home.jpg"/>
	<figcaption>Home</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/insured_united/sos/stitched.jpg"/>
	<figcaption>SOS - utilises location API</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/insured_united/workshops/stitched.jpg"/>
	<figcaption>Workshop index</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/insured_united/other_workshops/stitched.jpg"/>
	<figcaption>Index for other insurance types</figcaption>
</figure>