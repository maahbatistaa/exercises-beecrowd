import java.util.Scanner;

public class b1060 {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);

		int cont = 0;

		for (int i = 0; i < 6; i++) {
			double num = sc.nextDouble();
			if (num > 0) {
				cont += 1;
			}
		}

		System.out.println(cont + " valores positivos");
	}
}
