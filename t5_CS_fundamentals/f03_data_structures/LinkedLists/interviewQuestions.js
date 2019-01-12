function Node (data, next) {
    this.data = data;
    this.next = next;
}

/*
 * 1. Write an algorithm to find the middle element of a linked list without
 * using the .length property
 *
 * the simplest way I can think of is to use a loop to increment a counter
 * then at the end you divide count by 2 and use that to find the middle
 * element. this uses 2 loops, the next uses only 1 loop, both O(n), but
 * obviously the single loop is faster
 *
 * coderbyte's solution is to have a pointer going one at a time and a
 * faster pointer going 2 at a time. Where by time faster reaches the end,
 * the slow pointer is at the middle.
 * Run time is O(n) for this.
 */

function middleElement (head) {
    // setup pointers to both start at the head
    let fastPointer = head;
    let slowPointer = head;
    // loop through linked list
    // so when slowpointer reaches middle, fast pointer reaches end
    while (fastPointer.next !== null && fastPointer.next.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    return slowPointer.data;
}

// setup some nodes and connect them to each other
// the linked list looks like:
// (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
const n1 = new Node('apple', null);
const n2 = new Node('bapple', n1);
const n3 = new Node('snapple', n2);
const n4 = new Node('wapple', n3);
const n5 = new Node('mapple', n4);
const n6 = new Node('dapple', n5);
const n7 = new Node('papple', n6);
const n8 = new Node('pineapple', n7);

// assign node to head which function as entry into linked list
const head = n8;
console.log(`middle element of linked list is: ${middleElement(head)}`);

/*
 * 2. Write an algorithm to find the third element from the end of a
 * linked list without using the .length property
 *
 * I'm using two pointers again, if this was n from end, then I would
 * be using n - 1 from the head
 */
function findThirdFromEnd (head) {
    let ptr1 = head;
    let ptr2 = head;

    // check if we have at least 3 nodes
    if (ptr2.next === null || ptr2.next.next === null) {
        throw new Error('Need at least 3 nodes');
    }

    for (let i = 0; i < 3; i += 1) {
        ptr2 = ptr2.next;
    }
    while (ptr2 !== null) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return ptr1.data;
}

console.log('third from end is: ', findThirdFromEnd(head));

/*
 * Write an algorithm to reverse a linked list
 *
 * 1st method is iterative method, O(n) time and O(1) space complexity
 */
function reverseLinkedList (linkedList) {
    let node = linkedList;
    let previous = null;

    while (node) {
        // saving next
        const save = node.next;
        //  reverse the pointer
        node.next = previous;
        // increment previous to current node
        previous = node;
        // increment node to next node or null at end of list
        node = save;
    }
    return previous;
}

console.log('reversed linked list', reverseLinkedList(n8));

// look into recursive method next time
