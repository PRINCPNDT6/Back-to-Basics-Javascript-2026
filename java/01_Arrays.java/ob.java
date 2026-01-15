import java.util.Scanner;

public class ob{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter size of Array");
        int size = sc.nextInt();
        int arr[] = new int[size];

        // input
        System.out.println("Enter element for array ");
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
            
        }

        System.out.println("Enter X element jise find krna hai");

        int x = sc.nextInt();
        // find element at X index

        for (int i = 0; i < size; i++) {


            if(arr[i] == x){
                System.out.println("X found at index: " +i);
            }
           
  
        }

        // output

                    System.out.println("If you want Print Original Array Enter Yes:");

              String printarr = sc.next();

              if(printarr.equalsIgnoreCase("yes")){

                  
                  System.out.println("Print Succesfully: ");
                  
                  for (int i = 0; i < size; i++) {
                      System.out.println( arr[i]);
                      
                    }
                }
 }

}