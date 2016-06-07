---
layout: post
title: "A Simple Maiden Post"
modified: 2016-06-07 09:54:53 +0800
tags: [Scala, Coursera, Martin Odersky, Recursion, Functional Programming]
image:
  feature: 
  credit: 
  creditlink: 
comments: 
share: 
---

Since I didn't have much of an idea of what I should write as my maiden post, I thought I'd just share some thoughts on Martin Odersky's Functional Programming Principles in Scala, which I'm now taking on Coursera, and my solutions for Week 1 and 2's assignments. From here on out, I'm mostly going to use this blog to consolidate the things I learn.

The Substitution Principle
--------------------------

As you probably know, functional programming is derived (like most things in computer science) from a mathematical sub-discipline called [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus). It really is a very simple concept: instead of passing values around, you pass functions, which in turn get _reduced_ to values. In other words, in lambda calculus (and by extension, functional programming -- FP from here), functions _are_ values.

Consider the following Scala:

{% highlight scala %}

def factorizer(n: Int): Int = {
	if (n == 0) 1 else n * factorial(n - 1)
}

{% endhighlight %}

and compare it to the following JavaScript:

{% highlight javascript %}

function factorizer(n) {
	let solution;

	for (var i = 1; i < n, i++) {
		solution = solution * i
	}
}

{% endhighlight %}

See how elegant the Scala function is compared to the imperative JavaScript loop? Substitution enables this. Let's break down our `factorizer` function, subtituting values from left to right:

	// call the function
	factorizer(3)

	// subtitute the call with the function
	3 * factorial (3 - 1)

	// gets reduced to
	3 * factorial(2)

	// gets reduced to
	// skipping the intermediate subtition 2 - 1 for brevity
	3 * 2 * factorial(1)

	// gets reduced to
	3 * 2 * 1 * factorial(0)

	// finally
	3 * 2 * 1 * 1

Call-by-value vs Call-by-name
-----------------------------

An important principle in the computation of values in FP is the concept of call-by-value (CBV) and call-by-name (CBN). You'll find his referred to from time to time in certain JS libraries like Immutable.js, although it's far more important in a 'pure' functional language.

In our example, we utilised CBV: this means, for every step of computation, formal parameters get resolved eagerly. At every step, we resolved `n`, and then resolved the value of the resulting function call to `factorizer`. But we could do it in another way -- namely, CBN.

Consider the following:

{% highlight scala %}
val x = 3
val y = 2

def cbn(x: Int, y: Int): Int  = x
cbn (x, y)
{% endhighlight %}

If we CBN, we get:
	
	cbn(3, y) = 3

If we CBV, we get:

	cbn(3, 2) = 3

In the first example, we didn't substitute the formal parameter y, because if called by name, formal parameters are not substituted _until they are needed_. As such, `y` never got substituted, since we dind't need it. This has ramifications on performance, since a CBV substitutes all values whether or not they're needed. That being said, you have no business definining formal paramters in a function signature that aren't ever used in the function body -- which is why, by default, Scala uses CBV.

That being said, you can force CBN by indicating a parameter type as follows:


{% highlight scala %}
val x = 3
val y = 2

def cbn(x: Int, y: => Int): Int  = x
{% endhighlight %}

In this function definition, the `=>` indicates that the parameter is to be CBN instead of the default CBV.

I hope this was a sufficiently interesting post, as it was for me when Martin Odersky first explained the principle in his excellent course on [Functional Programming Principles in Scala](https://www.coursera.org/specializations/scala), which is now running on Coursera. He explains it better than I could ever hope to, so I highly recommend you invest the couple of hundred dollars and do the course!
