// https://leetcode.com/problems/palindrome-linked-list/description/

function isPalindrome(head) {

    const arr = []

    while (head) {
        arr.push(head.val)
        head = head.next
    }

    for (i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false
    }
    return true
};