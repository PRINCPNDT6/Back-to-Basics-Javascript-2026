import java.util.Scanner;

public class function {

    // public static void printMyName(String name){
    //     System.out.println(name);
    //     return;

    // }
    //     public static void main(String args[]){
    //         Scanner sc = new Scanner(System.in);
    //         String name = sc.nextLine();

    //         printMyName(name); 
    //     }
  // ======================================================
    // public static void  addTwoNumber(int  sum){
    //     System.out.println(sum);
    //     return ;

    // }
    //     public static void main(String args[]){
    //         Scanner sc = new Scanner(System.in);
    //         int a = sc.nextInt();
    //         int b = sc.nextInt();
    //         int sum = a+b;
    //         addTwoNumber(sum); 
    //     }
 //  ========================================================
    public static int  addTwoNumber(int  a, int b){
          int sum = a+b;
        return sum;

    }
        public static void main(String args[]){
            Scanner sc = new Scanner(System.in);
            int a = sc.nextInt();
            int b = sc.nextInt();
             
            int sum = addTwoNumber(a,b); 
           System.out.println(" Sum of two numbers is : "+sum);
        }


 }