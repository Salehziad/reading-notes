# stack and queue
- Stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle. Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle.

- A stack is an ordered list of elements where all insertions and deletions are made at the same end, whereas a queue is exactly the opposite of a stack which is open at both the ends meaning one end is used to insert data while the other to remove data.

- Stacks are very useful for its backtracking features. For example, parsing questions tend to use stacks because of the LIFO property. Stacks can be used to implement recursive solutions iteratively. Queues are useful when the ordering of the data matters as it preserves that ordering.

- In queue every time you pop the first element, the whole queue must be shifted. However in stack, you don''t need to shift it when you pop the last element. So, stack should be faster.

- The diagrammatic representation of stack is given below: Array: An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.