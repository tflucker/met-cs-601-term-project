<script>
  export default {
    data(){
      return NaN;
    }
  }
</script>
<template>
  <main id="main-content" class="body-style">
    <section class="page-jumbotron sea-green text-center">
      <h2 class="section-header-text">Education</h2>
      <div id="education-content">
        <p>
          I graduated Trumbull High School (Connecticut) in 2010. In 2014, I
          graduated from The George Washington University with a Bachelors of
          Science in Biomedical Engineering with a minor in Chemistry. I am
          expected to graduate from Boston University with a Masters of Science
          in Software Development in Spring of 2023. I am really enjoying this
          program and I think it is a good challenge for me personally and
          professionally. With this degree I hope to reinforce my professional
          credentials, improve my self-confidence, and (hopefully) get a big
          raise/promotion at my job! Below is a table of the courses that I have
          successfully completed with their grades.
        </p>
        <div id="image-container" class="flex-center">
          <img
            src="./../assets/media/Trumbull-High-School.jpg"
            alt="Picture of Trumbull High School Logo"
            srcset="./../assets/media/Trumbull-High-School.jpg"
            class="square-image"
          />
          <img
            src="./../assets/media/George_Washington_University_seal.png"
            alt="Picture of the George Washington University seal"
            srcset="./../assets/media/George_Washington_University_seal.png"
            class="square-image"
          />
          <img
            src="./../assets/media/Boston-University-seal.png"
            alt="Picture of the Boston University seal"
            srcset="./../assets/media/Boston-University-seal.png"
            class="square-image"
          />
        </div>

        <table id="bu-transcript-table" class="text-center center-table">
          <thead>
            <tr>
              <td colspan="3">Boston University Transcript</td>
            </tr>
            <tr>
              <td>Course Number</td>
              <td>Course Name</td>
              <td>Grade</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MET CS 521</td>
              <td>Information Structures with Python</td>
              <td>A-</td>
            </tr>
            <tr>
              <td>MET CS 526</td>
              <td>Data Structures and Algorithms</td>
              <td>A-</td>
            </tr>
            <tr>
              <td>MET CS 601</td>
              <td>Web Application Development</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>MET CS 622</td>
              <td>Advanced Programming Techniques</td>
              <td>A</td>
            </tr>
            <tr>
              <td>MET CS 664</td>
              <td>Artificial Intelligence</td>
              <td>A</td>
            </tr>
            <tr>
              <td>MET CS 665</td>
              <td>Software Designs and Patterns</td>
              <td>A</td>
            </tr>
            <tr>
              <td>MET CS 673</td>
              <td>
                Software Engineering or Information Systems Analysis and Design
              </td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr />

    <section id="work-experience-section" class="bubble-container">
      <h2 class="section-header-text">Work Experience</h2>
      <div id="work-experience-content">
        <article id="deloitte-work-experience">
          <h3>Deloitte Consulting, Consultant</h3>
          <h5>October 2021 - Present</h5>
          <p>
            Responsible for designing, developing, and testing Java and
            JavaScript code for applications related to my current contract.
            Functioning in a Full-Stack type role, I will spending time working
            on various tasks / stories in the front-end and back-end of the
            application. As part of Agile/SCRUM team, I provide updates and
            impediments to my team members during our daily and weekly meetings.
            My current project is with Raytheon working as a developer on a
            support team which handles tickets for bug fixes and application
            enhancements based on client requirements and feedback. My previous
            contract was with the IRS and I was primarily responsible for
            developing Java prototypes as proof of concept (POC) and technical
            deliverables for the client.
          </p>
        </article>
        <article id="atlas-research-work-experience">
          <h3>Atlas Research, Senior Specialist</h3>
          <h5>June 2019 - September 2021</h5>
          <p>
            Responsible for designing, developing, and testing HTML, CSS, and
            JavaScript code within a SharePoint based environment. This work was
            to create or enhance existing internal websites for employees in
            addition to digitizing and modernizing forms used for a technical
            skills incentive program. I was also responsible for presenting my
            work to the client and gathering feedback and requirements for
            future development. Worked with an extremely small and lean XP
            (extreme programming) team model to rapidly deliver work to the
            client. Also responsible for refactoring the existing codebase to
            improve performance and readability.
          </p>
        </article>
        <article id="accenture-federal-work-experience">
          <h3>
            Accenture Federal Services (AFS), Senior Software Developer Analyst
          </h3>
          <h5>August 2014 - June 2019</h5>
          <p>
            Originally began as a tester responsible for manually testing
            development, and creating documentation for my project. Was able to
            learn on the job and become responsible for small code changes.
            Building my skill and confidence, I was able to switch roles to
            become a developer and work my way through the ranks from Associate
            Software Developer Analyst to Senior Software Developer Engineer. My
            main responsibilities were as a Full-Stack Developer for a
            Java-based Web application for the USPS client. One of my project
            while working for this client was developing Java API microservices
            that were hosted in an AWS + Openshift environment which was a lot
            of fun to learn about and get some experience working in a cloud
            based environment. As part of Agile/SCRUM team, I provide updates
            and impediments to my team members during our daily and weekly
            meetings.
          </p>
        </article>
      </div>
    </section>

    <hr />

    <section id="certifications-article" class="page-jumbotron dark-salmon">
      <h2 class="section-header-text">Certifications</h2>
      <div id="certifications-content">
        <p>
          <strong>AWS Cloud Practitioner</strong>: September 2019 - September
          2022
        </p>
      </div>
    </section>
    <hr />
    <section id="learn-more-article" class="page-jumbotron dark-khaki">
      <h2 class="section-header-text">Learn More</h2>
      <div id="learn-more-content">
        <p>Below are some links to my professional websites:</p>
        <ul>
          <li>
            <a
              href="http://www.linkedin.com/in/timothy-flucker/"
              target="_blank"
              >LinkedIn Profile</a
            >
            <span class="italic-text">(Feel free to connect!)</span>
          </li>
          <li>
            <a href="https://github.com/tflucker" target="_blank"
              >GitHub Profile</a
            >
          </li>
          <li>
            <a href="https://tflucker.wordpress.com/" target="_blank"
              >Personal Wordpress Website</a
            >
            <span class="italic-text">(kind of like this assignment, lol)</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
