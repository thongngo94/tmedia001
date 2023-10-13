<template>
  <header class="header" data-header>
    <div class="container">

<!--            <a href="#" class="logo">T-MEDIA GROUP</a>-->
      <img src="../assets/images/logo.png" width="70px" />

      <nav class="navbar container"  data-navbar>
        <ul class="navbar-list">

          <li>
            <a href="#home" class="navbar-link" data-nav-link>Trang chủ</a>
          </li>

          <li>
            <a href="#service" class="navbar-link" data-nav-link>Dịch vụ</a>
          </li>

          <li>
            <a href="#project" class="navbar-link" data-nav-link>Dự án đã làm</a>
          </li>

          <li>
            <a href="#about" class="navbar-link" data-nav-link>Về chúng tôi</a>
          </li>

          <li>
            <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
          </li>
<!--          <li>-->
<!--            <Link to="/facebook" class="navbar-link" data-nav-link>Facebook</Link>-->
<!--          </li>-->

          <li>
            <a href="#contact" class="navbar-link" data-nav-link>Liên hệ</a>
          </li>
          <li>
            <a href="#contact" class="navbar-link" data-nav-link>Tuyển dụng </a>
          </li>
<!--          <li>-->
<!--            <a href="/facebook" class="navbar-link" data-nav-link>Facebook</a>-->
<!--          </li>-->
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
            <a href="#service" class="btn btn-primary">Bắt đầu</a>
          </li>



        </ul>
      </nav>


      <button class="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler @click="toggleNavbar">
        <ion-icon name="menu-outline"  class="open" ></ion-icon>
        <ion-icon name="close-outline"  class="close" ></ion-icon>
      </button>

    </div>
  </header>
</template>

<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    toggleNavbar() {-->
<!--      const navbar = document.querySelector("[data-navbar]");-->
<!--      navbar.classList.toggle("active");-->
<!--    },-->
<!--    scrollToSection(sectionId) {-->
<!--      const section = document.querySelector(sectionId);-->
<!--      if (section) {-->
<!--        window.scrollTo({-->
<!--          top: section.offsetTop,-->
<!--          behavior: 'smooth',-->
<!--        });-->
<!--        this.toggleNavbar(); // Close the navbar after clicking a link-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<script setup>
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