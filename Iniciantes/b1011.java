import java.util.Locale;
import java.util.Scanner;

public class b1011 {
	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		double pi = 3.14159;
		double raio = sc.nextDouble();
		double volume = (4/3.0) * pi * Math.pow(raio, 3);

		System.out.println("VOLUME = " + String.format("%.3f", volume));

		sc.close();
	}
}