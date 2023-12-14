import java.util.*;

public class Booking {

    int sc_no;
    Scanner scan = new Scanner(System.in);
    int seat_count;

    public boolean book(ArrayList<Theatre> th) {
        System.out.println("Enter Screen no:");
        sc_no = scan.nextInt();
        for (Theatre t : th) {
            if (sc_no == t.getScreen()) {
                System.out.println("Enter Seat count:");
                seat_count = scan.nextInt();
                if (seat_count <= t.getSeat())
                {
                    t.setSeat( t.getSeat() - seat_count) ;
                    return true;
                }
            }

        }
        return false;
    }

}

