import java.util.Scanner;

public class Arrays{

public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // int age = sc.nextInt();

    // System.out.println(age);

    int size = sc.nextInt(); // isne ek size diya array ka
    int arr[] = new int[size]; // ye ek aray banaya hai 

    // input 

    for(int i = 0; i < size; i++){
        arr[i] = sc.nextInt(); // is se array ke lie input lie hai size ke hisab se
    }

    // output 

    for (int i = 0; i < size; i++) {
        System.out.println(arr[i]); // ye aray ke lie output hai jo loop ke according chlega 
        
    }

}}

 