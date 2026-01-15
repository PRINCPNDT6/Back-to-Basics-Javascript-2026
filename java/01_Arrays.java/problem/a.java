import java.util.*;

public class a {
 public static void main(String[] args) {
     Scanner sc = new Scanner(System.in);

    System.out.print("Enter size of numbers:");
     int size = sc.nextInt();
     int num[] = new int[size];

     // input

    System.out.print("Enter " +size + " numbers:");
     for (int i = 0; i < size; i++) {
        num[i] = sc.nextInt();
         
     }

     int max = Integer.MIN_VALUE;
     int min = Integer.MAX_VALUE;

     for (int i = 0; i < size; i++) {
        if(num[i] < min){
            min = num[i];
        }
        if(num[i] > max){
            max = num[i];
        }
         
     }

     System.out.println("print minimum value:" +min);
     System.out.println("print maximum value:" +max);
 }
    
 }