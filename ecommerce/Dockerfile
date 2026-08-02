# syntax=docker/dockerfile:1

FROM maven:3.9.9-eclipse-temurin-25 AS build
WORKDIR /workspace/app

COPY pom.xml ./
RUN mvn -B -DskipTests dependency:go-offline

COPY src ./src
RUN mvn -B -DskipTests package

FROM eclipse-temurin:25-jre
WORKDIR /app

COPY --from=build /workspace/app/target/*.jar app.jar

EXPOSE 8080

ENV DB_URL=jdbc:mysql://localhost:3306/ecommerce \
    DB_USERNAME=root \
    DB_PASSWORD=nikhil

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
