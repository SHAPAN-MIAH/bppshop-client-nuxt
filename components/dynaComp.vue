<template>
  <div class="dyna-container">
    <input
      type="text"
      id="dynamic-placeholder"
      placeholder=""
      v-model="placeholders"
    />
  </div>
</template>




<script>
export default {
  
  data: function () {
    return {
      fixedOnScroll: false
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY >= 200) {
        this.fixedOnScroll = true
      } else {
        this.fixedOnScroll = false
      }
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeUpdate () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
}
</script>













<!-- 
<script>
export default {
  data() {
    return {
      Cusplaceholders: "zahid",
    };
  },

  created() {
    let x = SuperPlaceholder({
      placeholders: ["john.doe@gmail.com", "foo@bar.com"],
      preText: "Eg. ",
      stay: 1000,
      speed: 100,
      element: "#dynamic-placeholder",
    });
    console.log(x);

    // .............
  },
  mounted:{

SuperPlaceholder(options) {
      this.options = options;
      this.element = options.element;
      this.placeholderIdx = 0;
      this.charIdx = 0;

      this.setPlaceholder = function () {
        placeholder = options.placeholders[this.placeholderIdx];
        var placeholderChunk = placeholder.substring(0, this.charIdx + 1);
        this.Cusplaceholders=placeholderChunk
        // document
        //   .querySelector(this.element)
        //   .setAttribute(
        //     "placeholder",
        //     this.options.preText + " " + placeholderChunk
        //   );
      };

      this.onTickReverse = function (afterReverse) {
        if (this.charIdx === 0) {
          afterReverse.bind(this)();
          clearInterval(this.intervalId);
          this.init();
        } else {
          this.setPlaceholder();
          this.charIdx--;
        }
      };

      this.goReverse = function () {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(
          this.onTickReverse.bind(this, function () {
            this.charIdx = 0;
            this.placeholderIdx++;
            if (this.placeholderIdx === options.placeholders.length) {
              // end of all placeholders reached
              this.placeholderIdx = 0;
            }
          }),
          this.options.speed
        );
      };

      this.onTick = function () {
        var placeholder = options.placeholders[this.placeholderIdx];
        if (this.charIdx === placeholder.length) {
          // end of a placeholder sentence reached
          setTimeout(this.goReverse.bind(this), this.options.stay);
        }

        this.setPlaceholder();

        this.charIdx++;
      };

      this.init = function () {
        this.intervalId = setInterval(
          this.onTick.bind(this),
          this.options.speed
        );
      };

      this.kill = function () {
        clearInterval(this.intervalId);
      };
    },


  },


 
};
</script> -->

<style scoped>
.dyna-container {
  margin: 100px;
}

body {
  /* background: #555; */
  text-align: center;
}

#dynamic-placeholder {
  v-align: center;
  height: 50px;
  width: 50%;
  font-size: 30px;
  background: #000;
  border-radius: 5px;
  border: none;
  margin: 50px auto;
  padding: 10px;
  color: #fff;
  outline: none !important;
}
</style>

