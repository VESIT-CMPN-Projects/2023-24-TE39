package com.mpr.jobgrove.web;

import com.mpr.jobgrove.service.CandidateService;
import com.mpr.jobgrove.service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class CandidateResource {
    @Autowired
    CandidateService candidateService;

    @GetMapping("/category")
    public ResponseEntity<List<Map<String, Object>>> getCategories(HttpServletRequest httpServletRequest){
//        System.out.println(httpServletRequest);
        return this.candidateService.getCategories(httpServletRequest);
    }
    @GetMapping("/location")
    public ResponseEntity<List<Map<String, Object>>> getLocations(HttpServletRequest httpServletRequest){
//        System.out.println(httpServletRequest);
        return this.candidateService.getLocations(httpServletRequest);
    }

    @GetMapping("/job")
    public ResponseEntity<List<Map<String, Object>>> getJobs(HttpServletRequest httpServletRequest){
//        System.out.println(httpServletRequest);
        return this.candidateService.getJobs(httpServletRequest);
    }

    @PostMapping("/applyJob")
    public ResponseEntity<List<String>> applyJob(@RequestBody Map<String,Object> body, HttpServletRequest httpServletRequest){
        System.out.println(body);
        return this.candidateService.applyJob(body,httpServletRequest);
    }

}
