---
layout: post
title: "ES6 Classes Considered Harmful"
modified: 2016-08-21 17:35:10 +0800
tags: [JavaScript, ES6, OOP, Classes]
image:
  feature: 
  credit: 
  creditlink: 
comments: 
share: 
---

It's been awhile since my maiden post, and if I weren't such a lazy bastard, I'd blog more -- but I've been so busy at work getting my head wrapped around the code base (and breaking loads of stuff in the process) that I just haven't been blogging.

At any rate, I just wanted to share some stuff I've come to realise while working on a nearly pure ES6 React codebase that uses classes and more traditional pre-ES6 style prototype-oriented code organisation techniques.

## What's in a Class?

Unless you live under a rock, or work exclusively in legacy front end applications, you've proabably noticed that ES6 introduces the `class` operator. On the surface, this looks a lot like what you'd expect to find in classically-oriented OOP languages like Java, Ruby, or Python. Unfortunately, it is _anything_ but. The `class` operator introduces nothing more than, in my opinion, very insignificant syntactic sugar -- sugar that, in my opinion, tends to obscure the lower level semantics of OOP in JavaScript.

Consider the following code:

{% highlight javascript %}

class Dog {
	constructor(breed) {
		this.breed = breed || 'doge';
	}

	static bark() {
		console.log('Woof!');
	}

	getBreed() {
		console.log(this.breed);
	}
}

const doge = new Dog();

console.log(doge.bark()); // Woof!
console.log(doge.getBreed()); // doge

{% endhighlight %}

Now let's extend our `Dog` class:

{% highlight javascript %}

class ShibaInu extends Dog {
	constructor(breed) {
		super(breed);
	}

	greet() {
		console.log('Such class\n Much sugar\n Wow');
	}
}

const shibe = new ShibaInu('shibe');

ShibaInu.bark(); // Woof!
shibe.getBreed(); // shibe
shibe.greet(); // Such class Much sugar Wow

{% endhighlight %}

Seems like classic OOP. But let's see what we get when we inspect our `shibe` in the console:

<figure>
	<img src="{{ site.url }}/images/es6-classes.png" />
	<figcaption>What our 'classes' really are</figcaption>
</figure>

Look familiar? That's because it is. `class` and `extends` does exactly what we used to do in ES5 with the `prototype` property.

We have the rough equivalent of:

{% highlight javascript %}

function Dog(breed) {
	this.breed = breed || 'doge';
}

Dog.bark = function() { console.log('Woof!'); };
Dog.prototype.getBreed = function() { console.log(this.breed); };

Dog.bark(); // static method

const doge = new Dog();
doge.getBreed(); // instance method

function ShibaInu(breed) {
	Dog.call(this, breed);
}

ShibaInu.bark = Dog.bark;
ShibaInu.prototype = Dog.prototype;
ShibaInu.prototype.greet = function() { console.log('Such class\n Much sugar\n Wow'); };

ShibaInu.bark();

const shibe = new ShibaInu('shibe');
shibe.getBreed();
shibe.greet();

{% endhighlight %}

That's heck of a lot more boilerplate and unnecessary assignments liable to fuck your day up. `class` obviously makes things a lot easier with a neater, less error-prone syntax. But it does hide a lot of the low-level semantics of how OOP in JavaScript _really_ works, which may not be a good thing for newbies coming into the language. It plays a lot with `.constructor` and `.prototype` properties, _and_ `[[Prototype]]`/`__proto__`. Confusing. Not fun to debug. Ugh.

## Let's Create

Actually, ES5 already provides us with a very simple and clean syntax with which to create and extend objects. In my opinion, it's a lot cleaner, and doesn't obscure how JavaScript's OOP system really works -- which in my experience, makes debugging a lot easier, since you have your mental model set straight from the get-go. Better yet, we don't need to use `new` or `.constructor` properties, which contain a bunch of gotchas on which to snag yourself and fuck up your day in the process.

So let's re-write our clunky `Dog` and `ShibaInu` objects, again in ES5 style, but with `Object.create`.

{% highlight javascript %}

const Dog = {
	init: function(breed) {
		this.breed = breed || 'doge';
	},
	bark: function() {
		console.log('Woof!');
	},
	getBreed: function() {
		console.log(this.breed);
	}
}

const ShibaInu = Object.create(Dog);
ShibaInu.greet = function() { console.log('Such class\n Much sugar\n Wow'); };

const shibe = Object.create(ShibaInu);
shibe.init('shibe')
shibe.bark(); // Woof!
shibe.getBreed(); // shibe
shibe.greet(); // Such class Much sugar Wow

{% endhighlight %}

So fresh. So clean. No more `.prototype`. No more `.constructor`. No more 'special' functions with confusing `this` bindings. No more `bind call apply`. Opening up the console, we simply find that `ShibaInu`'s [[Prototype]] is `Dog`, and `shibe`'s [[Prototype]] is ShibaInu! Inheritance successful! No mess! No `this`!

<figure>
	<img src="{{ site.url }}/images/creating-better.png" />
	<figcaption>Prototypical goodness</figcaption>
</figure>

Much easier to understand and reason about than our clusterfuck of magical properties and functions.

This post really is a summary of Kyle Simpson's [excellent work]('https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md'), which does a much better job of explaining this concept, but is _very_ intensive and digs a lot deeper. If you're lazy, this post should demonstrate sufficiently why you should probably use `class` with some reservation.