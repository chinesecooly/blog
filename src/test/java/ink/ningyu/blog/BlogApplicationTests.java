package ink.ningyu.blog;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BlogApplicationTests {

    @Test
    void contextLoads() {
		System.out.println(a()||b()&&c());
    }

    public static boolean a() {
		System.out.println("A");
        return false;
    }

	public static boolean b() {
		System.out.println("B");
		return false;
	}

	public static boolean c() {
		System.out.println("C");
		return true;
	}

}
