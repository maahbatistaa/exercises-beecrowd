import java.util.Locale;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int X;
        double Y, consumo;

        X = sc.nextInt();
        Y = sc.nextDouble();

        consumo = X / Y;

        System.out.print(String.format("%.3f", consumo));
        System.out.println(" km/l");
        sc.close();
    }
}
