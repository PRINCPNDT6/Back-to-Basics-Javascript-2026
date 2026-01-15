import java.util.Scanner;

public class Array {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter size of Array:");
        int size = sc.nextInt();
        int arr[] =  new int[size];

        System.out.print("Enter " +size + " element for Array:");
        // input
        for (int i = 0; i < size; i++) {
              arr[i] = sc.nextInt(); 

              
            }
            // find elemet at index
// check krenge ki vo elemet array me hai ya nahi gar hai to us ke index ko print krenge


        System.out.print("Enter element jise find krna hai:");            
        int x = sc.nextInt();

        for (int i = 0; i < size; i++) {
            
            if(arr[i] == x){
                System.out.println("x found at index:" + i);
            }
        }

        System.out.print("Print Array:");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");

            
            System.out.print(" ");
        }

     
         

    }
}
