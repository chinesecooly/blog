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
CMD ["./mvnw", "spring-boot:run"]

FROM base as build
RUN ./mvnw package

FROM eclipse-temurin:17-jre-jammy as prod
EXPOSE 8080
COPY --from=build /blog/target/blog-*.jar /blog.jar
CMD ["java",  "-jar", "/blog.jar"]
