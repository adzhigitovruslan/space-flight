<template>
  <div class="page__user user">
    <main @scroll="scrollHandler" class="page__one parallax">
      <div id="rocket" class="user__rocket rocket">
        <img
          class="rocket__ship"
          :src="require('@/assets/rocket.svg')"
          alt="rocket_ship"
        />
        <img
          class="rocket__fire"
          :src="require('@/assets/fire.svg')"
          alt="fire"
        />
      </div>
      <div class="container">
        <div id="title_opacity" class="user__main">
          <div class="user__container">
            <div id="welcome" class="user__title">Mars</div>
            <div class="user__subtitle">
              <p>let your journey begin</p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="isVisible" id="scrollme">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </main>
    <section id="route" class="page two">
      <div class="container">
        <div class="two__main main-two row">
          <div class="row w-100 mars_tl slide-up">
            <div id="marstl" class="col-md-12">
              <h2 class="main-two__header">Mars is the best place</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mars_tl">
              <div class="main-two__logo">
                <img src="@/assets/user-two/mars1.png" alt="mars" />
              </div>
              <h2 class="main-two__text">
                If you want to discover life on Mars
              </h2>
            </div>
            <div class="col-md-4 mars_tl">
              <div class="main-two__logo">
                <img src="@/assets/user-two/mars2.png" alt="mars" />
              </div>
              <h2 class="main-two__text">
                If you would like to be an astronaut
              </h2>
            </div>
            <div class="col-md-4 mars_tl">
              <div class="main-two__logo">
                <img src="@/assets/user-two/mars3.png" alt="mars" />
              </div>
              <h2 class="main-two__text">If you are tired of life on Earth</h2>
            </div>
          </div>
          <div class="row w-100 two__route">
            <div class="col-md-12 mars_tl slide-down">
              <h2 class="two__route-header">The route</h2>
            </div>
            <div class="col-md-12 row__planets">
              <div class="row__main-stop space-stop">
                <img
                  :src="require('@/assets/takeoff.jpg')"
                  alt="spaceshuttle"
                />
                <p>Departure</p>
              </div>
              <div class="row__first-stop space-stop">
                <img
                  :src="require('@/assets/space_orbit.jpg')"
                  alt="spaceshuttle"
                />
                <p>The earth's orbit</p>
              </div>
              <div class="row__second-stop space-stop">
                <img
                  :src="require('@/assets/mars_orbit.jpg')"
                  alt="mars_orbit"
                />
                <p>The mars' orbit</p>
              </div>
              <div class="row__third-stop space-stop">
                <img
                  :src="require('@/assets/mars_base.jpg')"
                  alt="spaceshuttle"
                />
                <p>Arrival</p>
              </div>

              <div class="row__earth mars_tl">
                <img
                  class="row__img"
                  :src="require('@/assets/earth_left.png')"
                  alt=""
                />
              </div>
              <div class="row__mars">
                <img
                  class="row__img"
                  :src="require('@/assets/mars_right.png')"
                  alt=""
                />
              </div>
              <svg
                id="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 1200"
              >
                <path
                  class="theLine"
                  d="M 0,5 Q 400 200 200 400 T 200 800 Q 350 950 600 900"
                  fill="none"
                  stroke="white"
                  stroke-width="5px"
                />

                <circle class="ball ball02" r="12" cx="260" cy="280"></circle>
                <circle class="ball ball03" r="12" cx="106" cy="612"></circle>
                <circle class="ball ball04" r="12" cx="600" cy="900"></circle>
              </svg>
              <div class="ball ball01">
                <img :src="require('@/assets/spacemanpointer.png')" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="details" class="page three">
      <div class="container">
        <div class="three__details">
          <h1 class="three__route-header mars_tl">
            <span class="block-header slide-right">Travel</span>&nbsp;<span
              class="block-header slide-left"
            >
              details</span
            >
          </h1>
          <div class="row">
            <div class="col-md-4 mars_tl">
              <div class="main-two__logo">
                <img
                  :src="require('@/assets/user-two/mars1.png')"
                  alt="mars-picture"
                />
              </div>
              <h2 class="main-two__text">Travel time</h2>
              <small>
                It'll take 7-8 months depending on a relative positioning of
                planets
              </small>
            </div>
            <div class="col-md-4 mars_tl">
              <div class="main-two__logo">
                <img
                  :src="require('@/assets/user-three/earth3.png')"
                  alt="mars-picture"
                />
              </div>
              <h2 class="main-two__text">Connection to the earth</h2>
              <small
                >Internet access is restricted to a few sites. Data You may have
                failure sending message</small
              >
            </div>
            <div class="col-md-4 mars_tl">
              <div class="main-two__logo">
                <img
                  :src="require('@/assets/user-two/mars2.png')"
                  alt="mars-picture"
                />
              </div>
              <h2 class="main-two__text">Time on the planet</h2>
              <small
                >The Martian day is 40 minutes longer than the Earth day. At the
                same time the Martian year is 687 days so who stay on Mars will
                be 2 times younger
              </small>
            </div>
            <div class="col-md-4 mars_tl">
              <div class="main-two__logo">
                <img
                  :src="require('@/assets/user-three/moon.png')"
                  alt="moon"
                />
              </div>
              <h2 class="main-two__text">Rooms</h2>
              <small
                >All travelers have their own room with a bathroom. Working area
                is divided into segments to work both alone and in team</small
              >
            </div>
            <div class="col-md-4 mars_tl">
              <div class="main-two__logo">
                <img
                  :src="require('@/assets/user-two/mars3.png')"
                  alt="mars-picture"
                />
              </div>
              <h2 class="main-two__text">Food</h2>
              <small
                >The main diet consists of vegetables. There are shared kitchens
                available to cook and a buffet branch
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page four">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 id="header-visit" class="header-slider mars_tl animation-y50">
              Visit the Martian Centre for Science
            </h1>
          </div>
        </div>
        <div class="row mars_tl">
          <div class="col-md-6 animation-x200">
            <p class="main-two__text">
              One of the most interesting and cognitive places at the moment is
              the <span style="color: #80ced6">Ilon Mask</span> centre for
              science. It has the latest development in the areas of technology,
              biology, microbioloby etc.
            </p>
          </div>
          <div id="science" class="col-md-6 animation-200x"></div>
        </div>
        <div id="slider" class="row mars_tl animation-x200">
          <carousel-3d autoplay height="200px">
            <slide class="slide" :index="0">
              <img :src="require('@/assets/lab/lab1.jpg')" alt="" />
            </slide>
            <slide class="slide" :index="1">
              <img :src="require('@/assets/lab/lab2.jpg')" alt="" />
            </slide>
            <slide class="slide" :index="2">
              <img :src="require('@/assets/lab/lab3.jpg')" alt="" />
            </slide>
            <slide class="slide" :index="3">
              <img :src="require('@/assets/lab/lab4.jpg')" alt="" />
            </slide>
            <slide class="slide" :index="4">
              <img :src="require('@/assets/lab/lab5.jpg')" alt="" />
            </slide>
          </carousel-3d>
        </div>
      </div>
    </section>
    <space-price></space-price>
    <space-form></space-form>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import SpacePrice from '@/components/SpacePrice'
import SpaceForm from '@/components/SpaceForm'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default {
  name: 'space-flight',
  data() {
    return {
      isVisible: true,
      container: null,
      scene: null,
      camera: null,
      renderer: null,
    }
  },
  components: {
    SpacePrice,
    SpaceForm,
  },
  methods: {
    loadBeforeMount() {
      this.scene = new THREE.Scene()
      this.scene.position.x = -50
      this.scene.position.y = 150
      this.scene.position.z = 50
      this.scene.rotation.x = 0.3
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        1 // intensity
      )
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0)
      mainLight.position.set(10, 10, 10)
      this.scene.add(ambientLight, mainLight)
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.gammaFactor = 2.2
      this.renderer.outputEncoding = THREE.sRGBEncoding
      this.renderer.physicallyCorrectLights = true
      const loader = new GLTFLoader()
      loader.load(
        '/three-assets/centre.glb',
        (gltf) => {
          this.scene.add(gltf.scene)
        },
        undefined,
        undefined
      )
    },
    init() {
      this.container = document.getElementById('science')
      // add camera
      const fov = 90 // Field of view
      const aspect = this.container.innerWidth / this.container.innerHeight
      const near = 1 // the near clipping plane
      const far = 1000 // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.y = 40
      camera.position.x = 50
      camera.position.z = 700

      this.camera = camera
      this.container.appendChild(this.renderer.domElement)
      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect =
        this.container.innerWidth / this.container.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(
        this.container.innerWidth,
        this.container.innerHeight
      )
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
      this.scene.rotation.y += 0.007
    },
    scrollHandler() {
      this.isVisible = window.scrollY > 300 ? false : true
    },
    showTitle() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#title_opacity',
          scrub: true,
          start: 'top 15%',
          end: 'top 0',
        },
      })
      tl.to('#title_opacity', {
        autoAlpha: 0,
        duration: 2,
      })
      gsap.from('#title_opacity', {
        x: -700,
        duration: 2,
      })
      const r = gsap.timeline()

      r.to('#rocket', {
        autoAlpha: 1,
        x: -450,
        y: -450,
        duration: 50,
      })
    },
    svgPath() {
      gsap.defaults({ ease: 'none' })

      const pulses = gsap.timeline({
        defaults: {
          scale: 2,
          autoAlpha: 1,
          transformOrigin: 'center',
          ease: 'elastic(2.5, 1)',
        },
      })
      pulses.to('.row__main-stop', {}, 0.1)
      pulses.to('.ball02, .row__first-stop', {}, 1.12)
      pulses.to('.ball03, .row__second-stop', {}, 2.2)
      pulses.to('.ball04, .row__third-stop', {}, 3.9)

      const main = gsap.timeline({
        scrollTrigger: {
          trigger: '#svg',
          scrub: true,
          start: 'top 70%',
          end: 'bottom bottom',
        },
      })
      main.to('.ball01', { autoAlpha: 1, duration: 0.05 })
      main.from('.theLine', { autoAlpha: 0, duration: 2 }, 0).to(
        '.ball01',
        {
          motionPath: {
            path: '.theLine',
            align: '.theLine',
            autoRotate: true,
            alignOrigin: [0.5, 0.6],
          },
          duration: 4,
        },
        0
      )
      main.add(pulses, 0)
    },
    allText() {
      gsap.utils.toArray('.slide-down').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            toggleActions: 'play none none none',
          },
          y: 30,
          duration: 2,
        })
      })
      gsap.utils.toArray('.slide-up').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            toggleActions: 'play none none none',
          },
          y: -30,
          duration: 2,
        })
      })
      gsap.utils.toArray('.slide-right').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            toggleActions: 'play none none none',
          },
          x: -100,
          duration: 2,
        })
      })
      gsap.utils.toArray('.slide-left').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            toggleActions: 'play none none none',
          },
          x: 100,
          duration: 2,
        })
      })
      gsap.from('.row__earth', {
        scrollTrigger: {
          trigger: '.row__earth',
          toggleActions: 'play none none none',
        },
        y: -50,
        x: -50,
        duration: 2,
      })
      gsap.from('.row__mars', {
        scrollTrigger: {
          trigger: '.row__mars',
          toggleActions: 'play none none none',
        },
        y: -50,
        x: -50,
        duration: 2,
      })
      gsap.utils.toArray('.mars_tl').forEach((section) => {
        gsap.to(section, {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=10%',
            scrub: true,
            end: 'top bottom-=25%',
          },
        })
      })
      gsap.utils.toArray('.animation-x200').forEach((section) => {
        gsap.from(section, {
          x: -200,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 100%',
            end: 'top 70%',
          },
        })
      })
      gsap.utils.toArray('.animation-200x').forEach((elem) => {
        gsap.from(elem, {
          x: 200,
          scrollTrigger: {
            trigger: elem,
            scrub: true,
            start: 'top 100%',
            end: 'top 70%',
          },
        })
      })
      gsap.utils.toArray('.animation-y50').forEach((elem) => {
        gsap.from(elem, {
          y: -50,
          scrollTrigger: {
            trigger: elem,
            scrub: true,
            start: 'top 95%',
            end: 'top 70%',
          },
        })
      })
    },
    onWindowResize() {
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      )
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight
      this.camera.updateProjectionMatrix()
    },
  },
  created() {
    this.loadBeforeMount()
    window.addEventListener('scroll', this.scrollHandler)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler)
    window.removeEventListener('resize', this.onWindowResize, false)
  },
  mounted() {
    this.showTitle()
    this.init()
    this.svgPath()
    this.allText()
    this.animate()

    window.addEventListener('resize', this.onWindowResize, false)
  },
}
</script>

<style lang="scss" scoped>
#slider {
  .slide {
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }
  margin-top: 50px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
}
#science {
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    height: 180px;
    margin-top: 40px;
  }
}
.header-slider {
  margin: 100px 0 50px 0;
  font-size: 30px;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
  @media (min-width: 1400px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
}
.block-header {
  display: inline-block;
}
.mars_tl {
  visibility: hidden;
}
#svg {
  max-width: 600px;
  overflow: visible;
  margin-top: 20vh;
  // position: absolute;
  // right: 280px;
  // bottom: 165px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 640px) {
    max-width: 300px;
  }
  @media (max-width: 500px) {
    max-width: 250px;
  }
  @media (max-width: 450px) {
    max-width: 220px;
  }
  @media (max-width: 400px) {
    max-width: 200px;
  }
  @media (max-width: 375px) {
    max-width: 150px;
  }
}
.ball {
  fill: #ffffff;
  visibility: hidden;
  z-index: 15;
  img {
    width: 150px;
    height: 150px;
    // @media (min-width: 1200px) {
    //   width: 250px;
    // height: 250px;
    // }
  }
}
.ball01 {
  position: relative;
}
.two__route {
  position: relative;
}
.space-stop {
  visibility: hidden;
}
.row {
  &__main-stop {
    width: 50px;
    height: 50px;

    position: absolute;

    border: 1px solid #ffffff;
    border-radius: 50%;
    // overflow: hidden;
    p {
      font-size: calc(6px + (14 - 6) * ((100vw - 320px) / (1200 - 320)));
      position: absolute;
      top: 50%;
      left: 125%;
      transform: translateY(-50%);
    }
    @media (min-width: 1400px) {
      right: 50%;
      bottom: 1470px;
    }
    @media (max-width: 1400px) {
      right: 55%;
      bottom: 1470px;
    }
    @media (max-width: 1200px) {
      left: 130px;
      bottom: 1550px;
    }
    @media (max-width: 1100px) {
      bottom: 1520px;
      left: 120px;
    }
    @media (max-width: 1024px) {
      bottom: 1460px;
      left: 130px;
    }
    @media (max-width: 992px) {
      bottom: 1460px;
      left: 75px;
    }
    @media (max-width: 820px) {
    }
    @media (max-width: 768px) {
      bottom: 1060px;
      left: 55px;
      width: 40px;
      height: 40px;
    }
    @media (max-width: 640px) {
      bottom: 850px;
      left: 75px;
      width: 30px;
      height: 30px;
    }
    @media (max-width: 550px) {
      left: 14%;
      bottom: 850px;
    }
    @media (max-width: 500px) {
      left: 60px;
      bottom: 740px;

      width: 25px;
      height: 25px;

      letter-spacing: 0.5px;
    }
    @media (max-width: 450px) {
      left: 55px;
      bottom: 680px;
      width: 25px;
      height: 25px;
    }
    @media (max-width: 400px) {
      left: 45px;
      bottom: 635px;
      width: 22px;
      height: 22px;

      letter-spacing: 0px;
    }
    @media (max-width: 375px) {
      left: 45px;
      bottom: 540px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__first-stop {
    width: 50px;
    height: 50px;

    position: absolute;
    border: 1px solid #ffffff;
    border-radius: 50%;
    // overflow: hidden;
    p {
      font-size: calc(6px + (14 - 6) * ((100vw - 320px) / (1200 - 320)));
      position: absolute;
      top: 50%;
      left: 125%;
      transform: translateY(-50%);
      text-align: left;
      width: 200px;
      @media (max-width: 500px) {
        letter-spacing: 0.5px;
      }
      @media (max-width: 400px) {
        letter-spacing: 0px;
      }
      @media (max-width: 375px) {
        width: 30px;
      }
    }
    @media (min-width: 1400px) {
      right: 38%;
      bottom: 1040px;
    }
    @media (max-width: 1399px) {
      right: 38%;
      bottom: 1040px;
    }
    @media (max-width: 1200px) {
      right: 38%;
    }
    @media (max-width: 992px) {
      right: 35%;
    }
    @media (max-width: 768px) {
      bottom: 740px;
      width: 40px;
      height: 40px;
    }
    @media (max-width: 640px) {
      right: 35%;
      bottom: 593px;
      width: 30px;
      height: 30px;
    }
    @media (max-width: 550px) {
      bottom: 593px;
      right: 37%;
    }
    @media (max-width: 500px) {
      bottom: 520px;
      width: 25px;
      height: 25px;
    }
    @media (max-width: 450px) {
      bottom: 480px;
      width: 25px;
      height: 25px;
    }
    @media (max-width: 400px) {
      bottom: 445px;
      width: 22px;
      height: 22px;
    }
    @media (max-width: 375px) {
      bottom: 370px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__second-stop {
    width: 50px;
    height: 50px;

    position: absolute;

    border: 1px solid #ffffff;
    border-radius: 50%;

    z-index: 5;
    @media (min-width: 1400px) {
      right: 50%;
      bottom: 710px;
    }
    @media (max-width: 1400px) {
      right: 50%;
      bottom: 710px;
    }
    @media (max-width: 1200px) {
      right: 50%;
      bottom: 715px;
    }
    @media (max-width: 992px) {
      right: 50%;
    }
    @media (max-width: 768px) {
      right: 50%;
      bottom: 530px;
      width: 40px;
      height: 40px;
    }
    @media (max-width: 640px) {
      bottom: 435px;
      right: 50%;
      width: 30px;
      height: 30px;
    }
    @media (max-width: 550px) {
      right: 50%;
    }
    @media (max-width: 500px) {
      bottom: 390px;
      width: 25px;
      height: 25px;
    }
    @media (max-width: 450px) {
      bottom: 360px;
    }
    @media (max-width: 400px) {
      bottom: 340px;
      width: 22px;
      height: 22px;
    }
    @media (max-width: 375px) {
      bottom: 291px;
      left: 8%;
    }
    p {
      font-size: calc(6px + (14 - 6) * ((100vw - 320px) / (1200 - 320)));
      position: absolute;
      top: 50%;
      left: 125%;
      transform: translateY(-50%);
      text-align: left;
      width: 200px;
      @media (max-width: 768px) {
        top: 50%;
        transform: translateY(-50%);
        right: 10%;
      }
      @media (max-width: 640px) {
        width: 85px;
        position: absolute;
        top: 50%;
        left: 125%;
        transform: translateY(-50%);
        text-align: left;
      }
      @media (max-width: 500px) {
        letter-spacing: 0.5px;
      }
      @media (max-width: 400px) {
        letter-spacing: 0px;
      }

      @media (max-width: 375px) {
        top: -80%;
        transform: translateY(40%);
        left: 130%;
        width: 30px;
      }
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__third-stop {
    width: 50px;
    height: 50px;

    position: absolute;

    border: 1px solid #ffffff;
    border-radius: 50%;
    z-index: 3;
    p {
      font-size: calc(6px + (14 - 6) * ((100vw - 320px) / (1200 - 320)));
      position: absolute;
      top: 50%;
      left: 125%;
      transform: translateY(-50%);
      text-align: left;
      @media (max-width: 1024px) {
        top: -65%;
        transform: translateY(40%);
        left: 0;
      }
      @media (max-width: 640px) {
        top: -90%;
        transform: translateY(40%);
        left: -10%;
      }
      @media (max-width: 500px) {
        letter-spacing: 0.5px;
      }
      @media (max-width: 400px) {
        left: -18%;
        letter-spacing: 0px;
      }
    }
    @media (min-width: 1400px) {
      right: 25%;
      bottom: 330px;
    }
    @media (max-width: 1400px) {
      right: 25%;
      bottom: 330px;
    }
    @media (max-width: 1200px) {
      right: 21%;
      bottom: 330px;
    }
    @media (max-width: 1100px) {
      right: 21%;
      bottom: 330px;
    }
    @media (max-width: 1024px) {
      right: 21%;
      bottom: 140px;
    }
    @media (max-width: 992px) {
      right: 8%;
      bottom: 160px;
    }
    @media (max-width: 820px) {
      right: 10%;
      bottom: 180px;
    }
    @media (max-width: 768px) {
      right: 10%;
      bottom: 150px;
      width: 40px;
      height: 40px;
    }
    @media (max-width: 640px) {
      right: 18%;
      bottom: 130px;
      width: 30px;
      height: 30px;
    }
    @media (max-width: 560px) {
    }
    @media (max-width: 550px) {
    }

    @media (max-width: 500px) {
      right: 18%;
      bottom: 120px;

      width: 25px;
      height: 25px;
    }
    @media (max-width: 450px) {
      right: 20%;
      bottom: 120px;
    }
    @media (max-width: 400px) {
      right: 20%;

      width: 22px;
      height: 22px;
    }
    @media (max-width: 375px) {
      bottom: 100px;
      right: 20%;
    }
    @media (max-width: 320px) {
      bottom: 100px;
      right: 23%;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__planets {
    position: relative;
  }
  &__earth {
    position: absolute;
    width: 500px;
    height: 500px;
    bottom: 1100px;
    margin-top: 50px;
    z-index: 2;
    @media (max-width: 1400px) {
      width: 450px;
      height: 450px;
      bottom: 1100px;
    }
    @media (max-width: 1200px) {
      width: 400px;
      height: 400px;
      bottom: 1100px;
      left: -50px;
    }
    @media (max-width: 1100px) {
      width: 350px;
      height: 350px;
      bottom: 1120px;
      left: -30px;
    }
    @media (max-width: 1024px) {
      width: 320px;
      height: 320px;
      bottom: 1100px;
      left: -10px;
    }
    @media (max-width: 992px) {
      width: 280px;
      height: 280px;
      bottom: 1130px;
      left: -40px;
    }
    @media (max-width: 820px) {
      width: 250px;
      height: 250px;
      bottom: 1170px;
      left: -20px;
    }
    @media (max-width: 768px) {
      width: 220px;
      height: 220px;
      bottom: 820px;
      left: -40px;
    }
    @media (max-width: 640px) {
      width: 180px;
      height: 180px;
      bottom: 650px;
      left: 0px;
    }
    @media (max-width: 500px) {
      width: 150px;
      height: 150px;
      bottom: 570px;
      left: 0px;
    }
    @media (max-width: 450px) {
      width: 135px;
      height: 135px;
      bottom: 520px;
      left: 0px;
    }
    @media (max-width: 400px) {
      width: 120px;
      height: 120px;
      bottom: 500px;
      left: 0px;
    }
    @media (max-width: 375px) {
      width: 120px;
      height: 120px;
      bottom: 400px;
      left: 0px;
    }
  }
  &__mars {
    position: absolute;
    width: 500px;
    height: 500px;
    right: 50px;
    bottom: 200px;
    z-index: 2;
    @media (max-width: 1400px) {
      width: 450px;
      height: 450px;
    }
    @media (max-width: 1200px) {
      width: 400px;
      height: 400px;
      bottom: 250px;
      right: 20px;
    }
    @media (max-width: 1100px) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: 1024px) {
      width: 320px;
      height: 320px;
      bottom: 270px;
    }
    @media (max-width: 992px) {
      width: 280px;
      height: 280px;
      bottom: 300px;
      right: -50px;
    }
    @media (max-width: 820px) {
      width: 250px;
      height: 250px;
      bottom: 320px;
      right: -20px;
    }
    @media (max-width: 768px) {
      width: 220px;
      height: 220px;
      right: -30px;
      bottom: 250px;
    }
    @media (max-width: 640px) {
      width: 180px;
      height: 180px;
      right: 20px;
      bottom: 220px;
    }
    @media (max-width: 500px) {
      width: 150px;
      height: 150px;
      bottom: 200px;
    }
    @media (max-width: 400px) {
      width: 135px;
      height: 135px;
      bottom: 190px;
    }
    @media (max-width: 375px) {
      width: 120px;
      height: 120px;
      bottom: 160px;
      right: 20px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
  }
}
#scrollme {
  position: relative;
  left: 50%;
  bottom: 70px;
  width: 30px;
  height: 20px;
  margin: 0 0 0 0;
  animation: scrollme 3s ease infinite;
  animation-delay: 2s;
  transition: 0.2s ease;
  z-index: 10;
  i {
    font-size: 35px;
  }
}

.rocket {
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-40%, -50%) rotate(-50deg);
  width: 30px;
  height: 30px;
  img {
    width: 30px;
  }
  &__ship {
  }

  &__fire {
    animation: bigger 1s ease infinite;
  }
}

.container {
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
.page {
  &__user {
    background: #0b0b0b;
    margin-top: -87px;
  }
  &__one {
    background-image: url('~@/assets/mars.png');
    padding: 15px;
    box-shadow: 2px -30px 48px 34px rgba(18, 18, 18, 0.6) inset;
  }
  padding: 50px 15px 15px 15px;
  overflow: hidden;
  position: relative;
  // box-shadow: 0px 30px 20px 0px rgba(0, 0, 0, 0.4) inset;

  .main-two {
    & .row {
      text-align: center;
    }
    & .row:first-child {
      margin-bottom: 50px;
    }
    & .row:nth-child(2) {
      > div {
        transition: 0.2s ease;
        cursor: pointer;
        @media (max-width: 768px) {
          margin-bottom: 40px;
        }
      }
      > div:hover {
        transform: translateY(-5px);
      }
    }
    &__text {
      font-size: calc(13px + (20 - 13) * ((100vw - 320px) / (1200 - 320)));
      padding: 0 10px;
      line-height: 2;
      @media (min-width: 1200px) {
        font-size: 20px;
      }
    }
    &__logo {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      margin-bottom: 30px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    &__header {
      font-size: 30px;
      margin-bottom: 50px;
      text-align: center;
      @media (min-width: 1024px) {
        font-size: 40px;
      }
      @media (min-width: 1400px) {
        font-size: 50px;
      }
      @media (max-width: 768px) {
        font-size: 25px;
      }
    }
  }
}
.user {
  .two {
    @media (min-width: 414px) {
      margin-bottom: -100px;
    }
    @media (min-width: 626px) {
      margin-bottom: -140px;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__main {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%);
    @media (max-width: 550px) {
      left: 25%;
    }
  }
  &__title {
    font-size: calc(80px + (200 - 80) * ((100vw - 320px) / (1400 - 320)));
  }
  &__subtitle::before {
    content: ' ';
    width: calc(2px + (5 - 2) * ((100vw - 320px) / (1400 - 320)));
    top: 0;
    bottom: 0;
    left: -30px;
    position: absolute;
    border-radius: 10px;
    background: linear-gradient(180deg, #d63384, #0dcaf0);
    background-size: 200% 200%;
    animation: Animation 5s ease infinite;
  }

  &__subtitle {
    position: relative;
    p {
      position: relative;
      font-size: calc(18px + (60 - 18) * ((100vw - 320px) / (1400 - 320)));
      margin-bottom: 10px;
    }
  }
  .two {
    &__route {
      margin-top: 100px;
    }
    &__route-header {
      font-size: 30px;
      margin-bottom: 50px;
      @media (min-width: 1400px) {
        margin-bottom: 300px;
        font-size: 50px;
      }
      @media (min-width: 1024px) {
        font-size: 40px;
        margin-bottom: 150px;
      }
    }
  }
  .three {
    &__route-header {
      font-size: 30px;
      margin-bottom: 100px;
      @media (min-width: 1400px) {
        margin-bottom: 300px;
        font-size: 50px;
      }
      @media (min-width: 1024px) {
        font-size: 40px;
        margin-bottom: 150px;
      }
    }
  }
}
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  /* Move closer on z-axis by 1px */
  transform: translateZ(1px);
  width: 100%;
  overflow: hidden;
}
.three {
  &__details {
    text-align: left;
    .main-two__text {
      padding: unset;
    }
    .main-two__logo {
      margin: 0 0 30px 0;
    }
    small {
      opacity: 0.7;
      font-size: calc(10px + (15 - 10) * ((100vw - 320px) / (1200 - 320)));
      text-align: left;
      @media (min-width: 1200px) {
        font-size: 15px;
      }
    }
    h1 {
      text-align: center;
    }
    h2 {
      margin-bottom: 10px;
    }
    .row {
      > div {
        margin-bottom: 40px;
      }
    }
    .col-md-4 {
      padding: 0 10px;
    }
  }
}

@keyframes Animation {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}
@keyframes scrollme {
  0% {
    opacity: 1;
    transform: translate(0, 0px);
  }
  100% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}
@keyframes bigger {
  0% {
    transform: scale(0.9) rotate(180deg);
  }
  100% {
    transform: scale(1.1) rotate(180deg);
  }
}
</style>
