"In file: Ep: 15 to Ep: 17";

"EP: 15 -> Async JS & Event Loop";
/**
 * JS is synchronous single-threaded language.
 * It has one call-stack.
 * Just do one task at a time.
 * Call-Stack present inside a JS Engine.
 * All JS Code run inside a call-stack.
 * It JS-Engine have to access local-storage, timer or anything from browser: -> WEb APIs (with the help of Web-api it will be available).
 * WEB-APIs: Gives an access to callstack to use these things
 * WEB-APIs as: setTimeout, DOM APIs, fetch(), local-storage, console and location.
 * 
 * Event-Loop: It continuously montior the callstack-callback-queue.
 * Microtask-Queue: Same as call-back queue, but high in priority.
 * What comes to Micro-task Queue: All the callback fxn's comes through promises & Mutation Observer (Read about this). And rest things goes on callback Queue as SetTimeout, DOM APIs, and more.
 */

"EP: 16 -> JS Engine";



"EP: 17 -> setTimeout (Trust Issues)"
// eg:

// console.log("first")
// setTimeout(function cb() {
//     console.log("call_back");
// }, 5000);

// console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }

// console.log("while loop end");


'Ep: 18-> Higher Order Functions'
const radius = [4, 3, 2, 1];
const calculateArea = function(radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log(calculateArea(radius));

import java.util.Arrays;

class Solution {
    public static int aggressiveCows(int[] stalls, int k) {
        Arrays.sort(stalls);  // Sort stall positions
        int low = 1;  // Minimum possible distance
        int high = stalls[stalls.length - 1] - stalls[0];  // Maximum possible distance
        int result = 0;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (canPlaceCows(stalls, k, mid)) {
                result = mid;
                low = mid + 1;  // Try for a bigger minimum distance
            } else {
                high = mid - 1;  // Try for a smaller distance
            }
        }
        return result;
    }

    private static boolean canPlaceCows(int[] stalls, int k, int minDist) {
        int count = 1;
        int lastPosition = stalls[0];

        for (int i = 1; i < stalls.length; i++) {
            if (stalls[i] - lastPosition >= minDist) {
                count++;
                lastPosition = stalls[i];
            }
        }
        return count >= k;
    }
}



class Solution {
    public static int findPages(int[] arr, int k) {
        int n = arr.length;
        if (k > n) return -1; // Not enough books

        int low = getMax(arr);
        int high = getSum(arr);
        int result = -1;

        while (low <= high) {
            int mid = (low + high) / 2;
            if (isFeasible(arr, k, mid)) {
                result = mid;
                high = mid - 1; // Try to minimize max pages
            } else {
                low = mid + 1;
            }
        }
        return result;
    }

    private static boolean isFeasible(int[] arr, int k, int limit) {
        int students = 1, pages = 0;

        for (int page : arr) {
            if (pages + page > limit) {
                students++;
                pages = page;
                if (students > k) return false;
            } else {
                pages += page;
            }
        }
        return true;
    }

    private static int getMax(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            max = Math.max(max, num);
        }
        return max;
    }

    private static int getSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }
}


