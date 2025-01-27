tasks.getByName("bootJar") {
    enabled = true
}

tasks.getByName("jar") {
    enabled = false
}

dependencies {
//    implementation(project(":logging")) // logger module

    implementation("org.springframework.boot:spring-boot-starter-web")
}
