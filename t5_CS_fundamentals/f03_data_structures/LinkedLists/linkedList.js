class LinkedList {
    // linked list (LL) has a len and head.
    // head always contains 1st node, represented by null
    constructor () {
        this.length = 0;
        this.head = null;
    }

    insert (index, value) {
        /*
         * to insert value, we must created a new node rep by JS obj.
         * two properties: value and pointer to next node
         * performance if at front of list O(1) and average is O(n) because of find
         */
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }
        const newNode = {
            value
        };

        // if insert value at start, you set the new node as the head
        if (index === 0) {
            newNode.next = this.head;
            this.node = newNode;
        }
        else {
            // find node we want to insert after
            // this iterates through nodes jumping to the next one each time
            // until correct node has been found
            // update node pointers so prevNode points to newNode and newNode
            // points to the nextNode.
            const node = this._find(index - 1);
            newNode.next = node.next;
            node.next = newNode;
        }
        this.length += 1;
    }

    get (index) {
        // just uses _find method and returns value, runtime O(n)
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return this._find(index).value;
    }

    remove (index) {
        if (index < 0 || index >= this.length) {
            throw new Error('index out of bounds!');
        }

        // if remove from head, you update head ref to point to 2nd node
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            // find the node before the one we want to remove
            // then update its next pointer to skip over removed node
            const node = this._find(index - 1);
            node.next = node.next.next;
        }
        this.length -= 1;
    }
}
