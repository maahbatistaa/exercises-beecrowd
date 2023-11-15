import java.util.Locale;
import java.util.Scanner;

public class b1010 {
	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		int cod1 = sc.nextInt();
		int qtd1 = sc.nextInt();
		double preco1 = sc.nextDouble();
		int cod2 = sc.nextInt();
		int qtd2 = sc.nextInt();
		double preco2 = sc.nextDouble();

		double pagar = (qtd1 * preco1) + (qtd2 * preco2);

		System.out.println("VALOR A PAGAR: R$ " + String.format("%.2f", pagar));

		sc.close();
	}
}