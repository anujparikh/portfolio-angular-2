import {CompanyInfo} from "./company-info";

var uptake:CompanyInfo = {
    id: 1,
    name: "Uptake",
    image: "uptake-logo.png",
    modalTarget: "uptakeModal",
    location: "Chicago, IL",
    start: "September, 2015",
    end: "August, 2016",
    displayLink: "www.uptake.com",
    link: "http://www.uptake.com",
    about: [
        "Uptake was listed as Hottest Startup of 2015 beating Slack and Uber by Forbes.",
        "Uptake is developing an Analytics and Predictive Software backend service for major industries like construction, aviation, mining, rail, and more.",
        "The company is building the singular platform that defines data-driven insight in major global industries."
    ],
    role: "Full Stack Developer for an ever expanding number of clients including CAT, EMD, BNSF and many more.",
    technologies: [
        "Being the first predictive analytics company in my career and being one among the best startup of 2015, I've learned to be proficient in a fast-pace Agile work environment. The great variety of work, technologies and prestigious clients involved makes it an interesting place to work in, always on the run to grant quality code on tight deadlines.",
        "Involved in developing and integrating new Data Science models for different clients using Akka (Java) for parallel and concurrent processing.",
        "Following a test-driven development by writing tests for Java programs using JUnit.",
        "Developing web-based user interface for company's product using AngularJS, HTML5, CSS3, JQuery.",
        "Writing unit tests during our UI development using Karma, Jasmine and Mocha.",
        "Hands-on experience with Docker, Mesos and Marathon.",
        "Excelent exposure to No-SQL Databases like ElasticSearch."
    ]
}

var wsu:CompanyInfo = {
    id: 2,
    name: "Wayne State University",
    image: "wsu-logo.png",
    modalTarget: "wsuModal",
    location: "Detroit, MI",
    start: "May, 2015",
    end: "August, 2015",
    displayLink: "www.library.wayne.edu",
    link: "http://library.wayne.edu/",
    about: [
        "Founded in 1868, Wayne State University is a nationally recognized metropolitan research institution offer more than 370 academic programs through 13 schools and colleges to nearly 28,000 students.",
        "Wayne State University having multiple libraries support vivid features through its website like Online issuing, Elibrary for ebooks, Interlibrary loan, Ask-a-librarian feature, Quicksearch and many more.",
    ],
    role: "Front End Developer involved in Fall release of Library website for the University.",
    technologies: [
        "Active member of development team for upgrading Library website with newer features like logging user actives, parsing logs, Quicksearch functionality using Solr Indexing.",
        "Developed and implemented a flow, which would record user's click on the website using PHP and store them in MySQL database using Python script.",
        "Imported data from MySQL to Solr4.1 database for more meaningful return of search done by user using Solr's import functionality.",
        "Developing web-based user interface for company's product using AngularJS, HTML5, CSS3, JQuery.",
        "Implemented Autocomplete functionality which returned combination of data fetched from Solr database based on user activities and Google's Autocomplete.",
        "Modified look-n-feel for library website, to be more consistent with other University's website.",
    ]
}

export const companyInfos:CompanyInfo[] = [uptake, wsu];