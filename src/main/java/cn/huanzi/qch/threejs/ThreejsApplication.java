package cn.huanzi.qch.threejs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@SpringBootApplication
public class ThreejsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ThreejsApplication.class, args);
    }

    @GetMapping("/")
    public ModelAndView index(){
        return new ModelAndView("index");
    }
}
