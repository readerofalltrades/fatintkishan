import PageLayout from "../components/PageLayout";
import "./About.css";

function AboutPage() {
  return (
    <PageLayout>
      <h1>Fatin Tazwar Kishan</h1>
      <p className="page-meta">ফাতিন তাজওয়ার কিষাণ — CSE, BRAC University</p>

      <hr />

      <p>
        I'm a Computer Science and Engineering student at BRAC University,
        Dhaka. Born in Jhenaidah, raised across cities, currently based in
        Dhaka. I build things — websites, robots, tools, games, 3D models — not
        to collect skills, but because I can't stand waiting on someone else to
        build what's in my head. My alias is <code>readerofalltrades</code>. The
        reading part is not incidental.
      </p>
      <p>
        My interests span systems programming, competitive programming,
        robotics, graphics, and cinematography. I run a riced Arch-based Linux
        setup, maintain a home lab on a Raspberry Pi 5, and occasionally win pop
        quizzes at semiconductor seminars.
      </p>

      <hr />

      <h2>Education</h2>

      <h3>BRAC University</h3>
      <p className="page-meta">
        BSc in Computer Science and Engineering — May 2024 to June 2028
        (expected)
      </p>
      <p>
        Currently in my fourth semester with 63 credits completed out of 136.
        Coursework spans structured programming, object-oriented programming,
        discrete mathematics, data structures, algorithms, circuits and
        electronics, electronic devices and circuits, data communications etc.
      </p>

      <h3>Dhaka City College, Dhaka</h3>
      <p className="page-meta">
        Higher Secondary Certificate, Science — 2021 to 2023
      </p>
      <p>Graduated with GPA 5.0.</p>

      <h3>Government Laboratory High School, Dhaka</h3>
      <p className="page-meta">
        Secondary School Certificate, Science — 2019 to 2021
      </p>
      <p>Graduated with GPA 5.0.</p>

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
        Designed all banners and visual collateral for the residential semester
        cultural program using Adobe Illustrator. Also built a 3D model of the
        stage in Blender used for pre-event planning and visualization.
      </p>

      <h3>Bangladesh Biology Olympiad</h3>
      <p className="page-meta">2018 — 2020</p>
      <p>
        Competed at the regional level across three consecutive years — Second
        Runners Up in 2018, Regional Champion in 2019, First Runners Up in 2020.
      </p>

      <hr />

      <h2>Interests</h2>
      <p>
        Chess — rapid rating 651, still climbing. Photography, with a particular
        interest in warm scenes with good composition. Cinematography and video
        editing in DaVinci Resolve. Reading — broadly and compulsively, hence
        the alias. Speed typing, currently averaging 90 WPM. Linux ricing —
        running a fully custom CachyOS setup with no desktop environment, tiled
        window management, and documented dotfiles.
      </p>

      <hr />

      <h2>Goals for 2026</h2>
      <p>
        Launch the complete portfolio website. Complete the first draft of an
        individual research paper. Begin identifying a topic and supervisor for
        the final year thesis. Start reading consistently like before. Work
        toward full body flexibility and the stamina to play 90 minutes of
        football again.
      </p>

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
