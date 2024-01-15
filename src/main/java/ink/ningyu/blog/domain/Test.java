package ink.ningyu.blog.domain;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @TableName test
 */
@Data
public class Test implements Serializable {

    private Integer id;

    private String msg;

    private LocalDateTime data;

    private static final long serialVersionUID = 1L;
}