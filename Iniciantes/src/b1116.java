import java.util.Locale;
import java.util.Scanner;

public class b1116 {
	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
	
		int N = sc.nextInt();

		for(int i = 0; i < N; i++) {
			int X = sc.nextInt();			
			int Y = sc.nextInt();

			if (Y != 0) {
				double divisao = (double) X / Y; 
				System.out.println(String.format("%.1f", divisao));
			} else {
				System.out.println("divisao impossivel");
			}
		}
		
		sc.close();
	}
}
