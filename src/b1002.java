import java.util.Locale;
import java.util.Scanner;

public class b1002 {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double raio , area;
        double n = 3.14159;

        raio = sc.nextDouble();

        area = n * Math.pow(raio, 2);

        System.out.println("Area = " + String.format("%.4f", area));

        sc.close();
    }
}
