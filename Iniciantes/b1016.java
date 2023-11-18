import java.util.Scanner;

public class b1016 {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);

		int km = sc.nextInt();
		int minutos = (60 * km)/30;

		System.out.println(minutos + " minutos");
	}
}
