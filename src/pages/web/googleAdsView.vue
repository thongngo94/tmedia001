
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

            <h1 class="h1 hero-title">Dịch Vụ Google Ads</h1>

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

            <h2 class="h2 section-title">Tại Sao Nên Chạy Google Ads?</h2>

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
                  Google Ads giúp doanh nghiệp bạn tăng lưu lượng truy cập, thu hút đúng khách hàng mục tiêu. Đưa trang đích của bạn thành TOP kết quả tìm kiếm với từ khóa chuyển đổi, kết nối khách hàng tiềm năng khi nhu cầu với sản phẩm.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Ngoài Google search từ khóa, doanh nghiệp bạn còn có thể nhắm đối tượng thông qua chiến dịch quảng cáo GDN. Phân phối, hiển thị quảng cáo trực tiếp đến người dùng internet có hành vi tiềm năng. Google còn cho phép Remarketing cho những người dùng đã truy cập website. Qua đó giúp gia tăng tỷ lệ chuyển đổi và phủ mạnh thương hiệu.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Google Smart Shopping (chiến dịch mua sắm thông minh), dùng nhiều trong thương mại điện tử, vừa hướng đến mục tiêu khách mua hàng tiềm năng chính xác, vừa có thể tạo điểm nhấn thông qua: Tên sản phẩm, hình ảnh của sản phẩm,..
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
            Ưu Điểm Dịch Vụ Google Ads Tại T-Media</h2>

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
                  <Link to="/facebook" class="card-title">Tiếp Cận Khách Hàng Mục Tiêu Chính Xác Nhờ Google Ads</Link>
                </h3>

<!--                <p class="card-text">-->
<!--                  Là đơn vị chuyên nghiệp, đi đầu trong nắm bắt xu hướng thị trường và mang đến những giải pháp nhanh chóng, kịp thời cho khách hàng-->
<!--                </p>-->

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #6610f2">
                  <ion-icon name="desktop"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Xây Dựng Tệp Khách Hàng Tiềm Năng Nhanh Nhất Nhờ Google Ads</a>
                </h3>

<!--                <p class="card-text">-->
<!--                  Với nhiều năm kinh nghiệm trong lĩnh vực SEO Top Google và nhận được đánh giá 5 sao từ những khách hàng đã từng hợp tác. Trung Huy tin rằng sẽ mang đến bạn trãi nghiệm tuyệt vời.-->
<!--                </p>-->

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #ffb700">
                  <ion-icon name="bulb"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Tiếp Cận Khách Hàng Tiềm Năng Ngay Lập Tức Nhờ Google Ads</a>
                </h3>

<!--                <p class="card-text">-->
<!--                  Luôn sẵn sàng hỗ trợ tư vẫn khách hàng, cung cấp thông tin bổ ích và nhanh chóng nhất. Với đội ngũ tư vấn túc trực 24/7-->
<!--                </p>-->

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #fc3549">
                  <ion-icon name="phone-portrait"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title"> Tiếp Thị Lại Để Tiếp Cận Khách Hàng Tiềm Năng</a>
                </h3>

<!--                <p class="card-text">-->
<!--                  Mang đến những chuyển đổi traffic nhanh chóng, giúp khách hàng đạt được mục tiêu đề ra trên mỗi chiến dịch, Support hết mình.-->
<!--                </p>-->

              </div>
            </li>



                      <li>
                        <div class="service-card">

                          <div class="card-icon" style="background-color: #ff612f">
                            <ion-icon name="build"></ion-icon>
                          </div>

                          <h3 class="h3">
                            <a href="#" class="card-title"> Kiểm Soát Chi Phí Quảng Cáo, Báo Cáo Chiến Dịch</a>
                          </h3>

<!--                          <p class="card-text">-->
<!--                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem-->
<!--                            aperiam, eaque-->
<!--                            ipsa quae.-->
<!--                          </p>-->

                        </div>
                      </li>

          </ul>

        </div>
      </section>
      <section class="section project" id="project" aria-label="project">
        <div class="container">

          <h2 class="h2 section-title">Hình Thức Quảng Cáo Google Ads Tại T-Media</h2>

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

                  <p class="card-subtitle">Search Adwords</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Google Search Network là một kênh quảng cáo PPC được phổ biến nhất. Khi có nhu cầu tìm từ khóa trên Google, danh sách website được chạy quảng cáo sẽ xuất hiện đúng thời điểm và ở phía trên các website tự nhiên. Chính vì vậy, website của bạn sẽ dễ dàng tiếp cận được với người dùng. Search Network bao gồm như: standard ad, dynamic ad, call-only ad và quảng cáo toàn cầu (còn gọi là mobile app promotion)</a>
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

                  <p class="card-subtitle"> Display Ads</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Khi bạn lướt tình cờ đọc một bài đăng hay xem video trên website chuyên nghiệp nào đó, bạn sẽ thấy quảng cáo (ví dụ banner, flash,..) xuất hiện nhiều vị trí khác nhau trên trang. Đây chính là hình thức của quảng cáo video– Display Network. Bên đây là tiêu chí quan trọng mà Google chọn các website đặt display network: – Từ khóa;  Vị trí quảng cáo; Chủ đề; Tiếp thị lại</a>
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

                  <p class="card-subtitle">Shopping Ads</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Shopping Ads là quảng cáo mua sắm ở trên Google. Loại hình quảng cáo này có thể cho người dùng nhìn thấy thông tin dịch vụ của bạn một cách nhanh chóng như: Tên sản phẩm dịch vụ; Giá; Video, Gif; Địa chỉ website bán hàng</a>
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

                  <p class="card-subtitle"> Video Ads</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Quảng cáo Video( Video Ads ) cho phép các bạn chạy mẫu quảng cáo trên Youtube và trên các quảng cáo Google. 3 lợi ích chính của việc chạy video ads là: Phạm vi tiếp cận lớn; Nhắm mục tiêu tốt; Có thể đo lường</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>








          </ul>

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

            <h2 class="h2 section-title">Các Công Việc Khi Chạy Google Ads </h2>



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
                  Chúng tôi phân tích website quý khách
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Nghiên cứu từ khóa tiềm năng
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Cài đặt chiến dịch
                </p>
              </li>
              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Viết mẫu quảng cáo
                </p>
              </li>
              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Phủ định bên trong, bên ngoài
                </p>
              </li>
              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Thiết lập các tiện ích mở rộng
                </p>
              </li>
              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Thiết lập Google Analytics, Tag Manager, cài đặt Chuyển đổi
                </p>
              </li>
              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Tối ưu hàng ngày
                </p>
              </li>
              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Gửi báo cáo cho khách hàng
                </p>
              </li>
              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Đánh giá hiệu quả từng giai đoạn, đưa ra phương án tiếp theo.
                </p>
              </li>

            </ul>

            <!--          <h3 class="h3">Nhiệm vụ của chúng tôi</h3>-->



          </div>

        </div>
      </section>
      <section class="section service" id="service1" aria-label="service">
        <div class="container">

          <h2 class="h3 section-title">
            Bảng Báo Giá Dịch Vụ Google Ads</h2>

          <p class="section-text">
            Dưới đây là bảng báo giá dịch vụ website  của T-Media. Quý khách hàng có nhu cầu tìm hiểu hoặc tư vấn về dịch vụ, vui lòng liên hệ hotline 0964.898.041 để nhận hỗ trợ của chuyên viên marketing. Trân trọng
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <p class="card-text">GÓI QL - 15%</p>



                <h3 class="h3">
                  <a href="#" class="card-title">$99.99</a>
                </h3>



              </div>
            </li>

            <li>
              <div class="service-card">

                <p class="card-text">GÓI QL - 13%</p>

                <h3 class="h3">
                  <a href="#" class="card-title">$99.99</a>
                </h3>



              </div>
            </li>

            <li>
              <div class="service-card">


                <p class="card-text">GÓI QL - 11%</p>
                <h3 class="h3">
                  <a href="#" class="card-title">$99.99</a>
                </h3>



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
            Quy Trình Triển Khai Chiến Dịch Google Ads TẠI T-Media Marketing</h2>
          <!--          <p class="section-text">-->
          <!--            Khách Hàng Chưa Có Fanpage-->
          <!--          </p>-->

          <figure class="hero-banner">
            <img src="../../assets/images/2-1.gif" alt="hero banner" class="w-100">
          </figure>

        </div>












      </section>
      <!--      <section class="section about" id="about" aria-label="about">-->
      <!--        <div class="container">-->

      <!--          <div class="about-banner img-holder" style="&#45;&#45;width: 930; &#45;&#45;height: 960;">-->
      <!--            <img src="../../assets/images/IMG_1210-1200x800.jpg" width="1000" height="1000" loading="lazy" alt="about banner"-->
      <!--                 class="img-cover">-->

      <!--            <button class="play-btn" aria-label="Play video">-->
      <!--              <ion-icon name="play" aria-hidden="true"></ion-icon>-->
      <!--            </button>-->
      <!--          </div>-->

      <!--          <div class="about-content">-->

      <!--            <h2 class="h2 section-title">QUÀ TẶNG KHÁCH HÀNG KHI ĐĂNG KÝ TĂNG FOLLOW TẠI T-Media MARKETING </h2>-->

      <!--            &lt;!&ndash;          <p class="section-text">&ndash;&gt;-->
      <!--            &lt;!&ndash;            Tại T-MEDIA GROUP, chúng tôi tận dụng sự mạnh mẽ của tiếp thị để biến ý tưởng thành hiện thực. Chúng tôi là một đội ngũ chuyên nghiệp và sáng tạo, cam kết mang lại giá trị tối ưu cho khách hàng của mình thông qua chiến dịch tiếp thị độc đáo và hiệu quả.&ndash;&gt;-->
      <!--            &lt;!&ndash;          </p>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <h3 class="h3">Tại Sao Chọn Chúng Tôi?</h3>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <p class="section-text">&ndash;&gt;-->
      <!--            &lt;!&ndash;            Chúng tôi hiểu rằng môi trường kinh doanh ngày càng phức tạp và đầy cạnh tranh. Vì vậy, chúng tôi không chỉ tập trung vào việc thực hiện chiến dịch tiếp thị, mà còn vào việc hiểu sâu về mục tiêu của bạn và đối tượng tiêu dùng. Sự kết hợp giữa nghiên cứu thị trường chi tiết và sáng tạo không giới hạn giúp chúng tôi tạo ra các chiến dịch tiếp thị tùy chỉnh, độc đáo và hiệu quả.&ndash;&gt;-->
      <!--            &lt;!&ndash;          </p>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <h3 class="h3">Cơ Sở Hạ Tầng Và Công Nghệ Hiện Đại</h3>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <p class="section-text">&ndash;&gt;-->
      <!--            &lt;!&ndash;            Chúng tôi đầu tư mạnh mẽ vào cơ sở hạ tầng và công nghệ tiên tiến để đảm bảo rằng mọi chiến dịch của bạn được triển khai một cách suôn sẻ và theo dõi một cách tỉ mỉ. Sự kết hợp giữa trí tuệ nhân tạo, phân tích dữ liệu và công cụ tiếp thị hàng đầu giúp chúng tôi cung cấp thông tin cần thiết và hiểu biết chi tiết để bạn có thể ra quyết định đúng đắn.&ndash;&gt;-->
      <!--            &lt;!&ndash;          </p>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <h3 class="h3">Thành công của chúng tôi</h3>&ndash;&gt;-->

      <!--            <ul class="about-list">-->

      <!--              <li class="about-item">-->
      <!--                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>-->

      <!--                <p class="section-text">-->
      <!--                  Chia Sẻ Bí Quyết Phát Triển Kênh: Khi bàn giao kênh TikTok, chúng tôi sẽ tổng hợp và chia sẻ lại tất cả những bí quyết để xây dựng và phát triển kênh TikTok toàn diện-->
      <!--                </p>-->
      <!--              </li>-->

      <!--              <li class="about-item">-->
      <!--                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>-->

      <!--                <p class="section-text">-->
      <!--                  Hướng Dẫn Quay Video TikTok: Nhiều khách hàng sẽ gặp hạn chế về việc lên ý tưởng và cách quay video TikTok chuyên nghiệp. Chúng tôi cũng hỗ trợ khách hàng khoản này.-->
      <!--                </p>-->
      <!--              </li>-->



      <!--            </ul>-->

      <!--            &lt;!&ndash;          <h3 class="h3">Nhiệm vụ của chúng tôi</h3>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <p class="section-text">&ndash;&gt;-->
      <!--            &lt;!&ndash;            Chúng tôi cam kết mang lại giá trị tối ưu cho mỗi khách hàng, không chỉ bằng cách đưa ra các chiến dịch tiếp thị hiệu quả, mà còn bằng cách thấu hiểu sâu sắc về nhu cầu và mục tiêu của họ. Chúng tôi tin rằng sự sáng tạo có thể thay đổi mọi thứ, và sự tiếp thị tinh tế là chìa khóa để nắm bắt cơ hội.&ndash;&gt;-->
      <!--            &lt;!&ndash;          </p>&ndash;&gt;-->

      <!--          </div>-->

      <!--        </div>-->
      <!--      </section>-->
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

                  <a href="tel:+0964.898.041" class="card-link">+0964.898.041
                  </a>


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
