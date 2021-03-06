# JavaScript - Selenium Testing

While building a JS/React project I decided to also investigate end user testing, so this poorly named repository was created, a simple javascript framework to use Selenium Version 4.0.0-alpha and nodeJS to perform said testing. This is a little challenging as I want to have a framework in place that can be implemented for any application. This means building a fair amount of base methods to be exported to individual tests. Initial builds will almost certainly be exceedingly rough and will be improved over time.

# Table of Contents

- [Build Status](#Build%20Status)
- [Technology](#Code%20Style%20and%20Technology)
- [Use](#Usage)
- [Future](#Future)
- [Codebase](#Codebase)
- [Credits](#Credits)

# Build Status

This project was started on Jan 22 2021 and is still in development. Right now the code is purely at the green stage of red, green, refactor. It works, but has lots of optimization and tweaking to be done. Next step is to build the same level in Python, before moving over to see how we can implement some BDD technologies.

# Technology

JavaScript, Node, and Selenium

# Use

Phase 1: Technically complete, the goal was to implement JS and Selenium 4.0 just to create simple tests outside of a BDD environment. The code will be going through a clean up over the next week or so, and I'll use it to make a base for a YouTube tutorial.

Phase 2: In planning.

# Future

Wiki build out with documentation, as this is only in initial build that has not happened yet.

As it stands now this project is only going to cover Chrome and Firefox browsers. This may change once I'm happy with what I have, but right out of the box it's only those two.

Plans to also create Python and c# versions of this project, Java has been covered to death (and arguably so has Python) and I've not touched the Ruby language ever.

I may dig into using Selenium Grid with this, but only if the interest is there.

# Codebase

This code can be downloaded here:

# Credits

Coded by Eddie Saunders

# Build Info

| Date            | Notes                                                   |
| :-------------- | :------------------------------------------------------ |
| 19th March 2021 | Moving Project from testing phase to prod type builds   |
|                 | Install mocha and set 60 second timeout in package.json |
