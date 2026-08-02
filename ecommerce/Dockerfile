# syntax=docker/dockerfile:1
 
# ---- Build stage ----
FROM eclipse-temurin:25-jdk AS build
WORKDIR /workspace/app
 
# Copy Maven wrapper and pom first (better layer caching)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B
 
# Copy source and build
COPY src src
RUN ./mvnw clean package -DskipTests -B
 
# ---- Run stage ----
FROM eclipse-temurin:25-jre
WORKDIR /app
COPY --from=build /workspace/app/target/*.jar app.jar
 
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
