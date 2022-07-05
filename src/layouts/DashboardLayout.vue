<template>
  <div class="dash">
    <div class="dash-nav dash-nav-dark" :class="{ dashleft: isLeft }">
      <header>
        <a href="#!" class="menu-toggle" @click="menuToggle">
          <i class="fas fa-bars"></i>
        </a>
        <a href="#" class="spur-logo"
          ><i class="fa-solid fa-shuttle-space"></i> <span>Infinity</span></a
        >
      </header>
      <div class="sidebar-nav" :class="{ dashleft: isLeft }">
        <div class="sidebar-wrapper">
          <div class="sidebar-logo">
            <a aria-label="sidebar mini logo" class="simple-text logo-mini">
              <div class="logo-img">
                <!-- <img :src="required('@/assets/')" /> -->
                <i class="fa-solid fa-shuttle-space"></i>
              </div>
            </a>
            <loader
              v-if="this.$store.getters.loading"
              class="loader-wrapper-small"
            ></loader>
            <a v-else class="simple-text logo-normal">
              <i class="fa-regular fa-hand"></i>, {{ name }}
            </a>
          </div>
          <nav class="dash-nav-list">
            <div class="dash-nav-dropdown">
              <router-link :to="{ name: 'profile' }">
                <a class="dash-nav-item" @click="isLeft = !isLeft">
                  <i class="fas fa-file"></i> Profile
                </a>
              </router-link>
            </div>
            <router-link :to="{ name: 'space' }">
              <div class="dash-nav-dropdown">
                <a class="dash-nav-item" @click="isLeft = !isLeft">
                  <i class="fa fa-rocket" aria-hidden="true"></i> Space flight
                </a>
              </div>
            </router-link>
            <router-link :to="{ name: 'todo' }">
              <div class="dash-nav-dropdown">
                <a class="dash-nav-item" @click="isLeft = !isLeft">
                  <i class="fa-solid fa-list-check"></i> Todo list
                </a>
              </div>
            </router-link>
            <div class="dash-nav-dropdown">
              <Clock />
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="dash-app" :class="{ dashcompact: isLeft }">
      <header class="dash-toolbar" :class="{ dashleft_zero: isLeft }">
        <a href="#!" class="menu-toggle" @click="menuToggle">
          <i class="fas fa-bars"></i>
        </a>
        <div class="tools">
          <a
            href="https://github.com/adzhigitovruslan"
            target="_blank"
            class="tools-item"
          >
            <i class="fab fa-github"></i>
          </a>
          <div class="dropdown tools-item" @click="isShow = !isShow">
            <a
              href="#!"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenu1"
              :class="{ show: isShow }"
            >
              <router-link :to="{ name: 'profile' }">
                <a class="dropdown-item">Profile</a>
              </router-link>

              <a class="dropdown-item" @click="logout"
                >Logout
                <span><i class="fa fa-sign-out" aria-hidden="true"></i></span
              ></a>
            </div>
          </div>
        </div>
      </header>
      <div class="dash-pages">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue'
import Loader from '@/components/Loader.vue'

export default {
  data() {
    return {
      isShow: false,
      isLeft: false,
      showName: false,
    }
  },
  components: {
    Clock,
    Loader,
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    },
    hideShowHeader() {
      var lastScrollTop = 0
      var navbar = document.querySelector('.dash-toolbar')
      window.addEventListener('scroll', function () {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop > lastScrollTop && !scrollTop <= 0) {
          navbar.style.top = '-90px'
        } else {
          navbar.style.top = '0px'
        }
        lastScrollTop = scrollTop
      })
    },
    menuToggle() {
      const mobileBreakpoint = window.matchMedia('(max-width: 991px )')
      if (mobileBreakpoint.matches) {
        document.querySelector('.dash-nav').classList.toggle('mobile-show')
      } else {
        this.isLeft = !this.isLeft
      }
    },
    dropDownItems() {
      const tabFocus = document.querySelectorAll('.dash-nav-dropdown')

      tabFocus.forEach(function (item) {
        item.addEventListener('click', function () {
          if (item.classList.contains('show')) {
            item.classList.remove('show')
          } else {
            tabFocus.forEach(function (item) {
              item.classList.remove('show')
            })
            item.classList.add('show')
          }
        })
      })
    },
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    },
  },
  mounted() {
    setTimeout(() => {
      this.dropDownItems()
      this.hideShowHeader()
    }, 1000)

    if (!Object.keys(this.$store.getters.info).length) {
      this.$store.dispatch('fetchInfo')
    }
  },
}
</script>

<style lang="scss" scoped>
.dash {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: #080808;
}

.dash-app {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 2;
  -webkit-flex-grow: 2;
  -ms-flex-positive: 2;
  flex-grow: 2;
  margin-top: 84px;
}
@media (min-width: 992px) {
  .dash-app {
    margin-left: 250px;
    transition: margin-left 0.4s;
  }
  .dash-compact .dash-app {
    margin-left: 0;
  }
  .dashcompact {
    margin-left: 0;
  }
  .dashleft {
    left: -300px !important;
  }
}

.dash-content {
  -webkit-box-flex: 2;
  -webkit-flex-grow: 2;
  -ms-flex-positive: 2;
  flex-grow: 2;
  padding: 25px;
}
@media (max-width: 767.98px) {
  .dash-content {
    padding: 15px 0px;
  }
}

.dash-row {
  margin-bottom: 30px;
}
.dash-nav {
  min-width: 238px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  z-index: 2;

  transition: left 0.4s ease;
}
.dash-compact .dash-nav {
  display: none;
}
.dash-nav::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
@media (max-width: 991.98px) {
  .dash-nav {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1070;
  }
  .dash-nav.mobile-show {
    display: block;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      0deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(48, 142, 226, 1) 76%
    );
  }
}
.dash-nav header {
  min-height: 84px;
  padding: 8px 27px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.dash-nav header .menu-toggle {
  display: none;
  margin-right: auto;
}
@media (max-width: 991.98px) {
  .dash-nav header .menu-toggle {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}
.dash-nav header .spur-logo {
  margin-right: auto;
  padding-right: 42px;
  transition: opacity 0.3s;
}
.dash-nav header .spur-logo:hover {
  opacity: 0.7;
}
.dash-nav a {
  color: #515151;
}
.dash-nav a:hover {
  text-decoration: none;
}
.dash-nav.dash-nav-dark {
}
.dash-nav.dash-nav-dark a {
  color: #fff;
}
.spur-logo {
  font-size: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #515151;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.spur-logo:focus,
.spur-logo:active,
.spur-logo:hover {
  color: blue;
  text-decoration: none;
}
.spur-logo i {
  color: #fff;
  font-size: 27px;
  margin-right: 10px;
}

.dash-nav-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 20px;
  display: block;
}

.dash-nav-item {
  min-height: 56px;
  padding: 8px 20px 8px 70px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: 0.02em;
}
.dash-nav-item i {
  width: 36px;
  font-size: 19px;
  margin-left: -40px;
}
.dash-nav-dark .dash-nav-item:hover {
  background: rgba(255, 255, 255, 0.04);
}

.dash-nav-dropdown {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.dash-nav-dark .dash-nav-dropdown.show {
  background: rgba(255, 255, 255, 0.04);
}
.dash-nav-dropdown.show > .dash-nav-dropdown-toggle {
  font-weight: bold;
}
.dash-nav-dropdown.show > .dash-nav-dropdown-toggle:after {
  -webkit-transform: none;
  -o-transform: none;
  transform: none;
}
.dash-nav-dropdown.show > .dash-nav-dropdown-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.dash-nav-dropdown.show .dash-nav-dropdown.show {
  background: none;
}

.dash-nav-dropdown-toggle:after {
  content: '';
  margin-left: auto;
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(81, 81, 81, 0.8);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
.dash-nav-dark .dash-nav-dropdown-toggle:after {
  border-top-color: rgba(255, 255, 255, 0.72);
}

.dash-nav-dropdown-menu {
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.dropdown-menu-right {
  background: #308ee22e;
  padding: 5px 15px;
  box-shadow: rgba(48, 142, 226, 0.4) 0px 2px 4px,
    rgba(48, 142, 226, 0.3) 0px 7px 13px -3px,
    rgba(48, 142, 226, 0.2) 0px -3px 0px inset;
  border: solid 1px rgba(48, 142, 226, 0.7);
}
.dash-nav-dropdown-menu
  > .dash-nav-dropdown
  .dash-nav-dropdown-menu
  .dash-nav-dropdown-item {
  padding-left: 87px;
}

.dropdown-item {
  cursor: pointer;
  transition: padding-left 0.2s;
  margin-bottom: 5px;
  .fa-sign-out {
    font-size: 15px;
  }
}
.dropdown-item:hover {
  background: transparent;
  padding-left: 5px;
}
.dash-nav-dropdown-item {
  min-height: 40px;
  padding: 8px 20px 8px 70px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.dash-nav-dropdown-item:hover {
  background: rgba(255, 255, 255, 0.04);
}
.menu-toggle,
.tools-item {
  position: relative;
  width: 42px;
  height: 42px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #515151;
}
.menu-toggle:hover,
.tools-item:hover,
.menu-toggle:active,
.tools-item:active,
.menu-toggle:focus,
.tools-item:focus {
  text-decoration: none;
  color: #515151;
}
.menu-toggle i,
.tools-item i {
  font-size: 20px;
  color: #fff;
  transition: opacity 0.3s;
}
.menu-toggle i:hover,
.tools-item i:hover {
  opacity: 0.7;
}

.tools-item .tools-item-count {
  width: 15px;
  height: 15px;
  border-radius: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  top: 3px;
  right: 3px;
  font-style: normal;
  font-size: 11px;
  background: #ff5a00;
  color: #fff;
}

.dash-toolbar {
  min-height: 84px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 8px 27px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  transition: 0.4s ease-in-out;
  background: transparent;
}
@media (min-width: 992px) {
  .dash-toolbar {
    left: 195px;
  }
  .dash-compact .dash-toolbar {
    left: 0;
  }
  .dashleft_zero {
    left: 0px !important;
  }
}

.tools {
  margin-left: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.tools a {
  color: #ffffff;
}
.sidebar-nav {
  height: calc(100vh - 100px);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  margin-top: 85px;
  border-radius: 5px;
  -webkit-transition: 0.4s cubic-bezier(0.685, 0.0473, 0.346, 1);
  transition: 0.4s cubic-bezier(0.685, 0.0473, 0.346, 1);
  @media (min-width: 991px) {
    width: 230px;
    margin-left: 20px;

    background: rgb(238, 174, 202);
    background: linear-gradient(
      0deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(48, 142, 226, 1) 76%
    );
  }
  @media (max-width: 991px) {
  }
}
.sidebar-wrapper {
  width: 100%;
  min-height: 100%;
  max-height: calc(100vh - 705px);
  z-index: 4;
  position: relative;
  overflow: auto;
}
.sidebar-logo {
  position: relative;
  padding: 0.5rem 0.7rem;
  z-index: 4;
}

.logo-normal {
  display: block;
  opacity: 1;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  i {
    // transition: transform .3s linear;
    animation: animateHand 3s ease infinite alternate;
  }
}
@keyframes animateHand {
  0% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(15deg);
  }
}
.sidebar-logo::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 15px;
  height: 1px;
  width: calc(100% - 30px);
  background: hsla(0, 0%, 100%, 0.5);
}
.simple-text {
  padding: 0.5rem 0;
  display: block;
  white-space: nowrap;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  line-height: 30px;
  overflow: hidden;
}

.logo-mini {
  opacity: 1;
  float: left;
  width: 34px;
  text-align: center;
  margin-left: 12px;
  margin-right: 10px;
}
.logo-img {
  width: 32px;
  display: inline-block;
  height: 32px;
  margin-left: 0;
  margin-right: 15px;
  background: #308ee2;
  border-radius: 32px;
  text-align: center;
  img {
    max-width: 21px;
    vertical-align: middle;
  }
}
</style>
