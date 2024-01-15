package ink.ningyu.blog.mapper;

import ink.ningyu.blog.domain.Test;

/**
* @author Administrator
* @description 针对表【test】的数据库操作Mapper
* @createDate 2024-01-15 18:12:00
* @Entity ink.ningyu.blog.domain.Test
*/
public interface TestMapper {

    int deleteByPrimaryKey(Long id);

    int insert(Test record);

    int insertSelective(Test record);

    Test selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Test record);

    int updateByPrimaryKey(Test record);

}
