import java.util.Locale;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double A, B, C, media;

        A = sc.nextDouble();
        B = sc.nextDouble();
        C = sc.nextDouble();

        media = ((A * 2)+(B * 3)+(C*5))/10.0;

        System.out.println("MEDIA = " + String.format("%.1f", media));

        sc.close();
    }
}
