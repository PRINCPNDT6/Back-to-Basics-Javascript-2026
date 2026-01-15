import java.util.Scanner;

public class twoD {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter row size");
        int row = sc.nextInt();
        System.out.println("Enter col size");
        int col = sc.nextInt();
        int twoDarr[][] = new int[row][col];

        // input
        System.out.println("Enter element of row and col for 2D array:");
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                twoDarr[i][j] = sc.nextInt();
                
            }

        }
            // find element at any index

              System.out.println("Enter row and col of index to find an element:" );
              System.out.println("Enter row index " );
              int a = sc.nextInt();
              System.out.println("Enter col index " );
              int b = sc.nextInt();
 
              System.out.println("print element " );

           for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                 if(twoDarr[i][j] == twoDarr[a][b]){
                    System.out.println(   twoDarr[i][j]);
                 }
                
            }

        }

            // System.out.println();
            

        // output 
        System.out.println("print twoD array:" );
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print(   twoDarr[i][j] + " ");
                
            }
            System.out.println();
            
        }


    }
}
