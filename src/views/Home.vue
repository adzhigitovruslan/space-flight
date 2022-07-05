<template>
  <div id="home" class="home">
    <Planet @toShowLogin="toShowLogin" />
    <router-view />
    <blockquote class="blockquote home__title">
      <footer class="blockquote-footer">Click on the planet to login</footer>
    </blockquote>
    <div class="home__picture">
      <img alt="spaceman" src="../assets/spaceman.png" />
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import Planet from '@/components/Planet.vue'
import messages from '@/utils/messages'

export default {
  name: 'Home',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      starGeo: null,
      star: null,
      stars: null,
    }
  },
  components: {
    Planet,
  },
  methods: {
    toShowLogin() {
      this.$router.push({ name: 'login' })
    },
    init() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      this.camera.position.z = 150
      this.camera.rotation.x = Math.PI / 2

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)

      this.starGeo = new THREE.Geometry()
      for (let i = 0; i < 6000; i++) {
        this.star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        )
        this.star.velocity = 0
        this.star.acceleration = 0.0001
        this.starGeo.vertices.push(this.star)
      }
      this.sprite = new THREE.TextureLoader().load('/star.png')
      this.starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: this.sprite,
      })
      this.stars = new THREE.Points(this.starGeo, this.starMaterial)
      this.scene.add(this.stars)
    },
    animate: function () {
      this.starGeo.vertices.forEach((p) => {
        p.velocity += p.acceleration
        p.y -= p.velocity
        if (p.y < -200) {
          p.y = 200
          p.velocity = 0
        }
      })
      this.starGeo.verticesNeedUpdate = true
      this.stars.rotation.y += 0.001
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animate)
    },
    onWindowResize() {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
    },
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Something goes wrong')
    },
  },
  created() {
    this.init()
    window.addEventListener('resize', this.onWindowResize, false)
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize, false)
  },
  mounted() {
    document.getElementById('home').appendChild(this.renderer.domElement)
    this.animate()
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &__title {
    position: absolute;
    left: 8%;

    font-size: calc(18px + (18 - 12) * ((100vw - 320px) / (1440 - 320)));

    @media (min-width: 320px) {
      bottom: 150px;
    }
    @media (min-width: 375px) {
      bottom: 180px;
    }
    @media (min-width: 500px) {
      bottom: 210px;
    }
    @media (min-width: 1024px) {
      bottom: 250px;
    }
    @media (min-width: 1440px) {
      bottom: 300px;
    }
    @media (min-width: 1920px) {
      bottom: 350px;
    }
  }
}
.home__picture {
  position: relative;
  bottom: 0;
  left: 0;
  height: 300px;
  width: 100%;
  // padding: 0 0 58% 0;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: 350px;
  }
  @media (min-width: 1440px) {
    height: 400px;
  }
  @media (min-width: 1920px) {
    height: 450px;
  }
  @media (max-width: 500px) {
    height: 250px;
  }
  @media (max-width: 375px) {
    height: 200px;
  }
}
img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
  @media (min-width: 1024px) {
    object-fit: fill;
  }
}
</style>
