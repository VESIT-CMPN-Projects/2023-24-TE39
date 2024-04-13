package com.mpr.jobgrove.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class CandidateRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Map<String,Object>> getCategories(){
        return jdbcTemplate.queryForList("EXEC [job_portal].[fetch_all_categories] ");
    }
    public List<Map<String,Object>> getLocations(){
        return jdbcTemplate.queryForList("EXEC [job_portal].[sp_fetch_job_locations] ");
    }
    public List<Map<String,Object>> getJobs(){
        return jdbcTemplate.queryForList("EXEC [job_portal].[sp_fetch_job_posts] ");
    }

    public int applyJob(int candidateId,int jobId){
        return jdbcTemplate.update("EXEC job_portal.sp_insert_candidate_job ?,?",candidateId,jobId);
    }

}
