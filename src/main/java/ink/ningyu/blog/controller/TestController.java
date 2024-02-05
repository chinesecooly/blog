package ink.ningyu.blog.controller;

import ink.ningyu.blog.common.Result;
import ink.ningyu.blog.domain.Test;
import ink.ningyu.blog.mapper.TestMapper;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/test")
public class TestController {
    @Resource
    private TestMapper testMapper;

    @GetMapping("/log")
    public Result log() {
        Test test = new Test();
        test.setMsg("a get request after one push");
        test.setData(LocalDateTime.now());
        testMapper.insert(test);
        return Result.success(test);
    }
}
