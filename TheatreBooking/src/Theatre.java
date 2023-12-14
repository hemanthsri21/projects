import java.util.ArrayList;

public class Theatre {
    private int screen;
    private int price;
    private int seat;

    Theatre(int screen, int price, int seat) {
        this.price = price;
        this.screen = screen;
        this.seat = seat;

    }

    public int getScreen() {
        return screen;
    }

    public int getPrice() {
        return price;
    }

    public int getSeat() {
        return seat;
    }

    public void setScreen(int screen) {
        this.screen = screen;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setSeat(int seat) {
        this.seat = seat;
    }

    public void display(ArrayList<Theatre> t) {
            System.out.println("screen : " +screen + ", available seats : " + seat + ", price :" + price);
    }
}

