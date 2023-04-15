import Img3 from "../asset/img/Img3.png";
import Nextjs from "../asset/img/tech/next js.svg";
import React from "../asset/img/tech/React js.svg";
import MySQL from "../asset/img/tech/Mysql.svg";
import Javascript from "../asset/img/tech/Javascript.svg";
import Tailwind from "../asset/img/tech/Tailwind.svg";

import skill1 from "../asset/img/Skill/Icon-1.svg";
import skill2 from "../asset/img/Skill/icon-2.svg";
import skill3 from "../asset/img/Skill/icon-3.svg";

const About = () => {
  return (
    <div>
      <section class="about" id="about">
        <div class="container-about">
          <h1>Tentang saya</h1>
          <p>
            Saya Menekuni Pemprograman selama 3 tahun dan berpengalaman dalam
            bidang desain atau content
            <br />
            creator.
            <br />
            <br />
            Beberapa teknologi pemprograman yang sering saya
            <br />
            gunakan diantaranya
          </p>
          <div class="container-tech">
            <a href="https://id.wikipedia.org/wiki/JavaScript" target="_blank">
              <img src={Javascript} alt="Javascript" />
            </a>
            <a
              href="https://id.wikipedia.org/wiki/Tailwind_CSS"
              target="_blank"
            >
              <img src={Tailwind} alt="Tailwind" />
            </a>
            <a href="https://id.wikipedia.org/wiki/React.js" target="_blank">
              <img src={React} alt="React" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Next.js" target="_blank">
              <img src={Nextjs} alt="Next" />
            </a>
            <a href="https://id.wikipedia.org/wiki/MySQL" target="_blank">
              <img src={MySQL} alt="Mysql" />
            </a>
          </div>
        </div>
        <div class="container-img3">
          <img src={Img3} alt="Arona waduh" class="img3" />
          <h1 class="judul img3-ester">Kontol</h1>
          <p>gk Tau kenapa ada foto ini</p>
        </div>
      </section>
      <section class="skill">
        <div class="container-skill">
          <div class="container-skill-card">
            <div class="container-img-skill">
              <img src={skill1} alt="Skill 1" />
            </div>
            <h5>Keinginan Belajar Hal Baru</h5>
            <p>Memiliki Keinginan dalam belajar hal baru</p>
          </div>
          <div class="container-skill-card">
            <div class="container-img-skill">
              <img src={skill2} alt="Skill 2" />
            </div>
            <h5>Mampu Bekerja Dalam Tim</h5>
            <p>Memiliki Pengalaman Dalam Kerja Secara Tim</p>
          </div>
          <div class="container-skill-card">
            <div class="container-img-skill">
              <img src={skill3} alt="Skill 3" />
            </div>
            <h5>Terbiasa Dengan Teknologi Baru</h5>
            <p>Mudah Beradaptasi Dengan Teknologi Baru</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
