import java.util.Scanner;

public class refandcopy{
    public static void main(String[] args){
        // reference and copy 

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter vslue for array size:");
        int size = sc.nextInt();

        int arr[] = new int[size];

        // input 

        System.out.println("Enter "+ size +" Element");

        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
            
        }

        // output
        System.out.println("Print arr ");

        for (int i = 0; i < size; i++) {
            System.out.println(arr[i]);
            
        }

            // arr_2 me arr ki value copy 
            // arr ko hmne new keyword ki help se new memory di hai 
            // arr_2 ko new memory nahi di bss arr ki memory ka reference diya hai
            // to iska mtbl h ki if we are changing in arr_2 me to arr me bhi changes ho jaynge 
            // or agrr arr me change krenge to arr_2 me bhi change ho jayga 
            // it means ki dono ke pass same memory hai 

            System.out.println("arr_2 me arr ki copy by reference");
            System.out.println("int arr_2[] = arr;");
   
            int arr_2[] = arr;

        System.out.println("Print arr_2");
        for (int i = 0; i < size; i++) {
            System.out.println(arr_2[i]);
            
        }

        System.out.println("arr_2 ki memory me change :");


        System.out.print("Enter element at arr_2[0]:");
        arr_2[0] = sc.nextInt();

        System.out.print("Enter element at arr_2[1]:");
        arr_2[1] = sc.nextInt();
        

        System.out.println("print arr after changing arr_2");

        
        for (int i = 0; i < size; i++) {
            System.out.println(arr[i]);
            
        }

        System.out.println("print arr_2 after changing arr_2");

        
        for (int i = 0; i < size; i++) {
            System.out.println(arr_2[i]);
            
        }



    }
}