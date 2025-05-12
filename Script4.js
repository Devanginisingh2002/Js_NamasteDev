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


import java.util.*;

class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    public ArrayList<Integer> spirallyTraverse(int mat[][]) {
        ArrayList<Integer> total = new ArrayList<>();
        int top = 0;
        int bottom = mat.length - 1;
        int left = 0;
        int right = mat[0].length - 1;

        while (top <= bottom && left <= right) {
            // Traverse from left to right
            for (int i = left; i <= right; i++) {
                total.add(mat[top][i]);
            }
            top++;

            // Traverse downwards
            for (int i = top; i <= bottom; i++) {
                total.add(mat[i][right]);
            }
            right--;

            // Traverse from right to left
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    total.add(mat[bottom][i]);
                }
                bottom--;
            }

            // Traverse upwards
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    total.add(mat[i][left]);
                }
                left++;
            }
        }

        return total;
    }
}

class Solution {
    // Function to rotate matrix anticlockwise by 90 degrees.
    static void rotateby90(int mat[][]) {
        int n = mat.length;

        // Step 1: Transpose the matrix
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                int temp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = temp;
            }
        }

        // Step 2: Reverse each column
        for(int j = 0; j < n; j++) {
            int top = 0, bottom = n - 1;
            while(top < bottom) {
                int temp = mat[top][j];
                mat[top][j] = mat[bottom][j];
                mat[bottom][j] = temp;
                top++;
                bottom--;
            }
        }
    }
}

class Solution {
    public static boolean searchInRowWiseSortedMatrix(int[][] mat, int x) {
        int n = mat.length;
        int m = mat[0].length;

        for (int i = 0; i < n; i++) {
            int low = 0, high = m - 1;

            while (low <= high) {
                int mid = low + (high - low) / 2;

                if (mat[i][mid] == x) {
                    return true;
                } else if (mat[i][mid] < x) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        return false;
    }
}
class Solution {
    // Function to search a given number in row-column sorted matrix.
    public boolean searchMatrix(int[][] mat, int x) {
        int n = mat.length;
        int m = mat[0].length;

        int i = 0, j = m - 1; // start from top-right corner

        while (i < n && j >= 0) {
            if (mat[i][j] == x) {
                return true;
            } else if (mat[i][j] > x) {
                j--; // move left
            } else {
                i++; // move down
            }
        }

        return false;
    }
}

//-----------
class Solution {
    public void setMatrixZeroes(int[][] mat) {
        int n = mat.length;
        int m = mat[0].length;
        
        // Using first row and first column as markers
        boolean firstRowZero = false;
        boolean firstColZero = false;
        
        // Check if the first row has any zeroes
        for (int j = 0; j < m; j++) {
            if (mat[0][j] == 0) {
                firstRowZero = true;
                break;
            }
        }
        
        // Check if the first column has any zeroes
        for (int i = 0; i < n; i++) {
            if (mat[i][0] == 0) {
                firstColZero = true;
                break;
            }
        }
        
        // Use first row and column as markers for rows and columns that need to be zeroed
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][j] == 0) {
                    mat[i][0] = 0;  // Mark the row
                    mat[0][j] = 0;  // Mark the column
                }
            }
        }
        
        // Zero out cells based on the markers in the first row and column
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][0] == 0 || mat[0][j] == 0) {
                    mat[i][j] = 0;
                }
            }
        }
        
        // Zero out the first row if needed
        if (firstRowZero) {
            for (int j = 0; j < m; j++) {
                mat[0][j] = 0;
            }
        }
        
        // Zero out the first column if needed
        if (firstColZero) {
            for (int i = 0; i < n; i++) {
                mat[i][0] = 0;
            }
        }
    }
}
//---------

class Solution {
    public void setMatrixZeroes(int[][] mat) {
        int n = mat.length;
        int m = mat[0].length;

        boolean firstRow = false;
        boolean firstCol = false;

        // Check if first row has any zero
        for (int j = 0; j < m; j++) {
            if (mat[0][j] == 0) {
                firstRow = true;
                break;
            }
        }

        // Check if first column has any zero
        for (int i = 0; i < n; i++) {
            if (mat[i][0] == 0) {
                firstCol = true;
                break;
            }
        }

        // Use first row and column as markers
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][j] == 0) {
                    mat[i][0] = 0;
                    mat[0][j] = 0;
                }
            }
        }

        // Set matrix cells to 0 based on markers
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][0] == 0 || mat[0][j] == 0) {
                    mat[i][j] = 0;
                }
            }
        }

        // Finally update first row and column if needed
        if (firstRow) {
            for (int j = 0; j < m; j++) {
                mat[0][j] = 0;
            }
        }

        if (firstCol) {
            for (int i = 0; i < n; i++) {
                mat[i][0] = 0;
            }
        }
    }
}

////////////

class Solution {
    public void setMatrixZeroes(int[][] mat) {
        int n = mat.length;
        int m = mat[0].length;

        boolean firstRow = false;
        boolean firstCol = false;

        // Check if first row has a zero
        for (int j = 0; j < m; j++) {
            if (mat[0][j] == 0) {
                firstRow = true;
                break;
            }
        }

        // Check if first column has a zero
        for (int i = 0; i < n; i++) {
            if (mat[i][0] == 0) {
                firstCol = true;
                break;
            }
        }

        // Mark rows and columns that need to be zeroed
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][j] == 0) {
                    mat[i][0] = 0;
                    mat[0][j] = 0;
                }
            }
        }

        // Set matrix cells to 0 based on markers
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][0] == 0 || mat[0][j] == 0) {
                    mat[i][j] = 0;
                }
            }
        }

        // Zero the first row if needed
        if (firstRow) {
            for (int j = 0; j < m; j++) {
                mat[0][j] = 0;
            }
        }

        // Zero the first column if needed
        if (firstCol) {
            for (int i = 0; i < n; i++) {
                mat[i][0] = 0;
            }
        }
    }
}





🔐 Zeroing out rows and columns in a matrix when a zero is encountered—done in O(1) extra space! 💡
Efficient in both time and space!
#Java #DSA #MatrixManipulation #LeetCode #CodingChallenge

import java.util.*;

class Solution {
    public boolean hasTwoSum(int[] arr, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < arr.length; i++) {
            int complement = target - arr[i];
            if (map.containsKey(complement)) {
                return true; // Found a valid pair
            }
            map.put(arr[i], i);
        }
        return false; // No valid pair found
    }
}

🧠💥 Think Fast!
Can two numbers in your array sum up to a target? 🔍
Solve it in O(n) with a HashMap trick! 🚀
iii#Java #TwoSum #CodingInterview #DSA




import java.util.*;

class Solution {

    int countPairs(int arr[], int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int count = 0;

        for (int num : arr) {
            int complement = target - num;
            if (map.containsKey(complement)) {
                count += map.get(complement);
            }
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        return count;
    }
}
import java.util.*;

class Solution {

    int countPairs(int arr[], int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int count = 0;

        for (int num : arr) { // corrected: 'num' is the element from arr
            int complement = target - num;
            if (map.containsKey(complement)) {
                count += map.get(complement);
            }
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        return count;
    }
}


import java.util.*;

class Solution {

    int countPairs(int arr[], int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int count = 0;

        for (int num : arr) { // corrected: 'num' is the element from arr
            int complement = target - num;
            if (map.containsKey(complement)) {
                count += map.get(complement);
            }
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        return count;
    }
}








