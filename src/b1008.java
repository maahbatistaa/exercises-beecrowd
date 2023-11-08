import java.util.Locale;
import java.util.Scanner;

public class b1008 {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int numero, horas;
        double valorHora, salario;

        System.out.print("Informar seu numero: ");
        numero = sc.nextInt();
        System.out.print("Informar horas trabalhadas: ");
        horas = sc.nextInt();
        System.out.print("Informar valor por hora: ");
        valorHora = sc.nextDouble();

        salario = valorHora * horas;

        System.out.println("NUMBER = " + numero);
        System.out.println("SALARY = U$ " + String.format("%.2f", salario));

        sc.close();
    }
}
