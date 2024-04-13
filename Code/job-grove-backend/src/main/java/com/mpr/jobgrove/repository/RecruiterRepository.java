package com.mpr.jobgrove.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class RecruiterRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public Map<String,Object> login(String email, String password){
        return jdbcTemplate.queryForMap("EXEC job_portal.sp_login_recruiter ?,?",email,password);
    }

    public List<Map<String,Object>> addLocation(String location){
        return jdbcTemplate.queryForList("EXEC job_portal.add_job_location ?",location);
    }
    public List<Map<String,Object>> getSector(){
        return jdbcTemplate.queryForList("SELECT * FROM job_portal.sector");
    }
    public Map<String,Object> insertUser(String recruiterName,int phoneNo,String email,String password,String companyName,String description,String location,int companyPhoneNo,String website,String industry,String gst_in,String license,String logo_url){
        return jdbcTemplate.queryForMap("EXEC job_portal.sp_register_recruiter ?,?,?,?,?,?,?,?,?,?,?,?,?",recruiterName,phoneNo,email,password,companyName,description,location,companyPhoneNo,website,industry,gst_in,license,logo_url);
    }

    public Map<String,Object> postJob(String jobTitle,String jobDescription,long salary,String jobRequirement,String jobType,String startDate,int companyId,int sectorId,String jdURL){
        return jdbcTemplate.queryForMap("EXEC job_portal.sp_post_job ?,?,?,?,?,?,?,?,?",jobTitle,jobDescription,salary,jobRequirement,jobType,startDate,companyId,sectorId,jdURL);
    }

    public int jobLocation(int locationId,int jobID){
        return jdbcTemplate.update("INSERT INTO job_portal.cross_job_location(job_id, location_id) VALUES(?,?)",jobID,locationId);
    }

    public List<Map<String,Object>> getJobs(int companyId ){
        return jdbcTemplate.queryForList("EXEC [job_portal].[sp_fetch_jobs_for_recruiter] ?",companyId);
    }

    public List<Map<String,Object>> getCandidates(int recruiterId ){
        return jdbcTemplate.queryForList("EXEC [job_portal].[sp_fetch_candidates] ?",recruiterId);
    }
}
