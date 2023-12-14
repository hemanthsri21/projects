import java.util.*;

public class Main {
    public static void main(String[] args) {
//        Theatre n = new Theatre()

        ArrayList<Theatre> th = new ArrayList<>();

        th.add(new Theatre(1, 120, 50));
        th.add(new Theatre(2, 120, 60));
        th.add(new Theatre(3, 120, 70));
        System.out.println(th);

        for (Theatre b : th) {
            b.display(th);
        }


        Scanner scan = new Scanner(System.in);
        while (true) {
            System.out.println("1 - booking, 2 - cancel, 3 - display");
            int choice = scan.nextInt();
            switch (choice) {
                case 1: {
                    Booking b = new Booking();
                    if (b.book(th)){
                        System.out.println("booked");
                        for (Theatre bi : th) {
                            bi.display(th);
                        }
                    }
                    else {
                        System.out.println("invalid");
                    }
                }
                case 2: {

                }
                case 3: {

                }
                default:
                    System.out.println("invalid input");
            }
        }
    }
}