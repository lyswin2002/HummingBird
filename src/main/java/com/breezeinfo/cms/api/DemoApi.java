package com.breezeinfo.cms.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by lys on 2017/9/7.
 */
@Controller
@RequestMapping("/api")
public class DemoApi {
    @RequestMapping(value = "/demo",method = RequestMethod.GET)
    @ResponseBody
    public String demo(){
        return "Spring Boot API...............";
    }
}
