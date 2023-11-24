# How Filesystem Works :

Due to async nature of nodejs, tasks compelete in random order, for controlling that random order tasks in a specific way, we have two method :

- Making CallBacks in Callbacks ( In this case, each callback will run after parent callback and flow of program will be in controlled )

* Using async await ( fs.promises )

## Handling Large Files

If you're working with large files, you have to convert them into streams so the tasks can be done much faster and efficient
