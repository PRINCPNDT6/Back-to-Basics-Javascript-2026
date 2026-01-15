
import java.util.Scanner;

public class strings {

    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your name");
    String name = sc.nextLine();
    // System.out.println("your name is:" +name);

    String name1 = "prince";
    String name2 = "sharma";

    // compare
    if(name1.compareTo(name2) == 0){
        System.out.println("String are equal");
    }
    else{
        System.out.println("String are not equal");
    }

    }
}

    