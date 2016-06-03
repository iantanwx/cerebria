---
layout: project
title: "HollerOut"
modified: 2016-05-31 14:57:03 +0800
tags: [jQuery, React.js, WordPress, PHP]
type: Website
stack:
  front: HTML/CSS/jQuery/React.js
  back: WordPress/Bedrock/Trellis
  infrastructure: AWS EC2
image: projects/hollerout/featured.jpg
comments: 
share: 
---

<figure>
	<img src="{{ site.url }}/images/projects/hollerout/devices.jpg"/>
</figure>

<a href="http://hollerout.co" class="black project md-button">Visit Site</a>

### Frontend: HTML/SASS/React.js/jQuery

### Backend: PHP/WordPress

### Infrastructure: AWS EC2

HollerOut was a start up I worked on.

Unfortunately, it did not survive to see its second iteration. This website was built with [`modular-scale`](https://github.com/modularscale/modularscale-sass) and SASS to promote better CSS organisation.

The 'How it Works' page contains a single React.js component, which was custom-built specifically for this project. Webpack was used to bundle all its dependencies, including CSS Modules. It loads all images lazily, and caches them with an ES6 `map` in order to prevent unnecessary network calls.

The website utilizes Bedrock, a production-grade boilerplate package for WordPress, and Trellis, which utilises Ansible to optimize and provision servers for WordPress. Both were modified to better fit the project.

<figure>
	<img src="{{ site.url }}/images/projects/hollerout/home/stitched.jpg"/>
	<figcaption>Home</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/hollerout/how_it_works/stitched.jpg"/>
	<figcaption>How it Works</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/hollerout/blog/stitched.jpg"/>
	<figcaption>Blog</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/hollerout/contact/stitched.jpg"/>
	<figcaption>Contact Form</figcaption>
</figure>