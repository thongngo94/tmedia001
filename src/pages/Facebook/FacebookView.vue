
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

              <h1 class="h1 hero-title">Giải pháp Quảng cáo facebook</h1>

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

              <h2 class="h2 section-title">Tại Sao Nên Chạy Quảng Cáo Facebook ?</h2>

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
                    Chạy quảng cáo Facebook có thể target chuyên sâu và tiếp cận đối tượng khách hàng mục tiêu, tiết kiệm chi phí cho việc marketing, tăng mức nhận diện thương hiệu trên mạng xã hội, giúp doanh nghiệp tăng trưởng về doanh số bán hàng.
                  </p>
                </li>

                <li class="about-item">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <p class="section-text">
                    Dịch vụ quảng cáo Facebook giúp thu thập dữ liệu, gồm có thông tin liên hệ của khách hàng mới và khách hàng tiềm năng, thúc đẩy chuyển đổi của từng giai đoạn mua hàng (Buyer’s Journey).
                  </p>
                </li>

                <li class="about-item">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <p class="section-text">
                    Facebook Marketing tăng khả năng tương tác trên Fanpage, điều hướng truyền thông cho website hoặc landing page với giá quảng cáo Facebook cực rẻ, đo lường hiệu quả một cách chính xác trên tài khoản Facebook Ads.
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
              Ưu Điểm Dịch Vụ Facebook Ads Tại T-Media</h2>

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
                    <Link to="/facebook" class="card-title">Tiếp Cận Khách Hàng Tiềm Năng</Link>
                  </h3>

                  <p class="card-text">
                    Facebook là nền tảng màu mỡ nhất tính tới hiện tại dành cho các doanh nghiệp, quảng cáo Facebook giúp bạn tiếp cận khách hàng tiềm năng trên toàn quốc, trên toàn thế giới. Gia tăng doanh thu, với chi phí hợp lí.
                  </p>

                </div>
              </li>

              <li>
                <div class="service-card">

                  <div class="card-icon" style="background-color: #6610f2">
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 class="h3">
                    <a href="/facebook" class="card-title">Tương Tác, Tiếp Cận Cao </a>
                  </h3>

                  <p class="card-text">
                    Sau khi tiếp cận khách hàng tiềm năng, giúp tăng khả năng chuyển đổi đơn hàng, gia tăng nhận diện thương hiệu. Để lại dấu ấn trong tâm trí khách hàng mục tiêu.
                  </p>

                </div>
              </li>

              <li>
                <div class="service-card">

                  <div class="card-icon" style="background-color: #ffb700">
                    <ion-icon name="bulb"></ion-icon>
                  </div>

                  <h3 class="h3">
                    <a href="/facebook" class="card-title">Mẫu Quảng Cáo Ấn Tượng </a>
                  </h3>

                  <p class="card-text">
                    Với đội ngũ nhân sự chuyên nghiệp, tận tình sẽ giúp doanh nghiệp tạo nên những content & hình ảnh đặc sắc, ấn tượng đến với khách hàng tiềm năng.
                  </p>

                </div>
              </li>

              <li>
                <div class="service-card">

                  <div class="card-icon" style="background-color: #fc3549">
                    <ion-icon name="phone-portrait"></ion-icon>
                  </div>

                  <h3 class="h3">
                    <a href="/facebook" class="card-title">Không Giới Hạn Mẫu Quảng Cáo</a>
                  </h3>

                  <p class="card-text">
                    Với đa dạng lĩnh vực, ngành nghề sẽ có những cách tiếp cận khác nhau,T-media có đủ tài nguyên, nhân lực để giúp khách hàng lựa chọn mẫu quảng cáo phù hợp nhất với doanh nghiệp bạn.
                  </p>

                </div>
              </li>

              <li>
                <div class="service-card">

                  <div class="card-icon" style="background-color: #00d280">
                    <ion-icon name="archive"></ion-icon>
                  </div>

                  <h3 class="h3">
                    <a href="/facebook" class="card-title">Ngân Sách Không Giới Hạn</a>
                  </h3>

                  <p class="card-text">
                    Không giới hạn ngân sách từ vài trăm nghìn đến hàng trăm triệu đồng, T-Media đều hỗ trợ khách hàng nhiệt tình, để chiến dịch đạt hiệu quả tốt nhất.
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

            <h2 class="h2 section-title">Hình Thức Quảng Cáo Trên Facebook Ads</h2>

            <p class="section-text">
              Dưới đây, T-Media xin chia sẻ 7 hình thức quảng cáo phổ biến trên Facebook. Tùy mỗi yêu cầu của khách hàng để nhà chạy quảng cáo lựa chọn hình thức phù hợp.
            </p>

            <ul class="grid-list">

              <li>
                <div class="project-card">

                  <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                    <img src="../../assets/images/project-1.jpg" width="510" height="700" loading="lazy"
                         alt="Designing a better cinema experience" class="img-cover">
                  </figure>

                  <div class="card-content">

                    <p class="card-subtitle">Quảng Cáo Facebook Tiếp Cận</p>

                    <h3 class="h3">
                      <a href="#" class="card-title">Dựa theo số lượng khách hàng nhìn thấy bài viết quảng cáo Facebook để tính phí. Mục tiêu nhằm tăng độ phủ, nhận diện thương hiệu trên Social</a>
                    </h3>

                    <a href="#project" class="btn btn-primary">View Details</a>

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

                    <p class="card-subtitle">Quảng Cáo Click To Messenger</p>

                    <h3 class="h3">
                      <a href="#" class="card-title">Quảng cáo sẽ hiển thị trên New Feed & Messenger người dùng, khi khách hàng click vào sẽ mở ra cửa sổ Inbox Messenger. Dịch vụ này giúp Fanpage nhận diện data khách hàng tiềm năng, phí quảng cáo tính trên số lần tương tác của khách hàng</a>
                    </h3>

                    <a href="#project" class="btn btn-primary">View Details</a>

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

                    <p class="card-subtitle">Quảng Cáo Facebook Tương Tác Post</p>

                    <h3 class="h3">
                      <a href="#" class="card-title">Hình thức này sẽ tính phí khi người dùng tương tác vào bài viết đang chạy quảng cáo. Sự tương tác ở đây có thể là Click, Inbox,Share hoặc Comment vào bài post</a>
                    </h3>

                    <a href="#project" class="btn btn-primary">View Details</a>

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

                    <p class="card-subtitle">Quảng Cáo Tăng Like Fanpage</p>

                    <h3 class="h3">
                      <a href="#" class="card-title">Là hình thức quảng cáo nhằm tăng thêm số lượt người Like fanpage. Chi phí dịch vụ sẽ tính trên số lượt like Fanpage Facebook được tạo ra. Tùy lĩnh vực và target mà giá like sẽ khác nhau</a>
                    </h3>

                    <a href="#project" class="btn btn-primary">View Details</a>

                  </div>

                </div>
              </li>

              <li>
                <div class="project-card">

                  <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                    <img src="../../assets/images/project-5.jpg" width="510" height="700" loading="lazy"
                         alt="Examples of different types of sprints" class="img-cover">
                  </figure>

                  <div class="card-content">

                    <p class="card-subtitle">Quảng Cáo Video ThruPlay</p>

                    <h3 class="h3">
                      <a href="#" class="card-title">Hình thức quảng cáo Facebook này tính phí trên số lượt xem video sau 15s. Quảng cáo có nội dung và hiển thị ở nhiều vị trí trên Facebook, có thể là New Feed hoặc Tab video…</a>
                    </h3>

                    <a href="#project" class="btn btn-primary">View Details</a>

                  </div>

                </div>
              </li>

              <li>
                <div class="project-card">

                  <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                    <img src="../../assets/images/project-6.jpg" width="510" height="700" loading="lazy"
                         alt="Redesigning the New York times app" class="img-cover">
                  </figure>

                  <div class="card-content">

                    <p class="card-subtitle">Quảng Cáo Click To Web</p>

                    <h3 class="h3">
                      <a href="#" class="card-title">Khi khách hàng mục tiêu bấm vào quảng cáo Sponsored sẽ được chuyển hướng về Landing Page doanh nghiệp. Bảng giá quảng cáo theo lượt Click</a>
                    </h3>

                    <a href="#project" class="btn btn-primary">View Details</a>

                  </div>

                </div>
              </li>
              <li>
                <div class="project-card">

                  <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                    <img src="../../assets/images/project-6.jpg" width="510" height="700" loading="lazy"
                         alt="Redesigning the New York times app" class="img-cover">
                  </figure>

                  <div class="card-content">

                    <p class="card-subtitle">Quảng Cáo Livestream Facebook</p>

                    <h3 class="h3">
                      <a href="#" class="card-title">Muốn thực hiện chiến dịch quảng cáo hình thức này, yêu cầu Fanpage phải có thương hiệu và tích xanh. Chi phí quảng cáo tính trên số lượt view video sau 3s. Mục tiêu giúp các video livestream trực tiếp có nhiều lượt xem hơn.</a>
                    </h3>

                    <a href="#project" class="btn btn-primary">View Details</a>

                  </div>

                </div>
              </li>

            </ul>

          </div>
        </section>
        <section class="section service" id="service1" aria-label="service">
          <div class="container">

            <h2 class="h3 section-title">
              Bảng Báo Giá Dịch Vụ Quảng Cáo Facebook</h2>

            <p class="section-text">
              Dưới đây là bảng báo giá dịch vụ quảng cáo Facebook tại T-Media. Quý khách hàng có nhu cầu tìm hiểu hoặc tư vấn về dịch vụ, vui lòng liên hệ hotline 0935 7777 69 để nhận hỗ trợ của chuyên viên marketing. Trân trọng
            </p>

            <ul class="grid-list">

              <li>
                <div class="service-card">

                  <p class="card-text">Gói 01</p>



                  <h3 class="h3">
                    <Link to="/facebook" class="card-title">14.000.000đ/tháng</Link>
                  </h3>
                  <ul class="about-list">

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Giá tương tác Mess
                      </p>
                    </li>

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Số tương tác Mess
                      </p>
                    </li>

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Khu vực
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Đối tượng
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Thời gian
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Viết content chạy ads: Miễn phí 2 bài
                      </p>
                    </li>

                  </ul>

                </div>
              </li>

              <li>
                <div class="service-card">

                  <p class="card-text">Gói 02</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">36.000.000đ/tháng </a>
                  </h3>

                  <ul class="about-list">

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Giá tương tác Mess
                      </p>
                    </li>

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Số tương tác Mess
                      </p>
                    </li>

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Khu vực
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Đối tượng
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Thời gian
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Viết content chạy ads: Miễn phí 5 bài
                      </p>
                    </li>

                  </ul>

                </div>
              </li>

              <li>
                <div class="service-card">


                  <p class="card-text">Gói 03</p>
                  <h3 class="h3">
                    <a href="#" class="card-title">48.000.000đ/tháng </a>
                  </h3>

                  <ul class="about-list">

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Giá tương tác Mess
                      </p>
                    </li>

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Số tương tác Mess
                      </p>
                    </li>

                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Khu vực
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Đối tượng
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Thời gian
                      </p>
                    </li>
                    <li class="about-item">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                      <p class="section-text">
                        Viết content chạy ads: Miễn phí 10 bài
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

                    <a href="tel:+0974151514" class="card-link">+0974151514</a>

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

  // import {defineComponent} from "vue";
  import {Link} from "view-ui-plus";
  import Header from "../../components/Header.vue";

  // export default defineComponent({
  //   components: {Header, Link}
  // })

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
