import java.util.HashSet;
import java.util.Iterator;

public class hashing {
    public static void main(String[] args) {
        // Creating
        HashSet<Integer> set = new HashSet<>();

        // Insert
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(1);
             set.add(4);
         set.add(5);
         set.add(6);

        System.out.println(set);

        // Contains
        if(set.contains(1)){
            System.out.println("set contains 1 'searching meathod'");
        }
        if(!(set.contains(6))){
            System.out.println("does not contains 6");
        }
        else{
            System.out.println("set contains 6");
        }

        System.out.println("size of this set:"+ set.size());



        // delete
        set.remove(1);

        if(!set.contains(1)){
             
                System.out.println("remove 1");
        }
        
        System.out.println(set);

        System.out.print("size of this set:");
         System.out.println(set.size());

         Iterator it = set.iterator();  

         // it point krta hai phle NULL ko 
         // fir next element ko 
         // uske baad fir next element ko point krta hai 
         // it -> NULL{}
         // it.next() -> (1)
         // it.next() -> (2)
         // it.next() -> (3)

         // it.hasNext() -> jb tk next element ko point krta rhega tb tk true hota hai 
     

         while (it.hasNext()) {  // it.hasNext() ka mtlb hai ki ise jb tk next element milta rhega ye true hota hai or it.next() ko print krta rhega
            System.out.println(it.next());
            
         }

        
    }

}