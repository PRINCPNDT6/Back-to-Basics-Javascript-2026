public class Main{
    
        public static void main(String[] args){
 
 // Casting 

        // it means casting me double me int ki value store ho skti hai 
        //  double me 8, or Int me 4 to 8 ke andrr 4 save ho skta hai like [1][2][3][4][][][][]   ye subscript hai double(8) or numbers hai int(4) 

        // iska mtbl hai ki hmm ek glass ko balti me daal skte hai  mtbl ki double me hm int 

        double price = 100.00;
        double finalprice = price+18;

        System.out.println(finalprice);


        // 4) Explicit Casting

        // isme hm ek baalti paani ko ek glass me nahi daal skte qki vo overflow ho jayga  to hme phle uske size ke glass ko balti ke andr daalna pdega jis se ki utna hi paani aay  or vo glass hmara datatype hota hai

        int p = 100;
       //  int fp = p+18.99; // ye value int se bdi hai iska mtlb hai double Int se bda hota hai iska mtbl hai ki hme same glass ki need hai like Int data type jo 18.99 me se 18 ko hi nikale ga

       int fp = p+(int)18.99;

        System.out.println(fp);



    }
}

