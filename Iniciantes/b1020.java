import java.util.Scanner;

public class b1020 {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);

		int duracaoDias = sc.nextInt();
		int anos = duracaoDias / 365;
		duracaoDias -= anos * 365;

		int meses = duracaoDias / 30;
		duracaoDias -= meses * 30;

		int dias = duracaoDias;

		System.out.println(anos + " ano(s)");
		System.out.println(meses + " mes(es)");
		System.out.println(dias + " dia(s)");

		sc.close();
	}
}
