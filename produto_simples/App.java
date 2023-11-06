import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
       Scanner sc = new Scanner(System.in);

       int a, b, prod;

       a = sc.nextInt();
       b = sc.nextInt();

       prod = a * b;

       System.out.println("PROD = " + prod);

       sc.close();
    }
}
