import java.util.Locale;
import java.util.Scanner;

public class b1003 {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int a, b, soma;

        a = sc.nextInt();
        b = sc.nextInt();

        soma = a + b;

        System.out.println("SOMA = " + soma);

        sc.close();
    }
}
