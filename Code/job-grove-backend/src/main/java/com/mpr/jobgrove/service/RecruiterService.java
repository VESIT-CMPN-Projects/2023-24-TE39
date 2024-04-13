package com.mpr.jobgrove.service;

import com.mpr.jobgrove.repository.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Map;

@Service
public class RecruiterService {
    @Autowired
    RecruiterRepository recruiterRepository;
    public Map<String,Object> login(Map<String,Object> body){
        String email=(String)body.get("email");
        String password=(String)body.get("password");
        return recruiterRepository.login(email,password);
    }

    public int insertUser(Map<String,Object> body){
        String recruiterName=(String) body.get("recruiterName");
        int phoneNo=(Integer)body.get("phoneNo");
        String email=(String) body.get("email");
        String password=(String) body.get("password");
        String companyName=(String) body.get("companyName");
        String description=(String) body.get("description");
        String location=(String) body.get("location");
        int companyPhoneNo=(Integer)body.get("companyPhoneNo");
        String website=(String) body.get("website");
        String industry=(String) body.get("industry");
        String gst_in=(String) body.get("gst_in");
        String license=(String) body.get("license");
        String logo_url=(String) body.get("logo_url");

        Map<String,Object> registered=recruiterRepository.insertUser(recruiterName,phoneNo,email,password,companyName,description,location,companyPhoneNo,website,industry,gst_in,license,logo_url);
        return (int)registered.get("Registered");

    }

    public int postJob(Map<String,Object> body){

        String jobTitle=(String) body.get("jobTitle");
        String jobDescription=(String) body.get("jobDescription");
        long salary=Long.parseLong((String) body.get("salary"));
        String jobRequirement=(String) body.get("jobRequirement");
        String jobType=(String) body.get("jobType");
        String startDate=(String) body.get("startDate");
        int companyId=(int)body.get("companyId");
        int sectorId=(int)body.get("sectorId");
        String jdURL=(String) body.get("jdURL");
        String location=(String) body.get("location");
        int locationId=(int)recruiterRepository.addLocation(location).get(0).get("Location");
        int jobID=(int)recruiterRepository.postJob(jobTitle,jobDescription,salary,jobRequirement,jobType,startDate,companyId,sectorId,jdURL).get("job_id");

        int noOfRows=recruiterRepository.jobLocation(locationId,jobID);
        if(noOfRows>1) return 1;
        return 0;
    }
    public List<Map<String,Object>> getSector(){
        return recruiterRepository.getSector();
    }

    public void uploadFile(MultipartFile data){
        Path path = Paths.get("uploads");
        try{
            if(!Files.exists(path)){
                Files.createDirectory(path);
            }
            String fileName = StringUtils.cleanPath(data.getOriginalFilename());
            Path finalPath = path.resolve(fileName);
            InputStream inputStream = data.getInputStream();
            Files.copy(inputStream, finalPath, StandardCopyOption.REPLACE_EXISTING);

        }
        catch (Exception e){
            e.printStackTrace();
        }

    }
    public List<Map<String,Object>> getJobs(int companyId ){
        return recruiterRepository.getJobs(companyId);
    }

    public List<Map<String,Object>> getCandidates(int recruiterId ){
        return recruiterRepository.getCandidates(recruiterId);
    }
}
