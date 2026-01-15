
import java.util.Scanner;

public class findelmnt {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter value for array size:");
        int size = sc.nextInt();
        int arr[] = new int[size];

        System.out.println("Enter "+ size +" Elements:");

        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
            
        }

        System.out.print("Enter Element jise find krna hai:");

        int x = sc.nextInt();

        for (int i = 0; i < size; i++) {
            // ye loop har baar chlne pr 
            // if wali condition check krega 
            // or jis index pr ye ture hoha vahan ye print hoga
            
            if(arr[i] == x){

                
                System.out.println("X found at index: " +i);
            }
        }


    }
}
