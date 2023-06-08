# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1- First, if an event is not provided, the deterministicPartitionKey method will return the candidate variable with the value of TRIVIAL_PARTITION_KEY, which is "0". So I assigned TRIVIAL_PARTITION_KEY to candidate right at the beginning of the code when the variable is declared. By doing this, I removed 1 'if' clause on line 17.

2- On line 8, we check if event exists, and then we check if there is a property of it, we can do this on the same line and remove 1 more 'if' clause.

3- On line 18, we check if candidate is a string, if not, we convert using JSON.stringfy. But in the code above we can see that there is already a similar conversion, when a partition_key is not provided in event. So the conversion done on line 18 can only be for the case when there is a partition_key and it is not a string, so I take this conversion inside the 'if' clause on line 9.

By doing this steps, I was able to remove 6 lines of code, and make the code much more readable.
