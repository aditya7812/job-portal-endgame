import React, { useEffect, useState } from 'react';
import JobCards from "./JobCards";
import "./SearchedJobs.css"
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase';


export default function SearchedJobs({isEmployer}) {
  const [jobs, setJobs] = useState([]);
  const jobRoles = ["Senior Level", "Mid Level", "Junior Level", "Entry Level"]
  const jobTypes = ["Full-time", "Part-time", "Internship", "Contract"]
  const [counts, setcounts] = useState([])
  const [typeCount, setTypeCount] = useState([])
  useEffect(() => {
    const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "jobcollection"));
      //const data = await db.collection('jobcollection').get();
      setJobs(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

      let i=0,j=0,k=0,l=0;
      const tempcounts = []
      querySnapshot.docs.forEach((doc) => {
        if (doc.data().jobRole == "Senior") {
          i++;
        }
      })
      tempcounts.push(i)

      querySnapshot.docs.forEach((doc) => {
        if (doc.data().jobRole == "Mid") {
          j++;
        }
      })
      tempcounts.push(j)

      querySnapshot.docs.forEach((doc) => {
        if (doc.data().jobRole == "Junior") {
          k++;
        }
      })
      tempcounts.push(k)

      querySnapshot.docs.forEach((doc) => {
        if (doc.data().jobRole == "Entry") {
          l++;
        }
      })
      tempcounts.push(l)
      console.log(tempcounts)


      let w=0,x=0,y=0,z=0;
      const temptypecounts = []
      querySnapshot.docs.forEach((doc) => {
        if (doc.data().jobType == "Full-time") {
          w++;
        }
      })
      temptypecounts.push(w)

      querySnapshot.docs.forEach((doc) => {
        if (doc.data().jobType == "Part-time") {
          x++;
        }
      })
      temptypecounts.push(x)

      querySnapshot.docs.forEach((doc) => {
        if (doc.data().jobType == "Internship") {
          y++;
        }
      })
      temptypecounts.push(y)

      querySnapshot.docs.forEach((doc) => {
        if (doc.data().jobType == "Contract") {
          z++;
        }
      })
      temptypecounts.push(z)

      setcounts(tempcounts)
      setTypeCount(temptypecounts)
      console.log('count: ', counts);
      
      

      //setJobs(querySnapshot.forEach((doc) => ({ ...doc.data(), id: doc.id})))
      //setJobs(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
    return (
      <div className="main-container">
        <div className="search-type">
          <h3>No. of Jobs Available</h3>
            <div className="job-time">
              <div className="job-time-title">Seniority Level</div>
              <div className="job-wrapper">
                
                
                    <div className="type-container" key={jobRoles[0]}>
                    <label htmlFor="job1">{jobRoles[0]} Jobs</label>
                    <span className="job-number">{counts[0]}</span>
                  </div>
                  <div className="type-container" key={jobRoles[1]}>
                    <label htmlFor="job1">{jobRoles[1]} Jobs</label>
                    <span className="job-number">{counts[1]}</span>
                  </div>
                  <div className="type-container" key={jobRoles[2]}>
                    <label htmlFor="job1">{jobRoles[2]} Jobs</label>
                    <span className="job-number">{counts[2]}</span>
                  </div>
                  <div className="type-container" key={jobRoles[3]}>
                    <label htmlFor="job1">{jobRoles[3]} Jobs</label>
                    <span className="job-number">{counts[3]}</span>
                  </div>
              </div>
            </div>
            <div className="job-time">
              <div className="job-time-title">Job Type</div>
              <div className="job-wrapper">
                
                
                    <div className="type-container" key={jobTypes[0]}>
                    <label htmlFor="job1">{jobTypes[0]} Jobs</label>
                    <span className="job-number">{typeCount[0]}</span>
                  </div>
                  <div className="type-container" key={jobTypes[1]}>
                    <label htmlFor="job1">{jobTypes[1]} Jobs</label>
                    <span className="job-number">{typeCount[1]}</span>
                  </div>
                  <div className="type-container" key={jobTypes[2]}>
                    <label htmlFor="job1">{jobTypes[2]} Jobs</label>
                    <span className="job-number">{typeCount[2]}</span>
                  </div>
                  <div className="type-container" key={jobTypes[3]}>
                    <label htmlFor="job1">{jobTypes[3]} Jobs</label>
                    <span className="job-number">{typeCount[3]}</span>
                  </div>
               
              </div>
            </div>
          </div>

        <div className="searched-jobs">
          <div className="job-cards">
           {jobs.map((job) => (
              <JobCards key={job.id} jobData={job} isEmployer={isEmployer} />
            ))}
            </div>
            {/*<div className="searched-bar">
              <div className="searched-show">Showing 46 Jobs</div>
              <div className="searched-sort">
                Sort by: <span className="post-time">Newest Post </span
                ><span className="menu-icon">▼</span>
              </div>
    </div>
            <JobList/>*/}
        </div>
        </div>
    )
    
};
