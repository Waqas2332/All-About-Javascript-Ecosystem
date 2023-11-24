# How Filesystem Works :

Due to async nature of nodejs, tasks compelete in random order, for controlling that random order tasks in a specific way, we have two method :

- Making CallBacks in Callbacks ( In this case, each callback will run after parent callback and flow of program will be in controlled )
