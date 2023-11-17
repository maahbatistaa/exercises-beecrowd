import java.util.Scanner;

public class b1589 {
	public static void main(String [] args) throws Exception {
		Scanner sc = new Scanner(System.in);

		int T = sc.nextInt();
		
		for (int i = 0; i < T; i++){
			int R1 = sc.nextInt();
			int R2 = sc.nextInt();
			int conduite = R1 + R2;

			System.out.println(conduite);
		}
		
		sc.close();
	}
}