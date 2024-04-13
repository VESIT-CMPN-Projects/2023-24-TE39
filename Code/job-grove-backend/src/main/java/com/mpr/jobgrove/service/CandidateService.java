package com.mpr.jobgrove.service;

import com.mpr.jobgrove.repository.CandidateRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class CandidateService {
    @Autowired
    CandidateRepository candidateRepository;

    @Autowired
    UserService userService;

    public ResponseEntity<List<Map<String,Object>>> getCategories(HttpServletRequest httpServletRequest){
        boolean isValid = userService.isTokenValid(httpServletRequest);
        System.out.println(isValid);
        if(isValid){
//            System.out.println(this.candidateRepository.getCategories());
            return ResponseEntity.ok(this.candidateRepository.getCategories());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.emptyList());
    }

    public ResponseEntity<List<Map<String,Object>>> getLocations(HttpServletRequest httpServletRequest){
        boolean isValid = userService.isTokenValid(httpServletRequest);
        System.out.println(isValid);
        if(isValid){
//            System.out.println(this.candidateRepository.getLocations());
            return ResponseEntity.ok(this.candidateRepository.getLocations());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.emptyList());
    }

    public ResponseEntity<List<Map<String,Object>>> getJobs(HttpServletRequest httpServletRequest){
        boolean isValid = userService.isTokenValid(httpServletRequest);
        System.out.println(isValid);

        if(isValid){
            return ResponseEntity.ok(this.candidateRepository.getJobs());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.emptyList());
    }
    public ResponseEntity<List<String>> applyJob(Map<String,Object> body, HttpServletRequest httpServletRequest) {
        boolean isValid = userService.isTokenValid(httpServletRequest);

        if (isValid) {
            System.out.println(body);
            int candidateId = (int) body.get("candidateId");
            int jobId = (int) body.get("jobId");
            int noOfRows = candidateRepository.applyJob(candidateId, jobId);
            if (noOfRows > 0)
                return ResponseEntity.ok(List.of("Success"));
            else
                return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(List.of("Updation failed"));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(List.of("Unauthorized"));
    }
}
