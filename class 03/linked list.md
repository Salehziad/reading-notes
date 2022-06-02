# Linked List
>- Each element in a linked list is called a node. A single node contains data and a pointer to the next node which helps in maintaining the structure of the list. The first node is called the head; it points to the first node of the list and helps us access every other element in the list.
>- A linked list can be small or huge, but no matter the size, the parts that make it up are actually fairly simple. A linked list is made up of a series of nodes, which are the elements of the list.

# Why Linked List? 
Arrays can be used to store linear data of similar types, but arrays have the following limitations. 
>1) The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage. 
>2) Inserting a new element in an array of elements is expensive because the room has to be created for the new elements and to create room existing elements have to be shifted but in Linked list if we have the head node then we can traverse to any node through it and insert new node at the required position.
For example, in a system, if we maintain a sorted list of IDs in an array id[]. 
id[] = [1000, 1010, 1050, 2000, 2040]. 
And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000). 
Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete 1010 in id[], everything after 1010 has to be moved due to this so much work is being done which affects the efficiency of the code.
Advantages over arrays 
>>1) Dynamic size 
>>2) Ease of insertion/deletion