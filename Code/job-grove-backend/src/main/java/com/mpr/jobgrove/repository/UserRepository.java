package com.mpr.jobgrove.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public class UserRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public Map<String,Object> login(String email, String password){
        return jdbcTemplate.queryForMap("EXEC job_portal.sp_login_candidate ?,?",email,password);
    }

    public Map<String,Object> inserUser(String firstname,String lastname,long contact,String email,String gender,String password,String resumeUrl,String position){
        return jdbcTemplate.queryForMap("EXEC job_portal.sp_registrer_candidate ?,?,?,?,?,?,?,?",firstname,lastname,contact,email,gender,password,resumeUrl,position);
    }

    public int addEducation(String institution,String degree,String degree_location,int year,int percentage,int candidateId){
        return jdbcTemplate.update("EXEC job_portal.sp_add_education ?,?,?,?,?,?",institution,degree,year,percentage,degree_location,candidateId);
    }

    public int addSkills(String skillName,int candidateId){
        return jdbcTemplate.update("EXEC job_portal.sp_add_skills ?,?",skillName,candidateId);
    }
    public int addWorkExperience(String w_type,String position,String w_comapny,String pos_description,int tenure,int candidateId){
        return jdbcTemplate.update("EXEC job_portal.sp_add_work_exp ?,?,?,?,?,?",w_type,position,w_comapny,tenure,pos_description,candidateId);
    }

    public Map<String,Object> validateToken(int userId, String token){
        return this.jdbcTemplate.queryForMap("EXEC dbo.sp_validate_token ?,?",userId,token);
    }
}
