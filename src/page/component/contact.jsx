import img4 from "../asset/img/img4.png";

const Contact = () => {
  return (
    <section class="contact-me" id="contact">
      <h1 class="judul">Contact Me</h1>
      <div class="container-contact">
        <div class="container-txt-contact">
          <p>
            Jl. blablabla No. 123, Lampung, Blablabla,
            <br /> Indonesia 12345
          </p>
          <p>
            halo@Blablablabla.co.id
            <br /> (023) 456 7890
          </p>
          <button class="button2">Kirim Pesan</button>
        </div>
        <img src={img4} alt="" />
      </div>
    </section>
  );
};

export default Contact;
