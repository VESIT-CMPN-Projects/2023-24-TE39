package com.mpr.jobgrove.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.List;

@Repository
public class AdminRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;
    public int registerUser(String username,String password,String eamil,String fullname,String mobile){
        return jdbcTemplate.update("EXEC [dbo].[sp_insert_users] ?,?,?,?,?",username,password,eamil,fullname,mobile);
    }
    public Map<String,Object> loginOfAdmin(String admin_name, String password){
        return jdbcTemplate.queryForMap("EXEC job_portal.sp_check_login_admin ?,?",admin_name,password);
    }

    public List<Map<String,Object>> fetchCompanies(){
        return jdbcTemplate.queryForList("EXEC job_portal.sp_fetch_company_details");
    }

    public Map<String,Object> updateStatus(int id,String ans){
        return jdbcTemplate.queryForMap("EXEC job_portal.sp_approve_reject ?,?",id,ans);
    }

}
