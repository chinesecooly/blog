# syntax=docker/dockerfile:1

FROM eclipse-temurin:17-jdk-jammy as base
WORKDIR /blog-server
COPY .mvn ./.mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:resolve
COPY src ./src

FROM base as dev
EXPOSE 8000
RUN chmod +x mvnw
ENTRYPOINT ["./mvnw", "spring-boot:run"]

FROM base as build
RUN ./mvnw package

FROM eclipse-temurin:17-jre-jammy as prod
EXPOSE 8000
COPY --from=build /blog-server/target/blog-*.jar ./blog.jar
ENTRYPOINT ["java", "-jar", "/blog.jar"]
