package com.mpr.jobgrove.web;


import com.mpr.jobgrove.repository.AdminService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200" , allowCredentials = "true")
public class AdminResource {
    @Autowired
    AdminService adminService;

    @PostMapping("/admin-login")
    public Map<String,Object> loginOfAdmin(@RequestBody Map<String,Object> body){
        return adminService.loginOfAdmin(body);
    }
    @GetMapping("/admin-company")
    public List<Map<String,Object>> fetchCmopanies(){
        return adminService.fetchCompanies();
    }

    @PostMapping("/update-status")
    public Map<String,Object> updateStatus(@RequestBody Map<String,Object> body){
        return adminService.updateStatus(body);
    }

}
