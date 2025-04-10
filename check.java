import java.util.*;
public class check {
    public static boolean sorted(int arr[]){
        for(int i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                return false;
            }
        }
        return true;
    }
    public static void main(String args[]){
        int arr[] ={5, 6, 1, 2};
        System.out.println(sorted(arr));
    }
}