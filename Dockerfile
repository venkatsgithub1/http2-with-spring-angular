FROM maven:3.6.3-openjdk-14-slim as builder
WORKDIR /out
# copy all files to /out in builder
COPY . .
RUN mvn clean install
FROM openjdk:14-jdk-alpine3.10
WORKDIR /out
ARG JAR_FILE=target/*.jar
# copy p12 and cer into respective places.
COPY ./creds/https2_test.p12 /etc/ssl/certs/https2_test.p12
COPY ./creds/https2_test.cer $JAVA_HOME/lib/security
# command to export cer from p12.
# keytool -exportcert -keystore https2_test.p12 -storepass https2_test -storetype PKCS12 -alias https2_test -file https2_test.cer
# import cer into java cacerts
RUN cd $JAVA_HOME/lib/security \
     && keytool -importcert -trustcacerts -cacerts -storepass changeit -noprompt -file https2_test.cer -alias https2_test
# copy jar
COPY --from=builder /out/${JAR_FILE} ./app.jar
# run
ENTRYPOINT ["java", "-jar", "app.jar"]