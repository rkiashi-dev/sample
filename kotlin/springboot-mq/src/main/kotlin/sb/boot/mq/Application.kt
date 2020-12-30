package sb.boot.mq

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.ApplicationContext

@SpringBootApplication
open class Application : CommandLineRunner {

    @Autowired
    lateinit var context: ApplicationContext

    override fun run(vararg args: String?) {
        for( n in context.beanDefinitionNames) {
            println( n )
        }
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}