<template>
  <section class="flyer">
    <div class="container">
      <div class="mars_tl">
        <h1 class="flyer__header animation-y50">New Flyer ?</h1>
        <h3 class="flyer__subtitle slide-left">Choose your room:</h3>
      </div>

      <div class="row mars_tl">
        <div class="col-md-6 flyer__radio-btn slide-right">
          <div class="flyer__input-wrapper">
            <input
              class="flyer__input"
              type="radio"
              id="single"
              value="single"
              name="room"
              v-model="checkedRoom"
              @change="totalPrice"
            />
            <label class="flyer__label" for="single"></label>
            <label class="flyer__label-text" for="couple">
              Single: $12000
            </label>
          </div>
          <br />
          <div class="flyer__input-wrapper">
            <input
              class="flyer__input"
              type="radio"
              id="couple"
              value="couple"
              name="room"
              v-model="checkedRoom"
              @change="totalPrice"
            />
            <label class="flyer__label" for="couple"></label>
            <label class="flyer__label-text two" for="couple">
              Couple: $29000
            </label>
          </div>
        </div>
        <div class="col-md-6 slide-left">
          <div v-if="checkedRoom === 'single'" class="flyer__room-img">
            <img
              :src="require('@/assets/new-flyer/single-room.png')"
              alt="space-room"
            />
          </div>
          <div v-else-if="checkedRoom === 'couple'" class="flyer__room-img">
            <img
              :src="require('@/assets/new-flyer/couple-room.png')"
              alt="space-room"
            />
          </div>
        </div>
      </div>
      <h3 class="flyer__subtitle slide-right mars_tl">Choose your meal:</h3>
      <div class="row mars_tl">
        <div class="col-md-6 slide-right order2">
          <div v-if="checkedMeal === 'one'" class="flyer__room-img one">
            <img
              :src="require('@/assets/new-flyer/allday.png')"
              alt="space-room"
            />
          </div>
          <div v-else-if="checkedMeal === 'two'" class="flyer__room-img one">
            <img
              :src="require('@/assets/new-flyer/buffet.png')"
              alt="space-room"
            />
          </div>
        </div>
        <div class="col-md-6 flyer__radio-btn slide-left">
          <div class="flyer__input-wrapper">
            <input
              class="flyer__input"
              type="radio"
              id="one"
              value="one"
              name="one"
              v-model="checkedMeal"
              @change="totalPrice"
            />
            <label class="flyer__label" for="one"></label>
            <label class="flyer__label-text" for="one">
              Breakfast/Dinner: $10000
            </label>
          </div>
          <br />
          <div class="flyer__input-wrapper">
            <input
              class="flyer__input"
              type="radio"
              id="two"
              value="two"
              name="two"
              v-model="checkedMeal"
              @change="totalPrice"
            />
            <label class="flyer__label" for="two"></label>
            <label class="flyer__label-text two" for="two">
              All-day buffet: $19000
            </label>
          </div>
        </div>
      </div>
      <h3 class="flyer__subtitle slide-left mars_tl">Choose your shuttle:</h3>
      <div class="row mars_tl">
        <div class="col-md-6 flyer__radio-btn slide-right">
          <div class="flyer__input-wrapper">
            <input
              class="flyer__input"
              type="radio"
              id="checkedShuttle"
              value="checkedShuttle"
              name="checkedShuttle"
              v-model="checkedShuttle"
              @change="totalPrice"
            />
            <label class="flyer__label" for="checkedShuttle"></label>
            <label class="flyer__label-text" for="checkedShuttle">
              JX7 ( 2 months travel ): $1.040.000
            </label>
          </div>
          <br />
          <div class="flyer__input-wrapper">
            <input
              class="flyer__input"
              type="radio"
              id="checkedShuttle2"
              value="checkedShuttle2"
              name="checkedShuttle2"
              v-model="checkedShuttle"
              @change="totalPrice"
            />
            <label class="flyer__label" for="checkedShuttle2"></label>
            <label class="flyer__label-text two" for="checkedShuttle2">
              TO-20W ( 8 months travel ): $640.000
            </label>
          </div>
        </div>
        <div class="col-md-6 slide-left">
          <div
            v-if="checkedShuttle === 'checkedShuttle'"
            class="flyer__room-img shuttle"
          >
            <img
              :src="require('@/assets/new-flyer/shuttle1.png')"
              alt="space-room"
            />
          </div>
          <div
            v-else-if="checkedShuttle === 'checkedShuttle2'"
            class="flyer__room-img shuttle"
          >
            <img
              :src="require('@/assets/new-flyer/shuttle2.png')"
              alt="space-room"
            />
          </div>
        </div>
      </div>
      <h3 class="row flyer__subtitle cost mars_tl animation-y50">
        Total: <span class="flyer__total"> ${{ total | toFix }} </span> ( pay
        onboard / card or cash )
      </h3>
    </div>
  </section>
</template>

<script>
import toFix from '@/filters/toFix.js'

export default {
  name: 'space-price',
  data() {
    return {
      checkedRoom: 'single',
      checkedMeal: 'one',
      checkedShuttle: 'checkedShuttle',
    }
  },
  filters: {
    toFix,
  },
  methods: {
    totalPrice() {
      this.$store.dispatch('setPrice', this.total)
    },
    roomPrice() {
      if (this.checkedRoom === 'single') {
        return 12000
      } else if (this.checkedRoom === 'couple') {
        return 29000
      }
      return 12000
    },
    mealPrice() {
      if (this.checkedMeal === 'one') {
        return 10000
      } else if (this.checkedMeal === 'two') {
        return 19000
      }
      return 10000
    },
    shuttlePrice() {
      if (this.checkedShuttle === 'checkedShuttle') {
        return 1040000
      } else if (this.checkedShuttle === 'checkedShuttle2') {
        return 640000
      }
      return 1040000
    },
  },
  computed: {
    total() {
      return this.roomPrice() + this.mealPrice() + this.shuttlePrice()
    },
  },
  mounted() {
    this.totalPrice()
  },
}
</script>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.container {
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
.flyer {
  padding: 50px 15px 15px 15px;
  &__input-wrapper {
    position: relative;
  }
  &__header {
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
  &__subtitle {
    text-align: center;
    margin-bottom: 40px;
    font-size: calc(17px + (25 - 17) * ((100vw - 320px) / (1200 - 320)));
    &.cost {
      display: flex;
      justify-content: center;
    }
  }
  &__total {
    color: #63ff55;
    text-decoration: underline;
    display: inline-block;
  }
  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transition: all 0.1s linear;
  }
  &__label-text {
    position: absolute;
    left: 60px;
    top: -4px;
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1200 - 320)));
    &.two {
      top: -2px;
    }
  }
  &__input + label.flyer__label {
    position: relative;
    display: inline-flex;
    user-select: none;

    border-radius: 50%;
    align-items: center;
    background: #393a4b;

    width: calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));
    height: calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));

    margin-right: calc(12px + (24 - 12) * ((100vw - 320px) / (1440 - 320)));

    cursor: pointer;

    transition: all 0.1s linear;

    &:hover {
      transition: all 0.1s linear;

      background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
    }
  }
  &__input + label.flyer__label::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: #25273d;
    border-radius: 50%;
    transition: all 0.1s linear;
  }
  &__input:checked + label.flyer__label::before {
    content: '\f00c';
    display: block;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #ffffff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.1s linear;
  }
  &__radio-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__room-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    overflow: hidden;
    @media (max-width: 375px) {
      height: 300px;
      width: 300px;
    }
    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
      object-position: center;
    }
    &.shuttle {
      @media (max-width: 375px) {
        height: 300px;
        width: 270px;
      }
      img {
        width: 75%;
        border-radius: 15px;
        float: right;
      }
    }
    &.one {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 75%;
        height: 75%;
      }
    }
  }
}
.row:not(:last-child) {
  margin-bottom: 50px;
}
.mars_tl {
  visibility: hidden;
}
.order2 {
  @media (max-width: 768px) {
    order: 2;
  }
}
</style>
