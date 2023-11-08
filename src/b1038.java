import java.util.Locale;
import java.util.Scanner;

public class b1038 {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int cod = sc.nextInt();
        int qtd = sc.nextInt();
        double valor = 0.0;

        switch (cod) {
            case 1:
                valor = qtd * 4.00;
                break;
            case 2:
                valor = qtd * 4.50;
                break;
            case 3:
                valor = qtd * 5.00;
                break;
            case 4:
                valor = qtd * 2.00;
                break;
            case 5:
                valor = qtd * 1.50;
                break;
        }

        System.out.println("Total: R$ " + String.format("%.2f", valor));

        sc.close();
    }
}
