package com.mpr.jobgrove.web;

import com.mpr.jobgrove.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserResource {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public int insertUser(@RequestBody Map<String,Object> body){
        Map<String, Object> user = (Map<String, Object>) body.get("user");
        Map<String, Object> resume = (Map<String, Object>) body.get("resume");
        System.out.println(user+" "+resume);
        return userService.insertUser(user,resume);
    }

    @PostMapping("/login")
    public Map<String,Object> login(@RequestBody Map<String,Object> body){
        return userService.login(body);
    }

    @PostMapping("/uploadFile")
    public void uploadFile(@RequestParam MultipartFile file){
        this.userService.uploadFile(file);
    }

    @GetMapping(value = "/getUploadfiles/{file}",produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public byte[] getImage(@PathVariable String file) throws IOException {
        String filename = file;
        File serverFile = new File("uploads/" + filename);
        return Files.readAllBytes(serverFile.toPath());
    }
}
