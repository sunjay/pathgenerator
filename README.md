# Proof of Concept of Path Generation Algorithm for Tile Universe

This is related to my project [tile-universe](http://sunjay.github.io/tile-universe/). If you haven't seen it, go check it out!

This proof of concept generates a smooth path through any arbitrary geometry. 

Since it's just a proof of concept for a much more robust algorithm, it only works for the case I've demonstrated. This project is the bulk of the algorithm written in a fairly unoptimized way. It proves that the algorithm can generate a smooth path.

![Path generated within a simple geometry](http://i.imgur.com/CE8tT1p.png)

It uses the geometry edges to generate a path from boundary to boundary.

![Path generated through a skewed geometry](http://i.imgur.com/h2z6aPv.png)

Automatically adjusts even when the geometry is skewed a bit.

