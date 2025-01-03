const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.start = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.start;
  }

  // adds the element to the queue
  enqueue(value) {
    //если нет вообще элементов, добавить в начало
    if (this.size === 0) {
      this.start = new ListNode(value);
    } else {
      let currentElement = this.start;

      //если элементы есть - дойти до последнего, у которого нет next
      while (currentElement.next) {
        currentElement = currentElement.next;
      }

      currentElement.next = new ListNode(value);
    }

    this.size++;
  }

  dequeue() {
    if (!this.start) return null;
    let removedStart = this.start;

    //если всего 1 элемент
    if (this.start === this.size) {
      this.start = null;
      this.size = null;
    } else {
      this.start = this.start.next;
    }

    return removedStart.value;
  }
}

module.exports = {
  Queue
};
