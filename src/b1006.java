import java.util.Locale;
import java.util.Scanner;

public class b1006 {
	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		double A = sc.nextDouble();
		double B = sc.nextDouble();
		double C = sc.nextDouble();
		double media = ((A * 2) + (B * 3) + (C * 5)) / 10.0;

		System.out.println("MEDIA = " + String.format("%.1f", media));

		sc.close();
	}
}