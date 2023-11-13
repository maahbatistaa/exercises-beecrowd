import java.util.Scanner;

public class b1078 {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);

		int N = sc.nextInt();

		for(int i = 1; i <= 10; i++){
			int tab = i * N;
			System.out.println(i + " x " + N + " = " + tab);
		}
	}
}
