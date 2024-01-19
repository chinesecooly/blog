# 项目介绍
该项目是一个入门CICD-Demo，它由以下几部分组成：
- Dockerfile：用于构建自定义镜像
- compose.yml：用于搭建应用程序依赖环境并部署
- deploy.yml：通过GitHub Actions连接腾讯云服务器并构建环境

通过这个Demo，你可以：
- 从开发到部署所需的所有操作全部都在本地定义完成
- 不需要在服务器上手动安装任何软件即可完成部署
- 每次在代码合并到master时自动完成构建和部署

测试网址：[www.ningyu.ink](https://www.ningyu.ink)

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/c4014164c57846f39050aa28849fe6fb.png)


# Dockerfile解析
这个Dockerfile分为四个构建阶段：
- base：构建基础镜像
- dev：构建开发环境镜像
- build：打包
- prod：构建生产环境镜像

```bash
# syntax=docker/dockerfile:1

FROM eclipse-temurin:17-jdk-jammy as base
WORKDIR /blog
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:resolve
COPY src ./src

FROM base as dev
EXPOSE 8080
RUN chmod +x mvnw
CMD ["./mvnw", "spring-boot:run"]

FROM base as build
RUN ./mvnw package

FROM eclipse-temurin:17-jre-jammy as prod
EXPOSE 8080
COPY --from=build /blog/target/blog-*.jar /blog.jar
CMD ["java", "-jar", "/blog.jar"]
```
# compose.yml解析
该文件包含两个profiles：
- dev：开发环境，可使用`docker compose --profiles dev up -d --build`在本地运行
- prod：生产环境：可使用`docker compose --profiles prod up -d --build`在服务器运行

```yml
services:
  blog-dev:
    build:
      context: .
      target: dev
    container_name: blog
    ports:
      - "8080:8080"
    environment:
      - MYSQL_URL=jdbc:mysql://mysql/blog?serverTimezone=Asia/Shanghai
    volumes:
      - ./:/blog
    networks:
      mysql-net:
    depends_on:
      - mysql-dev
    profiles:
      - dev

  blog-prod:
    build:
      context: .
      target: prod
    container_name: blog
    environment:
      - MYSQL_URL=jdbc:mysql://mysql/blog?serverTimezone=Asia/Shanghai
    volumes:
      - ./:/blog
    networks:
      mysql-net:
      nginx-net:
    depends_on:
      - mysql-prod
    profiles:
      - prod

  mysql-dev:
    image: mysql:8.0
    container_name: mysql
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=123456
      - MYSQL_DATABASE=blog
    volumes:
      - mysql_data:/var/lib/mysql
      - mysql_config:/etc/mysql/conf.d
      - ./sql/init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      mysql-net:
    profiles:
      - dev

  mysql-prod:
    image: mysql:8.0
    container_name: mysql
    environment:
      - MYSQL_ROOT_PASSWORD=123456
      - MYSQL_DATABASE=blog
    volumes:
      - mysql_data:/var/lib/mysql
      - mysql_config:/etc/mysql/conf.d
      - ./sql/init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      mysql-net:
    profiles:
      - prod

  nginx-dev:
    image: nginx
    container_name: nginx
    ports:
      - "80:80"
      - "443:443"
    environment:
      - NGINX_HOST=ningyu.ink
      - NGINX_PORT=80
    volumes:
      - ./nginx/templates:/etc/nginx/templates
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/ssl:/etc/nginx/ssl
    networks:
      nginx-net:
    profiles:
      - dev

  nginx-prod:
    image: nginx
    container_name: nginx
    ports:
      - "80:80"
      - "443:443"
    environment:
      - NGINX_HOST=ningyu.ink
      - NGINX_PORT=80
    volumes:
      - ./nginx/templates:/etc/nginx/templates
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/ssl:/etc/nginx/ssl
    networks:
      nginx-net:
    profiles:
      - prod

volumes:
  mysql_data:
  mysql_config:

networks:
  mysql-net:
    driver: bridge
  nginx-net:
    driver: bridge
```
## Nginx反向代理到容器以及SSL证书设置
Nginx的所有配置都在项目下的nginx目录下并通过三个挂在绑定挂载到了容器中：

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/707c8e3ee4eb451fa6a779f3e6e61124.png)
其中：
- ssl：用于存放SSL证书
- templates：用于存放前端代码
- nginx.conf：用于自定义配置

由于本项目还没有前端代码，所以在访问时直接代理到了后端接口，具体配置如下：

```conf
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
     listen 443 ssl;
     server_name ningyu.ink;
     ssl_certificate  /etc/nginx/ssl/ningyu.ink_bundle.crt;
     ssl_certificate_key /etc/nginx/ssl/ningyu.ink.key;
     ssl_session_timeout 5m;
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
     ssl_protocols TLSv1.2 TLSv1.3;
     ssl_prefer_server_ciphers on;
        location / {
          proxy_pass http://blog:8000/test/log;
        }
    }

    server {
        listen       80;
        server_name  ningyu.ink;
        return 301 https://$host$request_uri;
    }
}
```
其中我们将80端口转发到了443端口，并且在配置文件中可以直接使用容器名称进行网络代理（前提是在同一网络下）：

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/d7d638ad1ea440479caf85c93ffcb887.png)

## MySQL的准备工作
MySQL的compose.yml构建语法是这样的：

```yml
  mysql-prod:
    image: mysql:8.0
    container_name: mysql
    environment:
      - MYSQL_ROOT_PASSWORD=123456
      - MYSQL_DATABASE=blog
    volumes:
      - mysql_data:/var/lib/mysql
      - mysql_config:/etc/mysql/conf.d
      - ./sql/init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      mysql-net:
    profiles:
      - prod
```
它做了以下事情：
- 传递了两个环境变量：
    - `MYSQL_ROOT_PASSWORD`指定了root密码
    - `MYSQL_DATABASE`指定了容器运行后需要创建的数据库
- 绑定了三个卷：其中第三个指定了一个在项目目录`/sql/init.sql`的初始化脚本，该脚本用于在数据库中创建应用需要的表
## Spring和环境变量的交互
可以看到application.yml内容是这样的：

```yml
server:
  port: 8080

spring:
  application:
    name: blog
  datasource:
    username: ${MYSQL_USER:root}
    password: ${MYSQL_PASSWORD:123456}
    url: ${MYSQL_URL:jdbc:mysql://localhost/blog?serverTimezone=Asia/Shanghai}
    driver-class-name: com.mysql.cj.jdbc.Driver

mybatis:
  mapper-locations: classpath:mapper/*.xml
```
其中通过`${}`读取的环境变量值都是在compose.yml中定义的，这极大增强了灵活性。
# GitHub Action解析
GitHub Action通过.`github/workflows`下的`deploy.yml`起作用，其文件内容是这样的：

```yml
name: Deploy
on:
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to tencent server
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.REMOTE_HOST}}
          key: ${{ secrets.SERVER_SSH_KEY }}
          username: ${{ secrets.REMOTE_USER }}
          script: |
            # 切换到主目录
            cd ~ || exit
            # 判断是否安装了Docker，如果没有则使用官方提供的脚本安装Docker
            if ! command -v docker &> /dev/null ; then
              curl -fsSL https://get.docker.com -o get-docker.sh
              sh get-docker.sh
            fi
            # 判断是否拉拉取了代码，没有拉取则拉取
            if [ ! -d "./blog" ]; then
              git clone https://github.com/chinesecooly/blog.git
            fi
            # 进入工作目录
            cd blog || exit
            # 更新代码
            git pull
            # 运行prod环境下的构建，并且每次都重新构建镜像
            docker compose --profile prod up -d --build
```
它的作用如下：
- 当向master分支推送代码时就自动运行该action
- 使用了一个别人定义好的action（appleboy/ssh-action@v1.0.3）通过ssh连接到了腾讯云服务器，这个action需要三个参数（`with`语句中指定的），这三个参数存储在以下位置，需要根据自己的服务器配置。
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/ad27b741c7a44adb94c6da3565e9f556.png)
- 最后与执行了一个Shell脚本，该脚本有以下功能：
    - 首先检查服务器上是否安装了Docker，如果没安装则下官方提供的Shell脚本进行安装
    - 再检查是否拉取了代码，如果没拉取则拉取
    - 然后进入项目目录并更新代码
    - 最后使用`docker compose --profile prod up -d --build`命令部署项目，`--profile`选项指定了选取的`profile`，`-d`选项指定了容器在后台运行，`--build`选项指定了每次运行这条指令时都重新构建镜像，这保证了我们每次更新的代码都能署到服务器上

# 项目测试
以下Controller是该项目提供的一个测试Controller，他完成了一次接收请求、操作数据库、做出响应的过程：
```java
@Slf4j
@RestController
@RequestMapping("/test")
public class TestController {
    @Resource
    private TestMapper testMapper;

    @GetMapping("/log")
    public Result log() {
        Test test = new Test();
        test.setMsg("a get request");
        test.setData(LocalDateTime.now());
        testMapper.insert(test);
        return Result.success(test);
    }
}
```
项目部署后访问一下是这样的：

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/873fcedb5c414161b1cf5e1b4609ce0f.png)


我们在`dev`修改一下代码：

```java
@Slf4j
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
```

合并到`master`并推送，等待几秒再次访问一下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/e23bf4dfb8d94befa174daadbdd582ad.png)


以下是GitHub Actions两次执行的记录：

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/0d77cae9c42c4384b6316c3256509442.png)
