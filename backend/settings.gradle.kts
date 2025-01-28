rootProject.name = "core"

include("apps:job-play-domain", "apps:job-play-admin", "libs:database", "libs:logging")

pluginManagement {
    val springBootVersion: String by settings
    val springDependencyManagementVersion: String by settings

    resolutionStrategy {
        eachPlugin {
            when(requested.id.id) {
                "org.springframework.boot" -> useVersion(springBootVersion)
                "io.spring.dependency-management" -> useVersion(springDependencyManagementVersion)
            }
        }
    }
}
