 import  java.util.*;

public class arraylist{
    public static void main(String args[]){
        ArrayList <Integer> list = new ArrayList <Integer>();
        // ArrayList <Boolean> list = new ArrayList<Boolean>();
        // ArrayList <String> list = new ArrayList<String>();

        // create array list



        list.add(3);
        list.add(2);
        list.add(7);
        list.add(4);
        list.add(1);

        System.out.print("Print ArrayList: " +list);

        // add element in beetwin at any index

        list.add(5,6);

        System.out.println("Add element-6 beetwin ArrayList at index-5: "+list);

        // set element ( change element at their same index)

        list.set(5,0);

        System.out.println("index-5 change  element-0: "+list);

        // remove element 

        list.remove(5);

        System.out.println("remove element at index 5: "+list);

        // get element 

        int element = list.get(0);

        // System.out.println("get element at 0 index:" + list.get(0));
        System.out.println("get element at 0 index:" + element);

        // size 

        int size = list.size();
        System.out.println("Size of ArrayList: "+size);

        // sort ArrayList 
        Collections.sort(list);

        System.out.println("Sorting ArrayList:" +list);







    }
}