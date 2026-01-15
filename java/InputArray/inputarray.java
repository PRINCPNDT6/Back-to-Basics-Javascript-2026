
 import java.util.Scanner;

public class inputarray {

    public static void main(String[] args ){
        // input an array by user 

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter value for array size:");

        int n = sc.nextInt();
        int arr[] = new int[n];

        System.out.println("Enter " +n +" Elements:");

        for (int i = 0; i < n; i++) {

            arr[i] = sc.nextInt();

            
        }

        System.out.println("If you want to print Array");
        System.out.print("Type yes: -");

        String yes = sc.next();
        
        if(yes.equalsIgnoreCase("yes")){
            System.out.println("Print Successfully");
            for (int i = 0; i < n; i++) {
                System.out.print(arr[i]+" ");
                
            }
        }




    }
}