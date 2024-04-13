package com.mpr.jobgrove.web;

import com.mpr.jobgrove.service.RecruiterService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/recruiter")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class RecruiterResource {

    @Autowired
    RecruiterService recruiterService;

    @PostMapping("/login")
    public Map<String,Object> login(@RequestBody Map<String,Object> body){
        return recruiterService.login(body);
    }

    @PostMapping("/register")
    public int insertUser(@RequestBody Map<String,Object> body){
        System.out.println(body);
        return recruiterService.insertUser(body);
    }

    @PostMapping("/uploadFile")
    public void uploadFile(@RequestParam MultipartFile file){
        this.recruiterService.uploadFile(file);
    }
    @PostMapping("/post-job")
    public int postJob(@RequestBody Map<String,Object> body){
        System.out.println(body);
        return recruiterService.postJob(body);
    }

    @GetMapping("/sector")
    public List<Map<String,Object>> getSector(){
        return recruiterService.getSector();
    }
    @GetMapping("/jobListing")
    public List<Map<String,Object>> getJobs(@RequestParam("companyId") String companyId ){
        System.out.println(companyId);
        return recruiterService.getJobs(Integer.parseInt(companyId));
    }

    @GetMapping("/candidateListing")
    public List<Map<String,Object>> getCandidates(@RequestParam("recruiterId") String recruiterId){
        return recruiterService.getCandidates(Integer.parseInt(recruiterId));
    }

}
