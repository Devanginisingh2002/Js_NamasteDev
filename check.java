class Solution {

    // Function to find maximum circular subarray sum.
    public int circularSubarraySum(int[] arr) {
        int totalSum = arr[0];
        int maxSum = arr[0];
        int currentMax = arr[0];
        int minSum = arr[0];
        int currentMin = arr[0];

        for (int i = 1; i < arr.length; i++) {
            // Kadane's for max subarray sum (non-circular)
            currentMax = Math.max(arr[i], currentMax + arr[i]);
            maxSum = Math.max(maxSum, currentMax);

            // Kadane's for min subarray sum
            currentMin = Math.min(arr[i], currentMin + arr[i]);
            minSum = Math.min(minSum, currentMin);

            // Total array sum
            totalSum += arr[i];
        }

        // If all elements are negative, maxSum will be the answer
        if (maxSum < 0) return maxSum;

        // Else, the answer is max of normal and circular case
        return Math.max(maxSum, totalSum - minSum);
    }
}
