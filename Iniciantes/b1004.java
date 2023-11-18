import java.util.Scanner;

public class b1004 {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);

		int a = sc.nextInt();
		int b = sc.nextInt();
		int prod = a * b;

		System.out.println("PROD = " + prod);

		sc.close();
	}
}