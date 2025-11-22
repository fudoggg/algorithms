// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const head = new ListNode(0)
    let iterList = head
    let add = false
    while (l1 || l2 || add) {
        const sum = (l1?.val ? l1.val : 0) + (l2?.val ? l2.val : 0) + add;
        add = sum > 9;
        iterList.next = new ListNode(sum % 10);
        iterList = iterList.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }

    return head.next
};