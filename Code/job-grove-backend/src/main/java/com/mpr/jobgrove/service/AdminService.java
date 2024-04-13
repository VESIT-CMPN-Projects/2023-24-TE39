package com.mpr.jobgrove.repository;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    com.mpr.jobgrove.web.AdminRepository adminRepository;

    public Map<String,Object> loginOfAdmin(Map<String,Object> body){
        String admin_name = (String)body.get("admin_name");
        String password = (String)body.get("password");
        return adminRepository.loginOfAdmin(admin_name,password);

    }
    public List<Map<String,Object>> fetchCompanies(){
        return adminRepository.fetchCompanies();
    }

    public Map<String,Object> updateStatus(Map<String,Object> body){
        int id = (Integer) body.get("id");
        String ans = (String)body.get("ans");
        return adminRepository.updateStatus(id,ans);
    }

//    public boolean isTokenValid(HttpServletRequest httpServletRequest){
//        //extract cookies
//        Cookie[] cookies = httpServletRequest.getCookies();
//        if(cookies==null){
//            return false;
//        }
//        Map<String,String> cookieMap = getCookiesAsHashMap(cookies);
//        Map<String,Object> result = adminRepository.validateToken(Integer.parseInt(cookieMap.get("userid")),cookieMap.get("token"));
//
//        Integer validYn=(Integer) result.get("validYN");
//
//        return validYn==1;
//
//    }
//    private Map<String,String> getCookiesAsHashMap(Cookie[] cookies){
//        Map<String,String> cookieMap = new HashMap<>();
//        for(Cookie c:cookies){
//            cookieMap.put(c.getName(),c.getValue());
//            System.out.println(c.getName()+" "+c.getValue());
//        }
//        return cookieMap;
//    }
//    public ResponseEntity<List<String>> getStudentName(HttpServletRequest httpServletRequest){
//        boolean isValid=isTokenValid(httpServletRequest);
//        System.out.println(isValid);
//        if(isValid){
//            return ResponseEntity.ok(List.of("feeling","Something","Something","Hello","Honey","bunny"));
//        }
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.emptyList());
//    }
}
