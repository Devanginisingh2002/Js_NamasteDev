import java.util.*;

class Solution {
    // Function to find the majority elements in the array
    public List<Integer> findMajority(int[] nums) {
        int n = nums.length;
        int implement1 = 0;
        int implement2 = 0;
        int element1 = Integer.MIN_VALUE;
        int element2 = Integer.MIN_VALUE;

        for(int i = 0; i < n; i++) {
            if (implement1 == 0 && nums[i] != element2) {
                implement1 = 1;
                element1 = nums[i];
            } else if (implement2 == 0 && nums[i] != element1) {
                implement2 = 1;
                element2 = nums[i];
            } else if (nums[i] == element1) {
                implement1++;
            } else if (nums[i] == element2) {
                implement2++;
            } else {
                implement1--;
                implement2--;
            }
        }

        // Count actual occurrences
        implement1 = 0;
        implement2 = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] == element1) implement1++;
            if (nums[i] == element2) implement2++;
        }

        List<Integer> ls = new ArrayList<>();
        int threshold = n / 3;
        if (implement1 > threshold) ls.add(element1);
        if (implement2 > threshold && element2 != element1) ls.add(element2);

        Collections.sort(ls); // ✅ Fix: Sort before returning
        return ls;
    }
}
