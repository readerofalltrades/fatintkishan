import PageLayout from "../components/PageLayout";
import "./About.css";

function AboutPage() {
  return (
    <PageLayout>
      <h1>Fatin Tazwar Kishan</h1>
      <p className="page-meta">ফাতিন তাজওয়ার কিষাণ — CSE, BRAC University</p>

      <hr />

      <p>
        I was born in Jhenaidah and grew up across different cities before
        eventually settling in Dhaka. Moving between environments and spending a
        lot of time with books shaped how I think, making me naturally curious,
        analytical, and quick to adapt to unfamiliar situations.
      </p>
      <p>
        I study Computer Science and Engineering at BRAC University, but most of
        my learning happens through building. I usually start from problems I
        want to solve and then figure out whatever tools are needed along the
        way. This turns into websites, Linux scripts, small tools, robots, game
        prototypes, or design work for events.
      </p>
      <p>
        Lately I have been focused on systems, Linux customization, automation,
        networking, and low-level computing while also working on creative
        projects like 3D modeling, graphics, and photography. I do not separate
        technical and creative work, since both come from the same habit of
        building things to understand them better.
      </p>

      <hr />

      <h2>Education</h2>

      <h3>BRAC University</h3>
      <p className="page-meta">
        BSc in Computer Science and Engineering — May 2024 to Present
      </p>
      <p>
        Currently in my 7th semester, focusing on Operating Systems, and
        Artificial Intelligence while continuing to strengthen my foundations in
        core computer science.
      </p>
      <p>Relevant coursework completed so far:</p>
      <ul>
        <li>Discrete Mathematics</li>
        <li>Differential and Integral Calculus</li>
        <li>Statistics and Probability</li>
        <li>Data Structures and Algorithms</li>
        <li>Linear Algebra and Fourier Transformation</li>
        <li>Complex Variables and Laplace Transformation</li>
      </ul>

      <h3>Dhaka City College, Dhaka</h3>
      <p className="page-meta">
        Higher Secondary Certificate, Science — 2021 to 2023
      </p>
      <p>Graduated from Dhaka City College, Dhaka in 2021 with a GPA of 5.0.</p>

      <h3>Government Laboratory High School, Dhaka</h3>
      <p className="page-meta">
        Secondary School Certificate, Science — 2013 to 2021
      </p>
      <p>
        Graduated from Government Laboratory High School, Dhaka in 2021 with a
        GPA of 5.0.
      </p>

      <hr />

      <h2>Experience</h2>

      <h3>BRACU IEEE Student Body</h3>
      <p className="page-meta">August 2025 — Present</p>
      <p>
        Member of the IEEE student chapter at BRAC University. Active in the
        Computer Society and Robotics and Automation Society branches.
      </p>

      <h3>RS Cultural Program — BRAC University Residential Semester</h3>
      <p className="page-meta">April 2025</p>
      <p>
        Designed banners and visual materials for the BRACU Residential Semester
        also known as TARC's cultural program using Adobe Illustrator.
        Additionally, created a 3D stage model in Blender to support pre-event
        planning and visualization.
      </p>

      <h3>Bangladesh Biology Olympiad</h3>
      <p className="page-meta">2018 — 2020</p>
      <p>
        Competed at the regional level for three consecutive years, placing
        Second Runners Up (Junior Division) in 2018, Champion (Junior Division)
        in 2019, and First Runners Up (Secondary Division) in 2020.
      </p>

      <hr />

      <h2>Interests</h2>
      <p>
        My interests usually split between building and observing. I like
        working with systems, Linux setups, and small tools that help me
        understand how things work under the hood. I also spend time on creative
        work like 3D modeling, graphics, and photography, which gives a
        different kind of problem solving.
      </p>
      <p>
        Outside of that, I read, play sports like football and badminton, and
        stay curious about anything that does not fit neatly into a category.
      </p>

      <hr />

      <h2>Goals for 2026</h2>
      <p>
        In 2026, I want to focus on consistency more than intensity. That means
        building regularly, thinking clearly, and improving across both
        technical and personal areas.
      </p>
      <ul>
        <li>Launch the complete portfolio website</li>
        <li>Complete the first draft of an individual research paper</li>
        <li>
          Begin identifying a topic and supervisor for the final year thesis
        </li>
        <li>Start reading consistently like before</li>
        <li>Work toward full body flexibility and the stamina</li>
      </ul>

      {/* Figure placeholders — uncomment when images are ready
      <Figure src="/setup.jpg" alt="My desk setup" caption="Fig. 1 — CachyOS, tiled." />
      <Figure src="/bracu.jpg" alt="BRAC University" caption="Fig. 2 — BRAC University, Dhaka." />
      <Figure src="/rs-banner.jpg" alt="RS Cultural Program banner" caption="Fig. 3 — RS Cultural Program, April 2025." />
      <Figure src="/interests.jpg" alt="Chess and photography" caption="Fig. 4 — Some of what keeps me sane." />
      */}
    </PageLayout>
  );
}

export default AboutPage;
