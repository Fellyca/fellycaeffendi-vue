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
    <h1 style="padding-top:50px; text-align:center">Kegiatan Selama Berkuliah</h1>
    <div class="card" style="width: 30rem; margin:20px; float:left">
      <img src="knmipa.jpg" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Peserta KNMIPA Nasional</h5>
      <div class="card-text">Menjadi salah satu peserta KNMIPA tingkat nasional bidang kimia tahun 2021</div>
      </div>
    </div>
 <div class="card" style="width: 30rem; margin:20px; float:left">
      <img src="python fundamental.jpg" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Peserta Bootcamp DQLab</h5>
      <p class="card-text">Mengikuti bootcamp yang mempelajari tentang python fundamental</p>
    </div>
</div>
<div class="card" style="width: 30rem; margin:20px; float : left">
      <img src="R fundamental.jpg" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Peserta Bootcamp DQLab 2</h5>
      <p class="card-text">Mengikuti bootcamp yang mempelajari tentang R fundamental for data science</p>
    </div>
</div>
<div class="card" style="width: 30rem; margin:20px; float : left">
      <img src="digital marketing.jpg" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Peserta Mini Course RevoU</h5>
      <p class="card-text">Mengikuti mini course mengenai digital marketing selama 1 minggu</p>
    </div>
</div>
<div class="card" style="width: 30rem; margin:20px; float : left">
      <img src="mandarin.png" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Peserta Kelas Mandarin</h5>
      <p class="card-text">Mengikuti kelas belajar bahasa mandarin dasar secara online selama 3 bulan</p>
    </div>
</div>
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
