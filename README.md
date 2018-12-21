# blind-watchmaker

A JavaScript reinterpretation of the evolution model discussed in Richard Dawkins' 1986 book The Blind Watchmaker.

* Creates a target string (in this case 'METHINKS IT IS A WEASEL'), which represents the end state of the evoloved form.
* Generates a random string as the original ancestor of the evolved form.
* Creates 15 mutant children of the original ancestor by changing 1 character in the string in each instance.
* Chooses the instance of the mutant offspring that most closely matches the target string.
* Creates 15 mutant children of this best match following the same method as for the first generation.
* Repeats the cycle until the target is reached.

Note: the process stops at 1000 generations in order to avoid killing the browser!

I have created global vars to change:
* Max generations
* Number of offspring per generation
* Number of generations to skip when displaying the evolutionary process.
