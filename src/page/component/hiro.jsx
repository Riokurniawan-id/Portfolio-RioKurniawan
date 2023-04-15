import img1 from "../asset/img/img1.png";
import img2 from "../asset/img/img2.png";

// var typed = new typed(".element", {
//   strings: ["Front-End", "Programer", "Web Designer", "UI/UX"],
//   typeSpeed: 60,
//   backSpeed: 60,
//   loop: true,
// });

const Hiro = () => {
  return (
    <section class="Hiro">
      <h1 class="judul Rio">
        Rio <br />
        Kurniawan
      </h1>
      <img src={img1} alt="" class="img1" />
      <div class="container-hiro1">
        <p>
          Saya adalah Seorang
          <span> Front-end</span>
          <span> Programer</span>
          <span> Web Designer</span>
          <span> UI/UX</span>
          <br />
          dan Mahasiswa Teknik informatika
        </p>
        <img src={img2} alt="" class="img2" />
      </div>
      <button class="button1" id="button1">
        Kirim Pesan
      </button>
    </section>
  );
};

export default Hiro;
