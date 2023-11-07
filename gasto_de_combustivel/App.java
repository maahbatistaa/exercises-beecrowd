import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);

        int tempo, velocidade, distancia;
        double gasto, kmLitro = 12.0;

        tempo = sc.nextInt();
        velocidade = sc.nextInt();

        distancia = velocidade * tempo;

        gasto = distancia / kmLitro;

        System.out.println(String.format("%.3f", gasto));

        sc.close();
    }
}
