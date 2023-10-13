
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

            <h1 class="h1 hero-title">Dịch Vụ Quảng Cáo TikTok</h1>

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
            <img src="../../assets/images/toptopads.png" width="1000" height="1000" loading="lazy" alt="about banner"
                 class="img-cover">

            <button class="play-btn" aria-label="Play video">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div class="about-content">

            <h2 class="h2 section-title">Lí Do Nên Sử Dụng Dịch Vụ Quảng Cáo TikTok ? </h2>

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
                  Bạn chưa biết chạy: Khi chưa biết chạy, cũng không có nhiều thời gian để tìm hiểu về quảng cáo TikTok, bạn có thể lựa chọn phương án thuê Agency quảng cáo TikTok.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Chạy không hiệu quả: Vì không có nhiều kinh nghiệm, cũng như việc có quá ít tài liệu để tham khảo. Điều này dẫn đến việc tự chạy sẽ không hiệu quả bằng thuê công ty quảng cáo TikTok có kinh nghiệm.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Quảng cáo cắn tiền chậm: Nguyên nhân đến từ việc: Chạy quảng cáo Tiktok trên tài khoản cá nhân, nội dung quảng cáo chưa thu hút, target không chuẩn, người dùng ít quan tâm đến quảng cáo. Trong khi đó phí quảng cáo lại được tính theo tương tác và chuyển đổi, thành ra phần lớn quảng cáo tự chạy đều cắn tiền rất chậm.
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
            Ưu Điểm Của Dịch Vụ Quảng Cáo TikTok Tại T-Media</h2>

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
                  <Link to="#" class="card-title">Nắm Bắt Xu Thế Đánh Bật Doanh Thu</Link>
                </h3>

                <p class="card-text">
                  Tiktok có thể nói là xu hướng mạnh mẽ nhất hiện nay, nếu cách đây 5 năm thì Facebook là bá chủ, thì tính tới hiện tại Tiktok đang dần dần chiếm lĩnh thị trường. Với sự kết hợp giữa giải trí và sàn thương mại, Tiktok chắc chắn sẽ giúp doanh nghiệp gia tăng doanh thu chóng mặt.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #6610f2">
                  <ion-icon name="desktop"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Tiếp Cận Khách Hàng Tiềm Năng Nhanh Chóng</a>
                </h3>

                <p class="card-text">
                  Với lợi thế là nền tảng đang phát triển nhanh nhất hiện nay, thì không khó để nền tảng này giúp doanh nghiệp có lượt tiếp cận khách hàng nhanh và nhiều với giá thành rẻ.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #ffb700">
                  <ion-icon name="bulb"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Tạo Độ Uy Tín Cao Cho Doanh Nghiệp</a>
                </h3>

                <p class="card-text">
                  Lượt tiếp cận cao, video với nội dung mang lại giá trị, chuyên nghiệp. Xây dựng được chuỗi video ý nghĩa, giới thiệu khéo léo sản phẩm của mình vào trong video. Sẽ giúp tăng độ uy tín cho doanh nghiệp của bạn một cách tự nhiên.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #fc3549">
                  <ion-icon name="phone-portrait"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Tăng Lượng Tiếp Cận Tự Nhiên</a>
                </h3>

                <p class="card-text">
                  Là nền tảng phát triển mạnh mẽ hiện nay, giúp cho doanh nghiệp có thêm những lượt tiếp cận tự nhiên dễ dàng và nhanh chóng
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

          <h2 class="h2 section-title">Chia Sẻ Bí Quyết Mua Follow TikTok Tại T-Media</h2>

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

                  <p class="card-subtitle">Tài Khoản Nên Có Video</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Nếu tài khoản của bạn chưa có nhiều video, mà lượng follow tài khoản tăng nhanh có thể khiến Tiktok đặt nghi vấn. Sau đó kích hoạt điều khoản khóa tài khoản của bạn do nghi vấn spam. Vì vậy, để hạn chế rủi ro khi mua follow, các bạn cần có vài video trên tài khoản của mình trước khi đăng kí dịch vụ tăng follow.</a>
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

                  <p class="card-subtitle">Không Mua Follow Nước Ngoài </p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Khi bạn đăng kí tài khoản tại Việt Nam thì hãy hạn chế mua follow từ tài khoản nước ngoài. Vì những follower nước ngoài thường sẽ không quan tâm đến kênh tiktok của bạn. khi đó dù với mục đích giải trí, kinh doanh bán hàng hay làm thương hiệu thì việc sử dụng dịch vụ tăng follow Tiktok cũng không phát huy hiệu quả</a>
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

                  <p class="card-subtitle">Kết Hợp Marketing Chính Thống</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Bạn nên kết hợp đầu tư nội dung, quảng cáo, hay thuê freelancer để phát triển kênh TikTok bền vững. Kênh cũng cần duy trì hoạt động cả về đăng video cùng tương tác người xem, nếu không hoạt động khả năng kênh sẽ bị bóp reach, bóp tương tác là khá cao. Vậy nên, chúng ta cần chú tâm Marketing phát triển kênh với sự duy trì đều đặn hoàn chỉnh cho quý khách hàng.</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>








          </ul>

        </div>
      </section>
      <section class="section service" id="service1" aria-label="service">
        <div class="container">

          <h2 class="h3 section-title">
            Bảng Báo Giá Dịch Vụ Quảng Cáo TikTok</h2>

          <p class="section-text">
            Dưới đây là bảng báo giá dịch vụ Quảng Cáo TikTok  của T-Media. Quý khách hàng có nhu cầu tìm hiểu hoặc tư vấn về dịch vụ, vui lòng liên hệ hotline 0964.898.041 để nhận hỗ trợ của chuyên viên marketing. Trân trọng
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <p class="card-text">GÓI STARUP</p>



                <h3 class="h3">
                  <Link to="#" class="card-title">10.000.000đ</Link>
                </h3>
                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Gía Click : Liên hệ
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Số Click: Liên hệ
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Loại hình Ads: In Feed Ads
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Thời gian hoàn thành: 7-15 ngày
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Khu vực, đối tượng: Tuỳ chọn
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Hỗ trợ chuyên sâu: Agency TikTok
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Cam kết: 100% Click thật
                    </p>
                  </li>


                </ul>

              </div>
            </li>

            <li>
              <div class="service-card">

                <p class="card-text">GÓI - SME</p>

                <h3 class="h3">
                  <a href="#" class="card-title">20.000.000đ</a>
                </h3>

                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Gía Click : Liên hệ
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Số Click: Liên hệ
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Loại hình Ads: In Feed Ads
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Thời gian hoàn thành: 7-15 ngày
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Khu vực, đối tượng: Tuỳ chọn
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Hỗ trợ chuyên sâu: Agency TikTok
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Cam kết: 100% Click thật
                    </p>
                  </li>




                </ul>

              </div>
            </li>

            <li>
              <div class="service-card">


                <p class="card-text">GÓI - PREMIUM</p>
                <h3 class="h3">
                  <a href="#" class="card-title">30.000.000đ</a>
                </h3>

                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Gía Click : Liên hệ
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Số Click: Liên hệ
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Loại hình Ads: In Feed Ads
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Thời gian hoàn thành: 7-15 ngày
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Khu vực, đối tượng: Tuỳ chọn
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Hỗ trợ chuyên sâu: Agency TikTok
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Cam kết: 100% Click thật
                    </p>
                  </li>


                </ul>

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
      <section class="section service" id="service2" aria-label="hero">
        <div class="container">
          <h2 class="h3 section-title">
            Quy Trình Dịch Vụ Quảng Cáo TikTok TẠI T-Media Marketing</h2>
          <!--          <p class="section-text">-->
          <!--            Khách Hàng Chưa Có Fanpage-->
          <!--          </p>-->

          <figure class="hero-banner">
            <img src="../../assets/images/tang_follow_tiktok-2048x980.png" alt="hero banner" class="w-100">
          </figure>

        </div>












      </section>
      <section class="section about" id="about" aria-label="about">
        <div class="container">

          <div class="about-banner img-holder" style="--width: 930; --height: 960;">
            <img src="../../assets/images/IMG_1210-1200x800.jpg" width="1000" height="1000" loading="lazy" alt="about banner"
                 class="img-cover">

            <button class="play-btn" aria-label="Play video">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div class="about-content">

            <h2 class="h2 section-title">QUÀ TẶNG KHÁCH HÀNG KHI ĐĂNG KÝ TĂNG FOLLOW TẠI T-Media MARKETING </h2>

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
                  Chia Sẻ Bí Quyết Phát Triển Kênh: Khi bàn giao kênh TikTok, chúng tôi sẽ tổng hợp và chia sẻ lại tất cả những bí quyết để xây dựng và phát triển kênh TikTok toàn diện
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Hướng Dẫn Quay Video TikTok: Nhiều khách hàng sẽ gặp hạn chế về việc lên ý tưởng và cách quay video TikTok chuyên nghiệp. Chúng tôi cũng hỗ trợ khách hàng khoản này.
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
