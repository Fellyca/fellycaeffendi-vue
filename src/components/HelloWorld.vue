<template>
  <div class="hello">
    
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="Slide1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="Slide2.png" class="d-block w-100" alt="...">      
        </div>
        <div class="carousel-item">
          <video class="d-block w-100" playsinline autoplay muted loop>
            <source src="Slide3.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <h1 style="padding-top:50px; text-align:center;">Kegiatan Selama Berkuliah</h1>
    <ul class="list-group list-group-flush" style="float:right; width : 45%">
  <br>
  <li class="list-group-item">
    <img src="digital marketing.jpg" width="50%" alt="..." style="float : right">
    <h4>Mini Course RevoU</h4>
    <br>
    Mengikuti mini course mengenai digital marketing selama 1 minggu
  </li>
  <br>
  <li class="list-group-item">
    <img src="mandarin.png" width="50%" alt="..." style="float : right">
    <h4>Kelas Mandarin</h4>
    <br>
    Mengikuti kelas belajar bahasa mandarin dasar secara online selama 3 bulan
  </li>
</ul>
    <ul class="list-group list-group-flush" style="float:left; width : 45%; margin-right:10%">
    <br>
    <li class="list-group-item">
    <img src="knmipa.jpg" width="50%" alt="..." style="float : right">
    <h4>KNMIPA Nasional</h4>
    <br>
    Pernah menjadi salah satu peserta KNMIPA tingkat nasional bidang kimia tahun 2021
    
  </li>
  <br>
  <li class="list-group-item">
    <img src="python fundamental.jpg" width="50%" alt="..." style="float : right">
    <h4>Bootcamp DQLab</h4>
    <br>
    Mengikuti bootcamp yang mempelajari tentang python fundamental for data science
  </li>
  <br>
  <li class="list-group-item">
    <img src="R fundamental.jpg" width="50%" alt="..." style="float : right">
    <h4>Bootcamp DQLab 2</h4>
    <br>
    Mengikuti bootcamp yang mempelajari tentang R fundamental for data science
    
  </li>
  </ul>
hr

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
