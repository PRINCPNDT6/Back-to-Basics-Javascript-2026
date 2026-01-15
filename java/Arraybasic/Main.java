import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int age = 20;
        int phy = 78;
        int chem = 87;
        int math = 67;

        int marks[] = new int[3];  // array size = 3 (valid indices: 0, 1, 2)

        marks[0] = 78;
        marks[1] = 87;  // corrected index from 2 to 1
        marks[2] = 67;  // corrected index from 3 to 2

        // System.out.println(marks[0]);  // prints 78

        // 1)Array.length

         System.out.println(marks.length);

        // 2)Array.sort

      //  System.out.println("Before sorting");

        // System.out.println(marks[0]);
        // System.out.println(marks[1]);
        // System.out.println(marks[2]);

        Arrays.sort(marks);
                // System.out.println("After sorting");


        // System.out.println(marks[0]);
        // System.out.println(marks[1]);
        // System.out.println(marks[2]);

        // 3)2D Array
       
           int data []  ={5,2,3,4,};

            int finaldata [][] = {
                {1,2,3,4},
                {5,6,7,8},
            };

        //     System.out.println(data[0]);
        //    System.out.println(finaldata[0][1]);
        //    System.out.println(finaldata[1][1]);

       

