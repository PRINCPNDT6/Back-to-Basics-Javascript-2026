public class main {

    
    public static void main(String[] args) {
        String name = "prince";

        System.out.println(name);

        // Original string kabhi change nahi hoti

         
        // 1)concatenate 
        // do string ko add krta hai ek alg string me

        String name1  = "prince ";
        String name2 = "sharma";

        String name3 = name1+name2;
        
        System.out.println(name3);

        // 2)CharAt
        // character ko index ke hisab se find krta hai kon se index pr kon sa char hai 

         System.out.println(name.charAt(0));
         System.out.println(name.charAt(1));

        // 3) Length 
        // string ya aray ki length batata hai

        System.out.println(name.length());

        // 4) replace function
        // string me character ko replace krta hai like: p <-> P jo ki ek alag string me store hota hai

        String name4 = name.replace( 'p', 'P');
        // String name4 = name.replace( 'r', 'R');

        System.out.println(name.replace('r', 'R'));
        System.out.println(name4);

        // 4) substring  
        // string me se start index se - (end -1)last index tk ke string ko output deta hai

        String name5 = "prince sharma";

        System.out.println(name5.substring(7,13));
    }
}
