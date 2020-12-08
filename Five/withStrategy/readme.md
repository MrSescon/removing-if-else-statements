The process to refactor this hot piece of mess, is as following:
Extract each branch into separate strategy classes with a common interface
Dynamically find all classes implementing the common interface
Decide which strategy to execute based on input
The code that’ll replace the example above looks like this. And yes, it’s way more code. It requires you to know how type discovery works. But dynamically extending an application is an advanced topic.