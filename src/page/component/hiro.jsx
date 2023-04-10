import img1 from "../asset/img/img1.png";
import img2 from "../asset/img/img2.png";

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
          Saya adalah Seorang <span class="animate">Front-end</span> <br />
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
