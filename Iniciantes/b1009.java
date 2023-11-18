import java.util.Locale;
import java.util.Scanner;

public class b1009 {
	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		double salario = sc.nextDouble();
		double venda = sc.nextDouble();
		double bonus = (venda * 15) / 100;
		double totalReceber = salario + bonus;

		System.out.println("TOTAL = R$ " + String.format("%.2f", totalReceber));

		sc.close();
	}
}