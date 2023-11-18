import java.util.Locale;
import java.util.Scanner;

public class b1017 {
	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		int tempo = sc.nextInt();
		int velocidade = sc.nextInt();
		int distancia = velocidade * tempo;

		double kmLitro = 12.0;
		double gasto = distancia / kmLitro;

		System.out.println(String.format("%.3f", gasto));

		sc.close();
	}
}
