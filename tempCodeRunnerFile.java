import java.util.Random;
public class random{
    public static void main(String[] args){
        Random r = new Random();
        int num = r.nextInt(20);
        System.out.println(num);
    }
}