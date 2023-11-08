import java.util.Locale;
import java.util.Scanner;

public class b1010 {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int cod1, qtd1, cod2, qtd2;
        double preco1, preco2, pagar;

        cod1 = sc.nextInt();
        qtd1 = sc.nextInt();
        preco1 = sc.nextDouble();
        cod2 = sc.nextInt();
        qtd2 = sc.nextInt();
        preco2 = sc.nextDouble();

        pagar = (qtd1 * preco1) + (qtd2 * preco2);

        System.out.println("VALOR A PAGAR = R$ " + String.format("%.2f", pagar));

        sc.close();
    }
}
