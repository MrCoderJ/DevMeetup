<template>
  <v-container>
    <v-layout class="mb-2">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="(meetup, i) in meetups"
            v-bind:src="meetup.imageUrl"
            :key="i"
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn router to="/meetups" class="pink darken-1" large>Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn router to="/meetup/new" color="pink darken-1" large>Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join the Awesome meetup to learn!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>
