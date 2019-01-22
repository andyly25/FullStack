class BinarySearchTree {
    constructor (key = null, value = null, parent = null) {
        /*
         * represents single node in tree
         * node starts with left and right ptrs to their child being null
         */
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert (key, value) {
        /*
         * used to insert an item into the tree
         * if empty, set k,v props
         *  move left or right of tree based on if value
         * is less or greater than parent's value
         * worst case is O(n) if you have to go to very bottom of tree
         * average casee is O(log(n)) if nodes insert equally left and right branches
         * aka balanced tree.
         * best case is O(1) when insert node to the left when all others to right
         */
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    get (key) {
        /*
         * check value of key against the key stored in node
         * recursively follow left or right branch
         * same runtimes of worst: O(n), avg: O(log(n)), best O(1)
         */
        if (this.key === key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.get(key);
        }
        else if (key > this.key && this.right) {
            return this.right.get(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove (key) {
        /*
         * after traveling the tree to find node for removal
         * if node has no children when remove it and references to it with
         * this,_replaceWith(null)
         *
         * if node only has left child, replace node
         * with its left child, and only right, replace with right child
         *
         * if node has both left and right child, you search node contain
         * lowest key on right branch (or highest left branch) and this node
         * acts as replacement for node you are removing and is then removed from
         * tree
         */
        if (this.key === key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith (node) {
        /*
         * if node replaced has a parent, need to fix up references from parent
         * to the replacement node, and replacement node to parent
         * same runtime as the others
         */
        if (this.parent) {
            if (this === this.parent.left) {
                this.parent.left = node;
            }
            else if (this === this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin () {
        /*
         * keep going left until you can go no further left
         * this is lowest node
         */
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

/*
 * 1. Write an algorithm to find the height of a binary search tree
 *
 * one way is to find the height of the left subtree and right subtree
 * then add one from root connecting to subtree
 */

function findHeight (node) {
    if (!node) {
        return 0;
    }
    const leftHeight = findHeight(node.left);
    const rightHeight = findHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function printNodesAtLevelK (root, k) {
    if (root === null) {
        return;
    }
    if (k === 0) {
        console.log(`Node at level k = ${root.value}`);
        return;
    }
    else {
        printNodesAtLevelK(root.left, k - 1);
        printNodesAtLevelK(root.right, k - 1);
    }
}

/*
 * 2. Write an algorithm to check whether an arbitrary binary tree is a binary
 * search tree, assuming the tree does not contain duplicates
 *
 * to find out we have to verify if values on left hand side is less than parent node
 * and nodes on right is greater than parent node
 */
function isBST (node, min = null, max = null) {
    if (!node) {
        return true;
    }
    if (max !== null && node.key >= max) {
        return false;
    }
    if (min !== null && node.key <= min) {
        return false;
    }
    const leftSide = isBST(node.left, min, node.key);
    const rightSide = isBST(node.right, node.key, max);
    return leftSide && rightSide;
}

/*
 * Write an algorithm to find the third largest node in a binary search tree
 * this uses reverse inorder traversal of BST
 * traverse all nodes in decreasing order, and keeps track of count of nodes
 * visited, when count equal to k, we return the value
 *
 * based off of:
 * https://www.geeksforgeeks.org/kth-largest-element-in-bst-when-modification-to-bst-is-not-allowed/
 * only has C++, Java, Python, C# solutions posted
 */
function kthLargestUtil (root, k, c) {
    const count = c;
    // base cases, 2nd condition to avoid unnecessary recursive calls
    if (root === null || count[0] >= k) {
        return;
    }
    // follow reverse inorder traversal so largest element visited first
    kthLargestUtil(root.right, k, c);
    // increment count of visited node
    count[0] += 1;
    // if c becomes k now, then this is k'th largest
    if (count[0] === k) {
        console.log(`k'th largest element is ${root.key} which is ${root.value}`);
        return;
    }
}

function kthLargest (root, k) {
    // initialize count of nodes
    const c = [0];
    // c is passed by reference
    kthLargestUtil(root, k, c);
}

const tree = new BinarySearchTree();
tree.insert(8, 'Tidus');
tree.insert(1, 'Squall');
tree.insert(5, 'Zidane');
tree.insert(14, 'Vaan');
tree.insert(13, 'Cecil');
tree.insert(20, 'Zack');
tree.insert(15, 'Rinoa');

// find height of tree
console.log(`height of the tree is: ${findHeight(tree)}`);
// determing if is a BST
console.log(`is tree valid BST?: ${isBST(tree)}`);
// find kth largest, in our case 3rd, don't forget 0 counts
kthLargest(tree, 2);
