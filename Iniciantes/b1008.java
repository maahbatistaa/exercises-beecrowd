import java.util.Locale;
import java.util.Scanner;

public class b1008 {
	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		int numero = sc.nextInt();
		int horas = sc.nextInt();

		double valorHora = sc.nextDouble();
		double salario = valorHora * horas;

		System.out.println("NUMBER = " + numero);
		System.out.println("SALARY = U$ " + String.format("%.2f", salario));

		sc.close();
	}
}