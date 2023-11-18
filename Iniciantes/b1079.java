import java.util.Locale;
import java.util.Scanner;

public class b1079 {
	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
	
		int N = sc.nextInt();

		for(int i = 0; i < N; i++) {
			double num1 = sc.nextDouble();			
			double num2 = sc.nextDouble();
			double num3 = sc.nextDouble();
			
			double media = (num1 * 2 + num2 * 3 + num3 * 5)/ 10;

			System.out.println(String.format("%.1f", media));
		}
		
		sc.close();
	}
}
