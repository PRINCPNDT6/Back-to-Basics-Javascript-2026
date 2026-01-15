
// public  class Array{
//     public static void main(String[] args){
//         // Scanner sc = new Scanner(System.in);
//         // int size = sc.nextInt();
         
//         // //  input for array
//         // int numbers[] = new int[size];
 
//         //     for (int i = 0; i < size; i++) {
//         //         numbers[i] = sc.nextInt();
//         //     }

//         //     // output for array
//         // for (int i = 0; i < size; i++) {
            
//         // System.out.println(numbers[i]);
//         // }

//         // System.out.println(size);
// // =====================================

//         Scanner sc = new Scanner(System.in);

//         int size = sc.nextInt();

//          // declare Array
//         int arr[] = new int[size];

//         // input array
//         for (int i = 0; i < size; i++) {
//           arr[i] =   sc.nextInt();

//         }

          
//         int x = sc.nextInt();

        
//                 for (int i = 0; i < size; i++) {
                    
//                      if(arr[i] == x){
//                         System.out.println("x fount at index: "+i);
//                      }
        
                     
//                 }
 

        // // output
        // for (int i = 0; i < size; i++) {
        // System.out.println(arr[i]);

        // }


// ==================================

         
       


//     }
//  }

import java.util.Scanner;

public class SearchInArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 1. Read array size
        System.out.print("Enter array size: ");
        int size = sc.nextInt();

        // 2. Read array elements
        int[] arr = new int[size];
        System.out.println("Enter " + size + " integers:");
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }

        // 3. Read the target value
        System.out.print("Enter value to search for: ");
        int x = sc.nextInt();

        // 4. Search with flag and break
        int foundIndex = -1;
        for (int i = 0; i < size; i++) {
            if (arr[i] == x) {
                foundIndex = i;
                break;
            }
        }

        // 5. Display result
        if (foundIndex >= 0) {
            System.out.println(x + " found at index: " + foundIndex);
        } else {
            System.out.println(x + " not found in the array.");
        }

        sc.close();  // always close Scanner
    }
}
