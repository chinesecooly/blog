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
EXPOSE 8000
RUN chmod +x mvnw
CMD ["./mvnw", "spring-boot:run", "-Dspring-boot.run.jvmArguments='-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:8000'"]

FROM base as build
RUN ./mvnw package

FROM eclipse-temurin:17-jre-jammy as prod
EXPOSE 8080
COPY --from=build /blog/target/blog-*.jar /blog.jar
CMD ["java", "-Djava.security.egd=file:/dev/./urandom" , "-jar", "/blog.jar"]
