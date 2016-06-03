---
layout: project
title: "Easyloans"
description: "A website built on Symfony2 with MagicScroll."
modified: 2016-05-30 16:36:46 +0800
tags: [PHP, Symfony2, Website, jQuery, MagicScroll]
type: Website
stack:
  front: HTML/CSS/jQuery
  back: PHP/Symfony2
  infrastructure: Digital Ocean VPS
image: projects/easyloans/featured.jpg
comments: 
share: 
---

<figure>
	<img src="{{ site.url }}/images/projects/easyloans/devices.jpg"/>
</figure>

<a href="http://easyloans.sg" class="black project md-button">Visit Site</a>

### Frontend: Semantic UI

### Backend: PHP/Symfony2

### Infrastructure: Digital Ocean VPS

My first paid project. I had wanted to explore custom CMS options, so this website is more than a little over-engineered, being powered by Symfony2's Sonata suite of CMS bundles. Here, Sonata is significantly modified to provide abstraction over 'slides', especially with respect to the home page, which uses MagicScroll. Because of this, it was necessary to provide a controlled but easy way to introduce new slides with pre-baked metadata embedded in HTML tags for MagicScroll to do its job.

At this time, I had no idea that `window.history` existed in the EcmaScript API, nor any idea of how to use it. As such, the website does not push new URLs into the stack as pages are navigated. In subsequent projects, this problem was remedied.

<figure>
	<img src="{{ site.url }}/images/projects/easyloans/homepage/stitched.jpg"/>
	<figcaption>Home</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/easyloans/modal.png"/>
	<figcaption>Modal - available on every page</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/easyloans/products_svcs.png"/>
	<figcaption>Products & Services</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/easyloans/apply/stitched.jpg"/>
	<figcaption>Loan Application Form</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/easyloans/blog.png"/>
	<figcaption>Blog - eventually not used by client.</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/easyloans/faq/stitched.jpg"/>
	<figcaption>FAQ - utilises an accordion for less scrolling.</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/easyloans/contact_us.png"/>
	<figcaption>Contact Us</figcaption>
</figure>