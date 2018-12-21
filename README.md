# blind-watchmaker
A javascript reinterpretation of the evolution model discussed in Richard Dawkins' book The Blind Watchmaker.

The code attempts to recreate the model discussed in the book:
* Create a target string (in this case 'METHINKS IT IS A WEASEL'), which represents the end state of the evoloved form.
* Choose a random string as the original ancestor of the evolved form
* Create 10 mutant children of the original ancestor by changing 1 character in the string in each instance
* Choose the instance of the mutant offspring that most closely matches the target string
* Create 10 mutant children of the best match following the same method as the first generation
* Repeat the cycle until the target is reached

Note: the process stops at 1000 generations in order to avoid killing the browser!

I have created global vars to change:
* Max generations
* Number of offspring per generation
* Number of generations to skip when displaying the evolutionary process.
