package ink.ningyu.blog.common;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Result {
    private int code;
    private String msg;
    private Object data;

    static public Result success(Object data) {
        return Result.builder()
            .code(200)
            .msg("success")
            .data(data)
            .build();
    }

    static public Result fail(int code, String msg) {
        return Result.builder()
            .code(code)
            .msg(msg)
            .data(null)
            .build();
    }
}
