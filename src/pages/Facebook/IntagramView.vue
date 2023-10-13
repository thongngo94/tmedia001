
<template>
  <header class="header" data-header>
    <div class="container">

      <!--            <a href="#" class="logo">T-MEDIA GROUP</a>-->
      <img src="../../assets/images/logo.png" width="70px">

      <nav class="navbar container" data-navbar>
        <ul class="navbar-list">

          <li>
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li>
            <a href="#service" class="navbar-link" data-nav-link>Ưu Điểm</a>
          </li>

          <li>
            <a href="#project" class="navbar-link" data-nav-link>Hình thức</a>
          </li>

          <li>
            <a href="#about" class="navbar-link" data-nav-link>Tại sao</a>
          </li>

          <li>
            <a href="#service1" class="navbar-link" data-nav-link>Bảng giá</a>
          </li>
          <li>
            <a href="#service2" class="navbar-link" data-nav-link>Quy trình</a>
          </li>

          <li>
            <a href="#contact" class="navbar-link" data-nav-link>Liên hệ</a>
          </li>
          <!--          <Dropdown>-->
          <!--            <a href="javascript:void(0)">-->
          <!--              Facebook-->
          <!--              <Icon type="ios-arrow-down"></Icon>-->
          <!--            </a>-->
          <!--            <template #list>-->
          <!--              <DropdownMenu>-->
          <!--                <DropdownItem>驴打滚</DropdownItem>-->
          <!--                <DropdownItem>炸酱面</DropdownItem>-->

          <!--              </DropdownMenu>-->
          <!--            </template>-->
          <!--          </Dropdown>-->

          <li>
            <a href="/" class="btn btn-primary">Trang chủ</a>
          </li>



        </ul>
      </nav>

      <button class="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler @click="toggleNavbar">
        <ion-icon name="menu-outline" class="open"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </button>

    </div>
  </header>
  <main>
    <article>
      <section class="section hero" id="home" aria-label="hero">
        <div class="container">
          <div class="hero-content">

            <p class="hero-subtitle">T-MEDIA GROUP Marketing Agency</p>

            <h1 class="h1 hero-title">Quảng cáo Instagram</h1>

            <p class="hero-text">
              Bắt đầu cùng với đội ngũ chuyên nghiệp của chúng tôi
            </p>

            <a href="#" class="btn btn-primary">Get Started</a>

          </div>
          <figure class="hero-banner">
            <img src="../../assets/images/Frame-107-2048x1000.png" alt="hero banner" class="w-100">
          </figure>

        </div>



      </section>

      <section class="section about" id="about" aria-label="about">
        <div class="container">

          <div class="about-banner img-holder" style="--width: 930; --height: 960;">
            <img src="../../assets/images/quang-cao-facebook1.png" width="1000" height="1000" loading="lazy" alt="about banner"
                 class="img-cover">

            <button class="play-btn" aria-label="Play video">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div class="about-content">

            <h2 class="h2 section-title">Tại Sao Nên Quảng Cáo Instagram ? </h2>

            <!--          <p class="section-text">-->
            <!--            Tại T-MEDIA GROUP, chúng tôi tận dụng sự mạnh mẽ của tiếp thị để biến ý tưởng thành hiện thực. Chúng tôi là một đội ngũ chuyên nghiệp và sáng tạo, cam kết mang lại giá trị tối ưu cho khách hàng của mình thông qua chiến dịch tiếp thị độc đáo và hiệu quả.-->
            <!--          </p>-->

            <!--          <h3 class="h3">Tại Sao Chọn Chúng Tôi?</h3>-->

            <!--          <p class="section-text">-->
            <!--            Chúng tôi hiểu rằng môi trường kinh doanh ngày càng phức tạp và đầy cạnh tranh. Vì vậy, chúng tôi không chỉ tập trung vào việc thực hiện chiến dịch tiếp thị, mà còn vào việc hiểu sâu về mục tiêu của bạn và đối tượng tiêu dùng. Sự kết hợp giữa nghiên cứu thị trường chi tiết và sáng tạo không giới hạn giúp chúng tôi tạo ra các chiến dịch tiếp thị tùy chỉnh, độc đáo và hiệu quả.-->
            <!--          </p>-->

            <!--          <h3 class="h3">Cơ Sở Hạ Tầng Và Công Nghệ Hiện Đại</h3>-->

            <!--          <p class="section-text">-->
            <!--            Chúng tôi đầu tư mạnh mẽ vào cơ sở hạ tầng và công nghệ tiên tiến để đảm bảo rằng mọi chiến dịch của bạn được triển khai một cách suôn sẻ và theo dõi một cách tỉ mỉ. Sự kết hợp giữa trí tuệ nhân tạo, phân tích dữ liệu và công cụ tiếp thị hàng đầu giúp chúng tôi cung cấp thông tin cần thiết và hiểu biết chi tiết để bạn có thể ra quyết định đúng đắn.-->
            <!--          </p>-->

            <!--          <h3 class="h3">Thành công của chúng tôi</h3>-->

            <ul class="about-list">

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Quảng cáo Instagram cạnh tranh chưa cao, chưa nhiều người biết khai thác. Bởi vậy sản phẩm của bạn được quảng cáo trên nền tảng này sẽ càng tiếp cận với khách hàng hơn, vì thế độ nhận diện thương hiệu của bạn trên nền tảng này cũng theo đó nhanh hơn.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Chi phí quảng cáo trên Instagram rẻ hơn so với Facebook. Độ bao phủ của Facebook là vô cùng lớn bởi vậy sự cạnh tranh là vô cùng khắc nghiệt, nên chi phí cao hơn là điều không tránh khỏi. Nhưng cũng vì nhiều cạnh tranh nên tỉ lệ mà tiếp cận khách hàng cũng giảm đi.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Có nhiều người chỉ sử dụng Instagram mà không sử dụng Facebook. Những người dùng Instagram thường thích xem ảnh nên sản phẩm có hình ảnh đẹp là một lợi thế rất lớn. Bởi vậy bạn hãy nghiên cứu đối tượng và sản phẩm phù hợp để quảng cáo trên các nền tảng phù hợp.
                </p>
              </li>

            </ul>

            <!--          <h3 class="h3">Nhiệm vụ của chúng tôi</h3>-->

            <!--          <p class="section-text">-->
            <!--            Chúng tôi cam kết mang lại giá trị tối ưu cho mỗi khách hàng, không chỉ bằng cách đưa ra các chiến dịch tiếp thị hiệu quả, mà còn bằng cách thấu hiểu sâu sắc về nhu cầu và mục tiêu của họ. Chúng tôi tin rằng sự sáng tạo có thể thay đổi mọi thứ, và sự tiếp thị tinh tế là chìa khóa để nắm bắt cơ hội.-->
            <!--          </p>-->

          </div>

        </div>
      </section>
      <section class="section service" id="service" aria-label="service">
        <div class="container">

          <h2 class="h3 section-title">
            CÁC LOẠI HÌNH QUẢNG CÁO INSTAGRAM Tại T-Media</h2>

          <p class="section-text">
            Trong một thế giới ngày càng phát triển và cạnh tranh, Marketing trở thành một yếu tố quan trọng không thể thiếu cho mọi doanh nghiệp và tổ chức. Đó không chỉ là việc quảng cáo sản phẩm hoặc dịch vụ của bạn, mà còn là cách bạn xây dựng và duy trì mối quan hệ với khách hàng.
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #13c4a1">
                  <ion-icon name="chatbox"></ion-icon>
                </div>

                <h3 class="h3">
                  <Link to="/facebook" class="card-title">Quảng Cáo Hình Ảnh (Photo Ads )</Link>
                </h3>

                <p class="card-text">
                  Đây là dạng quảng cáo cho phép bạn quảng bá sản phẩm của mình thông qua hình ảnh. Hình thức này được hiểu là bán ẽ chọn một hình ảnh đẹp nhất liên quan đến sản phẩm, dịch vụ mà bạn kinh doanh để quảng cáo.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #6610f2">
                  <ion-icon name="desktop"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Quảng Cáo Video (Video Ads ) </a>
                </h3>

                <p class="card-text">
                  Hình thức này cho phép bạn có thể quảng cáo với video lên đến 60s một cách dễ dàng, giúp khách hàng có thể tiếp cận sản phẩm của bạn một cách trực quan hơn.

                  Khi quảng cáo Instagram bằng hình thức này bạn nên chọn hình thức tăng lượt xem video để quảng cáo được tiếp cận hiệu quả hơn.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #ffb700">
                  <ion-icon name="bulb"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Quảng Cáo Carousel (Quảng Cáo băng chuyền – Carousel Ads )</a>
                </h3>

                <p class="card-text">
                  Loại quảng cáo này có thể dùng hình ảnh hoặc video để giới thiệu doanh nghiệp của bạn. Như tên gọi, tính năng Carousel của Instagram cho phép người dùng có thể lướt tối đa 10 hình và video, mỗi hình ảnh đều có nút kết nối ” Call to action” với trang web của người bán.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #fc3549">
                  <ion-icon name="phone-portrait"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Quảng Cáo Story ( Toàn Màn Hình – Story Ads )</a>
                </h3>

                <p class="card-text">
                  Lướt Instagram Story hẳn là thói quen và sở thích của người chơi Ins. Đây là đoạn trích về cuộc sống hằng ngày được chia sẻ trong ảnh, video biến mất sau 24h. Tận dụng điều này, quảng cáo Story Ads được nhiều người sử dụng để hiện thị quảng cáo cho người tiêu dùng.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #00d280">
                  <ion-icon name="archive"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Quảng Cáo Collection (Collection Ads )</a>
                </h3>

                <p class="card-text">
                  Instagram đã giới thiệu tính năng này vào đầu năm 2018. Người dùng có thể xem quảng cáo và nhấn vào đó. Khi ấy họ đã đưa tuỳ chọn mua sản phẩm cụ thể, trực tiếp tuỳ chỉnh quảng cáo. Bộ sưu tập quảng cáo có thể sử dụng hình ảnh video
                </p>

              </div>
            </li>

            <!--          <li>-->
            <!--            <div class="service-card">-->

            <!--              <div class="card-icon" style="background-color: #ff612f">-->
            <!--                <ion-icon name="build"></ion-icon>-->
            <!--              </div>-->

            <!--              <h3 class="h3">-->
            <!--                <a href="#" class="card-title">Marketing & Reporting</a>-->
            <!--              </h3>-->

            <!--              <p class="card-text">-->
            <!--                Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem-->
            <!--                aperiam, eaque-->
            <!--                ipsa quae.-->
            <!--              </p>-->

            <!--            </div>-->
            <!--          </li>-->

          </ul>

        </div>
      </section>
      <section class="section project" id="project" aria-label="project">
        <div class="container">

          <h2 class="h2 section-title">Cách Chạy Quảng Cáo Instagram Để Tăng Đơn Hàng Hiệu Quả  Tại T-Media</h2>

          <!--          <p class="section-text">-->
          <!--            Dưới đây, T-Media xin chia sẻ 7 hình thức quảng cáo phổ biến trên Facebook. Tùy mỗi yêu cầu của khách hàng để nhà chạy quảng cáo lựa chọn hình thức phù hợp.-->
          <!--          </p>-->

          <ul class="grid-list">

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                  <img src="../../assets/images/project-1.jpg" width="510" height="700" loading="lazy"
                       alt="Designing a better cinema experience" class="img-cover">
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">Tạo mẫu quảng cáo ấn tượng, thu hút</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Điều này có lẽ là một trong những yếu tố bắt buộc trong bất kỳ quảng cáo nào. Tuy nhiên bạn hãy tăng độ ưu tiên về vấn đề này khi tạo quảng cáo trên Instagram. Bời quảng cáo Instagram khách hàng tập trung vào hình ảnh là chủ yếu.</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                  <img src="../../assets/images/project-2.jpg" width="510" height="700" loading="lazy"
                       alt="Building design process within teams" class="img-cover">
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">Tạo quảng cáo trông thật tự nhiên </p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Hãy trãi nghiệm là người dùng Instagram, khi bạn lướt hình ảnh trên ứng dụng và nhìn thấy một post trông giống quảng cáo, có lẽ bạn sẽ lướt qua ngay</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                  <img src="../../assets/images/project-3.jpg" width="510" height="700" loading="lazy"
                       alt="How intercom brings play into their design process" class="img-cover">
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">Xác định đúng đối tượng khách hàng mà bạn muốn hướng tới</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Instagram có sự liên kết với Facebook bởi vậy bạn sẽ dễ dàng có được thông tin của khách hàng và từ đó xác định tệp khách hàng phù hợp với sản phẩm và thông điệp bạn muốn truyền tải.</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>








          </ul>

        </div>
      </section>
    <!--  <section class="section service" id="service1" aria-label="service">
        <div class="container">

          <h2 class="h3 section-title">
            Bảng Báo Giá Dịch Vụ Quảng Cáo Instagram</h2>

          <p class="section-text">
            Dưới đây là bảng báo giá dịch vụ Quảng Cáo Instagram . Quý khách hàng có nhu cầu tìm hiểu hoặc tư vấn về dịch vụ, vui lòng liên hệ hotline 0964.898.041 để nhận hỗ trợ của chuyên viên marketing. Trân trọng
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <p class="card-text">Gói 01</p>



                <h3 class="h3">
                  <Link to="/facebook" class="card-title">2.000.000đ/tháng</Link>
                </h3>
                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      10 bài chuẩn SEO Facebook
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Seeding react
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Lên 1 chiến dịch mỗi tháng
                    </p>
                  </li>


                </ul>

              </div>
            </li>

            <li>
              <div class="service-card">

                <p class="card-text">Gói 02</p>

                <h3 class="h3">
                  <a href="#" class="card-title">3.000.000đ/tháng</a>
                </h3>

                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      15 bài chuẩn SEO Facebook
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Seeding react & comment
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Lên 1 chiến dịch mỗi tháng
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Hỗ trợ thiết kế 2-3 poster mỗi tháng
                    </p>
                  </li>


                </ul>

              </div>
            </li>

            <li>
              <div class="service-card">


                <p class="card-text">Gói 03</p>
                <h3 class="h3">
                  <a href="#" class="card-title">4.000.000đ/tháng</a>
                </h3>

                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      20 bài chuẩn SEO Facebook
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Seeding react & comment
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Lên 2 chiến dịch mỗi tháng
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Hỗ trợ thiết kế 3-4 poster mỗi tháng
                    </p>
                  </li>


                </ul>

              </div>
            </li>





          </ul>



        </div>
      </section> -->
     <!-- <section class="section service" id="service2" aria-label="hero">
        <div class="container">
          <h2 class="h3 section-title">
            Quy Trình Quảng Cáo Instagram Tại T-Media Marketing</h2>
          <p class="section-text">
            Khách Hàng Chưa Có Fanpage
          </p>

          <figure class="hero-banner">
            <img src="../../assets/images/quytrinhtrunghuy-scaled.jpg" alt="hero banner" class="w-100">
          </figure>

        </div>

        <br>

        <div class="container">
          <p class="section-text">
            Khách Hàng Đã Có Fanpage

          </p>
          <figure class="hero-banner">
            <img src="../../assets/images/Frame-98-e1675070417794.png" alt="hero banner" class="w-100">
          </figure>
        </div>







      </section> -->
      <section class="section contact" id="contact" aria-label="contact">
        <div class="container">

          <h2 class="h2 section-title">Hãy liên hệ với chúng tôi</h2>

          <p class="section-text">
            Khi Bạn Cần, Chúng Tôi Sẽ Ở Đây - Hãy Liên Hệ Với Chúng Tôi.
          </p>

          <form action="" class="contact-form">

            <div class="input-wrapper">
              <input type="text" name="name" aria-label="name" placeholder="Your name*" required class="input-field">

              <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required
                     class="input-field">
            </div>

            <div class="input-wrapper">
              <input type="text" name="subject" aria-label="subject" placeholder="Subject" class="input-field">

              <input type="number" name="phone" aria-label="phone" placeholder="Phone number" class="input-field">
            </div>

            <textarea name="message" aria-label="message" placeholder="Your message...*" required
                      class="input-field"></textarea>

            <div class="checkbox-wrapper">
              <input type="checkbox" name="terms_and_policy" id="terms" required class="checkbox">

              <label for="terms" class="label">
                Accept <a href="#" class="label-link">Terms of Services</a> and <a href="#" class="label-link">Privacy
                Policy</a>
              </label>
            </div>

            <button type="submit" class="btn btn-primary">Send Message</button>

          </form>

          <ul class="contact-list">

            <li class="contact-item">
              <div class="contact-card">

                <div class="card-icon">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                </div>

                <div class="card-content">

                  <h3 class="h3 card-title">Mail Here</h3>


                  <a href="mailto:hr.mediagroup2023@gmail.com" class="card-link">hr.mediagroup2023@gmail.com</a>

                </div>

              </div>
            </li>

            <li class="contact-item">
              <div class="contact-card">

                <div class="card-icon">
                  <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
                </div>

                <div class="card-content">

                  <h3 class="h3 card-title">Địa chỉ</h3>

                  <address class="card-address">
                    08 Thanh Lương 3, Hoà xuân<br>
                    Cẩm lệ , Đà Nẵng, Việt Nam
                  </address>

                </div>

              </div>
            </li>

            <li class="contact-item">
              <div class="contact-card">

                <div class="card-icon">
                  <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
                </div>

                <div class="card-content">

                  <h3 class="h3 card-title">Call Here</h3>


                  <a href="tel:+0964.898.041" class="card-link">+0964.898.041</a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>


</template>
<script setup>

import {defineComponent} from "vue";
import {Link} from "view-ui-plus";
import Header from "../../components/Header.vue";

const toggleNavbar = () => {
  const navbar = document.querySelector("[data-navbar]");
  navbar.classList.toggle("active");
};

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
    toggleNavbar(); // Close the navbar after clicking a link
  }
};
</script>
