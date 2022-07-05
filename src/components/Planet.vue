<template>
  <div id="monitor" class="page__monitor">
    <div class="page__circle" @click="toShowLogin"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default {
  name: 'planet',
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      renderer: null,
    }
  },
  methods: {
    loadBeforeMount() {
      this.scene = new THREE.Scene()
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        1 // intensity
      )
      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0)
      mainLight.position.set(10, 10, 10)
      this.scene.add(ambientLight, mainLight)
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.gammaFactor = 2.2
      this.renderer.outputEncoding = THREE.sRGBEncoding
      this.renderer.physicallyCorrectLights = true
      const loader = new GLTFLoader()
      loader.load(
        '/three-assets/model2/scene.gltf',
        (gltf) => {
          this.scene.add(gltf.scene)
        },
        undefined,
        undefined
      )
    },
    init() {
      this.container = document.getElementById('monitor')
      // add camera
      const fov = 60 // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight
      const near = 0.1 // the near clipping plane
      const far = 1000 // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.set(0, 0, 5)
      this.camera = camera
      // create scene

      // add controls
      // this.controls = new OrbitControls(this.camera, this.container);
      // create renderer
      this.container.appendChild(this.renderer.domElement)
      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      )
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
      this.scene.rotation.z = 2.3
      this.scene.rotation.y += 0.007
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
    toShowLogin() {
      this.$emit('toShowLogin')
    },
  },
  created() {
    this.loadBeforeMount()
    window.addEventListener('resize', this.onWindowResize, false)
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize, false)
  },
  mounted() {
    this.init()
    this.animate()
  },
}
</script>

<style lang="scss" scoped>
.page__monitor {
  height: 200px;
  width: 300px;
  position: relative;
  z-index: 2;
}
.page__circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
}
</style>
