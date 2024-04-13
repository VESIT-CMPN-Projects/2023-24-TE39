package com.mpr.jobgrove.service;

import com.mpr.jobgrove.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public int insertUser(@NotNull Map<String,Object> user, @NotNull Map<String,Object> resume){
        String firstname=(String) user.get("firstname");
        String lastname=(String) user.get("lastname");
        long contact=(Long)user.get("contact");
        String email=(String)user.get("email");
        String position = (String) user.get("position");
        String gender=(String)user.get("gender");
        String password=(String)user.get("password");
        String resumeUrl=(String)user.get("resumeUrl");
        List<Map<String,Object>> education= (List<Map<String, Object>>) resume.get("education");
        List<Map<String,Object>> skills= (List<Map<String, Object>>) resume.get("skills");
        List<Map<String,Object>> workExperience= (List<Map<String, Object>>) resume.get("workExperience");
        Map<String,Object> candidate=userRepository.inserUser(firstname,lastname,contact,email,gender,password,resumeUrl,position);
        int candidateId=(int)candidate.get("candidate_id");
        System.out.println(candidateId);
        if(addEducation(education,candidateId)==0) return 0;
        if(addSkills(skills,candidateId)==0) return 0;
        if(addWorkExperience(workExperience,candidateId)==0) return 0;
        return 1;
    }


    public int addWorkExperience(List<Map<String,Object>> workExperience,int candidateId){
        String w_type,position,w_company,pos_description,start_date,end_date;
        int tenure;
        for(int i=0;i<workExperience.size();i++){
            w_type=(String) workExperience.get(i).get("w_type");
            position=(String) workExperience.get(i).get("position");
            w_company=(String) workExperience.get(i).get("company");
            pos_description=(String) workExperience.get(i).get("description");
            tenure=(int) workExperience.get(i).get("tenure");

            int noOfRows=userRepository.addWorkExperience(w_type,position,w_company,pos_description,tenure,candidateId);
            if(noOfRows<0){
                return 0;
            }
        }
        return 1;
    }
    public int addSkills(List<Map<String,Object>> skills,int candidateId){
        String skillName;
        for(int i=0;i<skills.size();i++){
            skillName=(String) skills.get(i).get("skillName");
            int noOfRows=userRepository.addSkills(skillName,candidateId);
            if(noOfRows<0){
                return 0;
            }
        }
        return 1;
    }
    public int addEducation(List<Map<String,Object>> education,int candidateId){
        String institution,degree,degree_location;
        int year,percentage;
        for(int i=0;i<education.size();i++){
            institution=(String)education.get(i).get("institution");
            degree=(String)education.get(i).get("degree");
            degree_location=(String)education.get(i).get("location");
            year=Integer.parseInt((String)education.get(i).get("year"));
            percentage=Integer.parseInt((String)education.get(i).get("percentage"));

            int noOfRows=userRepository.addEducation(institution,degree,degree_location,year,percentage,candidateId);
            if(noOfRows<0){
                return 0;
            }
        }
        return 1;
    }

    public Map<String,Object> login(@RequestBody Map<String,Object> body){
        String email=(String)body.get("email");
        String password=(String)body.get("password");
        return userRepository.login(email,password);
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
    public int calculateTenure(String startDateStr, String endDateStr) {
        // Parse start date and end date
        LocalDate startDate = LocalDate.parse(startDateStr, DateTimeFormatter.ISO_DATE);
        LocalDate endDate = LocalDate.parse(endDateStr, DateTimeFormatter.ISO_DATE);

        // Calculate duration between start date and end date
        int tenure = endDate.getYear() - startDate.getYear();

        // Adjust tenure based on months and days
        if (endDate.getMonthValue() < startDate.getMonthValue() ||
                (endDate.getMonthValue() == startDate.getMonthValue() && endDate.getDayOfMonth() < startDate.getDayOfMonth())) {
            tenure--;
        }

        return tenure;
    }


    public boolean isTokenValid(HttpServletRequest httpServletRequest){
        Cookie[] cookies = httpServletRequest.getCookies();
        if(cookies == null) return false;
        Map<String,String> cookieMap = getCookiesAsHashMap(cookies);
        Map<String,Object> result = userRepository.validateToken(Integer.parseInt(cookieMap.get("id")),cookieMap.get("token"));
        System.out.println(result);
        int validYn = (Integer) result.get("validYN");
        return validYn == 1;
    }

    private Map<String,String> getCookiesAsHashMap(Cookie[] cookies){
        Map<String,String> cookieMap = new HashMap<>();
        for(Cookie c : cookies) cookieMap.put(c.getName(),c.getValue());
        return cookieMap;
    }
}
