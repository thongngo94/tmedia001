
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

            <h1 class="h1 hero-title">Dịch Vụ SEO TOP GOOGLE</h1>

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
            <img src="../../assets/images/seotop.jpg" width="1000" height="1000" loading="lazy" alt="about banner"
                 class="img-cover">

            <button class="play-btn" aria-label="Play video">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div class="about-content">

            <h2 class="h2 section-title">TẠI SAO NÊN SEO TOP GOOGLE ? </h2>

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
                  SEO Top Goole: giúp Website của Doanh Nghiệp có cơ hội chiếm vị trí cao trong bảng xếp hạng của Google: Khi đứng top, bạn sẽ là doanh nghiệp được nhiều khách hàng biết đến hơn. Theo đó, các thông tin, quảng cáo hay sản phẩm của bạn đều sẽ tiếp cận dễ dàng đến các khách hàng tiềm năng.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Khẳng định vị thế của Doanh Nghiệp: Seo Top Google giúp Website của bạn được khách hàng nhìn thấy đầu tiên và nhờ đó Doanh Nghiệp bạn mặc nhiên được hiểu là đơn vị hàng đầu trong ngành, góp phần gia tăng lượt traffic, thúc đẩy doanh số.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Tiếp cận khách hàng mục tiêu tốt nhất với chi phí rẻ nhất: Chỉ những người thực sự quan tâm đến những vấn đề về thông tin xã hội, sản phẩm hay dịch vụ của bạn mới tìm kiếm các thông tin liên quan và biết đến bạn. Vì vậy, lượt traffic mà Seo Top Google mang lại rất chất lượng. Đây cũng là dịch vụ có tính lâu dài và chi phí rẻ nhất so với hiệu quả bền vững mà nó mang lại
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
            ƯU ĐIỂM CỦA DỊCH VỤ SEO TOP GOOGLE Tại T-Media</h2>

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
                  <Link to="#" class="card-title">T-Media Marketing</Link>
                </h3>

                <p class="card-text">
                  Là đơn vị chuyên nghiệp, đi đầu trong nắm bắt xu hướng thị trường và mang đến những giải pháp nhanh chóng, kịp thời cho khách hàng
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #6610f2">
                  <ion-icon name="desktop"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Đội Ngũ Chuyên Nghiệp: </a>
                </h3>

                <p class="card-text">
                  Với nhiều năm kinh nghiệm trong lĩnh vực SEO Top Google và nhận được đánh giá 5 sao từ những khách hàng đã từng hợp tác. Trung Huy tin rằng sẽ mang đến bạn trãi nghiệm tuyệt vời.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #ffb700">
                  <ion-icon name="bulb"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Hỗ Trợ Tư Vấn Nhiệt Tình, 24/7:</a>
                </h3>

                <p class="card-text">
                  Luôn sẵn sàng hỗ trợ tư vẫn khách hàng, cung cấp thông tin bổ ích và nhanh chóng nhất. Với đội ngũ tư vấn túc trực 24/7
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #fc3549">
                  <ion-icon name="phone-portrait"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Mang Lại Giá Trị Chuyển Đổi Thực</a>
                </h3>

                <p class="card-text">
                  Mang đến những chuyển đổi traffic nhanh chóng, giúp khách hàng đạt được mục tiêu đề ra trên mỗi chiến dịch, Support hết mình.
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

          <h2 class="h2 section-title">Hình Thức SEO Top Google Tại T-Media</h2>

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

                  <p class="card-subtitle">Phân Tích Dự Án</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Phân tích chuyên sâu vào website như: nội dung, từ khóa, cấu trúc, internal link và kết hợp phân tích thị trường, đối thủ, backlink đề từ đó lập kế hoạch tối ưu và đề xuất đến Quý đối tác trước khi triển khai thực hiện và phối hợp thực hiện.</a>
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

                  <p class="card-subtitle">Đề Xuất Và Thực Hiện Tối Ưu</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Đề xuất chi tiết các hạng mục cần thực hiện đến Quý Đối tác, tổ chức nguồn thực thực hiện tối ưu và kiểm tra giám sát dựa trên các hệ thống phần mềm quản trị dự án.Phối hợp cùng Quý đối tác trong việc triển khai tối ưu các hạng mục công việc có tính liên quan.</a>
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

                  <p class="card-subtitle">Tối Ưu Website</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Chúng tôi sẽ kiểm tra và theo dõi chỉ số đo lường, báo cáo- tối ưu kết quả của website. Thay đổi nội dung phù hợp tới khách hàng giúp tăng khả năng chuyển đổi, tăng hiệu quả chiến dịch quảng cáo, từ đó tăng doanh thu, lợi nhuận.</a>
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
            <img src="../../assets/images/seotop.jpg" width="1000" height="1000" loading="lazy" alt="about banner"
                 class="img-cover">

            <button class="play-btn" aria-label="Play video">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div class="about-content">

            <h2 class="h2 section-title">Làm Cách Nào Để Google Biết Cách Xếp Hạng Một Trang? ? </h2>

                      <p class="section-text">
                        Công cụ tìm kiếm chỉ có một mục tiêu duy nhất. Chúng nhằm mục đích cung cấp cho người dùng câu trả lời hoặc thông tin phù hợp nhất. Mỗi khi bạn sử dụng chúng, các thuật toán của chúng sẽ chọn các trang phù hợp nhất với truy vấn của bạn. Và sau đó, xếp hạng chúng, hiển thị những cái có thẩm quyền hoặc phổ biến nhất trước tiên. Để cung cấp đúng thông tin cho người dùng, các công cụ tìm kiếm phân tích hai yếu tố:
                      </p>

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
                  Mức độ liên quan giữa truy vấn tìm kiếm và nội dung trên một trang. Công cụ tìm kiếm đánh giá nó bằng các yếu tố khác nhau như chủ đề hoặc từ khóa.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Quyền hạn, được đo bằng mức độ phổ biến của một website trên Internet. Google giả định rằng một trang hoặc tài nguyên càng phổ biến thì nội dung của nó càng có giá trị đối với người đọc.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Và để phân tích tất cả thông tin này, họ sử dụng các phương trình phức tạp được gọi là thuật toán tìm kiếm.
                </p>
              </li>

            </ul>

            <!--          <h3 class="h3">Nhiệm vụ của chúng tôi</h3>-->

                      <p class="section-text">
                        Công cụ tìm kiếm giữ bí mật thuật toán của họ. Nhưng theo thời gian, những người làm SEO đã xác định được một số yếu tố mà họ xem xét khi xếp hạng một trang. Chúng tôi gọi chúng là các yếu tố xếp hạng và chúng là trọng tâm của chiến lược SEO. Khi xác định mức độ liên quan và thẩm quyền, việc tuân theo khuôn khổ E-A-T có thể giúp ích rất nhiều. E-A-T trong SEO là viết tắt của “chuyên môn”, “tính có thẩm quyền” và “sự đáng tin cậy”. Và mặc dù đây không phải là các yếu tố xếp hạng trực tiếp, nhưng chúng có thể cải thiện nội dung SEO của bạn và có thể tác động đến các yếu tố xếp hạng trực tiếp. Như bạn sẽ sớm thấy, việc thêm nhiều nội dung hơn, tối ưu hóa tên tệp hình ảnh hoặc cải thiện liên kết nội bộ có thể ảnh hưởng đến thứ hạng và khả năng hiển thị tìm kiếm của bạn. Và đó là bởi vì mỗi hành động đó đều cải thiện một yếu tố xếp hạng.
                      </p>

          </div>

        </div>
      </section>
      <section class="section service" id="service1" aria-label="service">
        <div class="container">

          <h2 class="h3 section-title">
            Bảng Báo Giá Dịch Vụ SEO TOP GOOGLE</h2>

          <p class="section-text">
            Dưới đây là bảng báo giá dịch vụ SEO TOP GOOGLE của T-Media. Quý khách hàng có nhu cầu tìm hiểu hoặc tư vấn về dịch vụ, vui lòng liên hệ hotline 0964.898.041 để nhận hỗ trợ của chuyên viên marketing. Trân trọng
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <p class="card-text">GÓI NHẬP LIỆU</p>



                <h3 class="h3">
                  <Link to="#" class="card-title">30.000.000đ/tháng</Link>
                </h3>


              </div>
            </li>

            <li>
              <div class="service-card">

                <p class="card-text">GÓI CHĂM SÓC - SEO</p>

                <h3 class="h3">
                  <a href="#" class="card-title">50.000.000đ/tháng</a>
                </h3>



              </div>
            </li>

            <li>
              <div class="service-card">


                <p class="card-text">GÓI CHĂM SÓC - SEO PRO</p>
                <h3 class="h3">
                  <a href="#" class="card-title">70.000.000đ/tháng</a>
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
            Quy Trình Chăm Sóc SEO TOP GOOGLE TẠI T-Media Marketing</h2>
          <!--          <p class="section-text">-->
          <!--            Khách Hàng Chưa Có Fanpage-->
          <!--          </p>-->

          <figure class="hero-banner">
            <img src="../../assets/images/quytinhquangcaotiktok-2048x980.png" alt="hero banner" class="w-100">
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
