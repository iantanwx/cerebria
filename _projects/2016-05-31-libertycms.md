---
layout: project
title: "LibertyCMS"
modified: 2016-05-31 15:00:13 +0800
tags: [Node.js, AngularJS]
type: CMS
stack:
  front: AngularJS
  back: Node.js/Express.js
  infrastructure: AWS EC2/ECS/Docker
image: projects/libertycms/featured.jpg
comments: 
share: 
---

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/devices.jpg"/>
</figure>

LibertyCMS was initially built to power [this project](http://app.bestcarinsurance.com.sg).

It was built from scratch to be a next-generation CMS with a responsive, AngularJS-based dashboard/administration console, with an easily extendible REST API built on Node.js/Express.js. The client is built on AngularJS 1.4.x, and features the excellent [Angular Material](https://material.angularjs.org/latest/) set of components, which is supported by Google. 

Since it was my first non-trivial REST API, its code at times fail to follow RESTful specifications to a T, and, therefore, is presently being refactored. The client is also being re-built and re-designed with React.js and Redux, and is still in the design phase of development.

A staging environment sandbox is available [here](#). It's deployed to a nano instance in AWS as a set of Docker containers, using ECS.

### User Management

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/users/index.jpg"/>
	<figcaption>Index</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/users/create.jpg"/>
	<figcaption>Create</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/users/edit.jpg"/>
	<figcaption>Update/Delete</figcaption>
</figure>

### Content Management

__Pages__

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/pages/page_index.jpg"/>
	<figcaption>Index</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/pages/page_create_stitched.jpg"/>
	<figcaption>Create</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/pages/page_edit_stitched.jpg"/>
	<figcaption>Update/Delete</figcaption>
</figure>

__Cards__

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/cards/card_index_stitched.jpg"/>
	<figcaption>Index</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/cards/card_create_stitched.jpg"/>
	<figcaption>Create</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/cards/card_edit_stitched.jpg"/>
	<figcaption>Update/Delete</figcaption>
</figure>

__Media__

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/media/media_index_stitched.jpg"/>
	<figcaption>Index</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/media/media_create.jpg"/>
	<figcaption>Create - media files are uploaded from the browser directly to S3</figcaption>
</figure>

<figure>
	<img src="{{ site.url }}/images/projects/libertycms/media/media_edit.jpg"/>
	<figcaption>Update/Delete</figcaption>
</figure>