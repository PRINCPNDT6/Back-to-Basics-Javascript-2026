
import java.util.Scanner;

public class find2DArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter value for rows:");
        int rows = sc.nextInt();
        System.out.print("Enter value for cols:");
        int cols = sc.nextInt();

        int matrix[][] = new int[rows][cols];

        System.out.println("Enter element for array rows and cols:-");

        // input
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                matrix[i][j] = sc.nextInt();
                
            }
            
        }

        // find element at any input 
        // input any element
        System.out.print("Input element for find at any index:-");
        int x = sc.nextInt();
        // check ki element array me hai ya nahi 
            // array ke hr index ko input se check krna pdega ki input element array me hai ya nahi

            for (int i = 0; i < rows; i++) {
                for (int j = 0; j < cols; j++) {
                if( matrix[i][j] == x){
              System.out.println("fint element at index: " + i + "," + j);
                
            }
            
        }
        }
         System.out.println("if you want to print original Matrix ");
         System.out.println("Enter yes:- ");
        String yess = sc.next();

        if(yess.equalsIgnoreCase("yes")){
            System.out.println("print Succesfully:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
              System.out.print(matrix[i][j] +" ");
                
            }
            System.out.println();
            
        }
        }

            System.out.println("Enter index for print any element:");

            System.out.println("Enter index row:");
            int a = sc.nextInt();
            System.out.println("Enter index cols:");
            int b = sc.nextInt();

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                
                if(matrix[i][j] == matrix[a][b]){
                    System.out.println(" Print element" +matrix[a][b]);
                }
            }
            
        }
        
    }
}
