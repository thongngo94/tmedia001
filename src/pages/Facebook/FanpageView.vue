
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

            <h1 class="h1 hero-title">Quản trị fanpage Facebook</h1>

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

            <h2 class="h2 section-title">Tại Sao Nên Chăm Sóc và phát triển Fanpage Facebook ? </h2>

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
                  Với sự phát triển vượt trội mà Facebook mang lại, hoạt động mua sắm offline dần được thay thế bởi mua sắm online. Thay vì phải đến trực tiếp cửa hàng thì khách hàng có thể dễ dàng tìm hiểu thông tin và đặt mua sản phẩm qua tư vấn trên fanpage.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Khi quản trị fanpage hiệu quả, hoạt động kinh doanh của doanh nghiệp sẽ được cải thiện từng ngày. Việc này tạo ra sự tiện lợi để khách hàng mua hàng và gia tăng doanh thu.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Đồng thời, tăng nhận diện thương hiệu thông qua các bài viết xuất hiện trên bảng tin người dùng.
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
            Ưu Điểm Dịch Vụ Quản trị Fanpage Facebook Tại T-Media</h2>

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
                  <Link to="/facebook" class="card-title">Gia Tăng Mức Độ Nhận Diện Thương Hiệu</Link>
                </h3>

                <p class="card-text">
                  Nhận diện thương hiệu ( Brand Awareness ) là tài sản vô cùng quý giá của doanh nghiệp, một Fanpage chất lượng sẽ gia tăng khả năng tiếp cận thương hiệu của bạn đến với khách hàng. Từ đó giúp gia tăng mức độ nhận diện thương hiệu của doanh nghiệp bạn
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #6610f2">
                  <ion-icon name="desktop"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Cập Nhật Những Thông Tin Có Ích Cho Khách Hàng </a>
                </h3>

                <p class="card-text">
                  Bên cạnh việc chia sẻ thông tin về sản phẩm, Fanpage còn là nơi chia sẻ những thông tin, kiến thức có ích đến khách hàng. Nâng cao giá trị và độ uy tín cho Fanpage, đừng quá chăm chú vào việc giới thiệu sản phẩm mà quên mất tạo ra giá trị cho người đọc, người xem.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #ffb700">
                  <ion-icon name="bulb"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Tạo Độ Uy Tín Cao Cho Fanpage</a>
                </h3>

                <p class="card-text">
                  Thông tin giá trị, hình ảnh, video bắt mắt, những nội dung chính xác, tương tác đều đặn sẽ giúp cho Fanpage của bạn uy tín hơn trong mắt khách hàng. Khi đó bạn tiếp cận sản phẩm của bạn đến khách hàng một cách dễ dàng và đạt hiệu quả hơn rất nhiều so với cách làm truyền thống
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
                  Với những nội dung sáng tạo và mang cho cộng đồng người xem nhiều giá trị, sẽ giúp gia tăng độ tiếp cận tự nhiên, sẽ phần nào giúp doanh nghiệp tối ưu được chi phí quảng cáo, truyền thông. Mà vẫn có thể giới thiệu và cung cấp được dịch vụ đến tay khách hàng, giúp gia tăng doanh thu.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #00d280">
                  <ion-icon name="archive"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Tăng Lượng Truy Cập Website</a>
                </h3>

                <p class="card-text">
                  Ngoài việc gia tăng tiếp cận trên Fanpage, thì Fanpage cũng là nguồn chuyển đổi traffic đáng kể, để kéo khách về website của doanh nghiệp. Để giới thiệu sản phẩm dịch vụ một cách chi tiết hơn, khi lượng truy cập tăng cũng sẽ giúp website của bạn dễ On Top Google hơn.
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

          <h2 class="h2 section-title">Hình Thức Quản Trị Fanpage Facebook Tại T-Media</h2>

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

                  <p class="card-subtitle">Định Hướng Nội Dung</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Để mang đến nét độc đáo riêng cho thương hiệu doanh nghiệp của bạn, đội ngũ T-Media Marketing sẽ triển khai bản kế hoạch nội dung cụ thể, đồng bộ hình ảnh phù hợp với đối tượng khách hàng. Giúp doanh nghiệp tăng độ uy tín và tiếp cận nguồn khách hàng tự nhiên.</a>
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

                  <p class="card-subtitle">Bắt Kịp Xu Hướng</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Nội dung “bắt trend”, được chau chuốt kỹ lưỡng sẽ là những yêu cầu hàng đầu nhằm thu hút khách hàng tương tác trên Fanpage. Đội ngũ Content sẽ lên bài quảng bá thương hiệu, giới thiệu sản phẩm của doanh nghiệp, các CTKM và bài viết về sự kiện đặc biệt,…</a>
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

                  <p class="card-subtitle">Thiết Kế Chuyên Nghiệp</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Đội ngũ thiết kế của T-Media liên tục cập nhật phong cách thiết kế nổi bật, mới nhất. Hình ảnh, video phù hợp dựa trên ý tưởng nội dung mà khách hàng yêu cầu. Đội ngũ còn xây dựng bộ nhận diện thương hiệu hoàn chỉnh cho quý khách hàng.</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                  <img src="../../assets/images/project-4.jpg" width="510" height="700" loading="lazy"
                       alt="Stuck with to-do list, I created a new app for" class="img-cover">
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">Tối Ưu Fanpage</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Chúng tôi sẽ kiểm tra và theo dõi chỉ số đo lường, báo cáo và tối ưu kết quả của các bài đăng Fanpage. Thay đổi nội dung phù hợp với các chiến dịch của khách hàng giúp tăng khả năng chuyển đổi, tăng hiệu quả chiến dịch quảng cáo.</a>
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
            Bảng Báo Giá Dịch Vụ Chăm Sóc Fanpage Facebook</h2>

          <p class="section-text">
            Dưới đây là bảng báo giá dịch vụ quản trị fanpage trọn gói của Trung Huy Marketing. Quý khách hàng có nhu cầu tìm hiểu hoặc tư vấn về dịch vụ, vui lòng liên hệ hotline 0964.898.041 để nhận hỗ trợ của chuyên viên marketing. Trân trọng
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
            Quy Trình Chăm Sóc Fanpage Facebook Tại T-Media Marketing</h2>
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

                  <a href="tel:0964.898.041" class="card-link">0964.898.041</a>


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
