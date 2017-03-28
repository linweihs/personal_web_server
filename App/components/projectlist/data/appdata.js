var appData = angular.module("resumeApp.appData", []);

appData.value("resumeData", {
    companyHistory : {
        Yahoo : {
            name : "Yahoo!",
            url : "https://www.yahoo.com",
            title : "Production Engineer",
            date : "Jul 2014 - Present",
            descriptions : [ {
               item : "Responsible for operability, scalability, capacity, stability and performance of system."
            }, {
               item : "Spent 20% of time writing automation/monitoring script."
            }, {
               item : "Reduced 67% of alerts noise by automating script such as service restart, memory/disk cleaned up, etc. in a course of two quarters."
            }, {
               item : "Developed scripts to reset the state of servers and recover the issue if problem occurs."
            }, {
               item : "Automated monitoring script for checking the data freshness on HDFS in order to fill the monitor gap."
            }, {
               item : "Grid retention: defined retention policy and implemented automation script for cleaning up old data on grid."
            }, {
               item : "Experienced with Linux system-level tools to troubleshoot complex end-to-end system issues including web services, internal dependencies, grid computing such as HDFS, HBase, Storm topology, etc. in timely and efficient manner."
            }, {
               item : "Scaled up/out systems with careful capacity planning and traffic analysis on quarterly basis."
            }, {
               item : "Reduced service cost by cleaning up zombie/idle hosts and virtualized over 1,000 underutilized hardwares."
            }, {
               item : "CICD(Continuous Integration Continuous Development) best practice using jenkins, git, chef."
            } ]
        }
    },
    educationHistory : {
        USC : {
            degree : "Master of Science(M.S), Computer Science",
            date : "2012-2014"
        },
        Fujen : {
            degree : "Bachelor of Science(B.S), Computer Science",
            date : "2007-2011"
        }
    },
    getCompanyList : function() {
        return this.companyHistory;
    },
    getInfoForCompany : function(compName) {
        return this.companyHistory[compName];
    },
    getEducationHistory : function() {
        return this.educationHistory;
    },
    getInfoForEducation : function(eduName) {
        return this.educationHistory[eduName];
    }
});

