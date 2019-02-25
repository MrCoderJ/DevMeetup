<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm5>
        <h2 class="primary--text">Create A Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form v-model="formValid">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                v-model="title"
                label="Title"
                id="title"
                box
                :rules="titleRules"
                required
                counter
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                v-model="location"
                label="Location"
                id="location"
                box
                :rules="locationRules"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                v-model="imageUrl"
                label="ImageUrl"
                id="imageUrl"
                :rules="imageRules"
                box
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" box required height="150px">
            </v-flex>
          </v-layout>
          <v-spacer></v-spacer>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                name="description"
                label="Description"
                v-model="description"
                id="description"
                box
                :rules="descRules"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>
          <!-- Date picker here  -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                lazy
                full-width
                width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="date"
                  label="Picker in dialog"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-flex>
          </v-layout>
          <!-- Time picker here  -->
          <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
              <v-dialog
        ref="dialog2"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        lazy
        full-width
        width="290px">
        <v-text-field
          slot="activator"
          v-model="time"
          label="Time"
          prepend-icon="access_time"
          readonly></v-text-field>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          full-width>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog2.save(time)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
          </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm5 offset-sm3>
              <v-btn
                color="pink darken-1"
                :disabled="!formValid"
                class="white--text"
                @click="onCreateMeetup()"
              >Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      formValid: false,
      title: "",
      time: new Date(),
      menu: true,

      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,

      menu1: false,
      modal2: false,
      titleRules: [
        v => !!v || "Title is required"
        // v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      location: "",
      locationRules: [v => !!v || "Location is required"],
      imageUrl: "",
      imageRules: [v => !!v || "Image is required"],
      description: "",
      descRules: [v => !!v || "description is required"]
    };
  },
  computed: {
    submittableDate() {
      const date = new Date(this.date);
      console.log(date);
      return date;
    }
  },
  methods: {
    onCreateMeetup() {
      const meetupData = {
        title: this.title,
        location: this.title,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDate,
        id: Math.random(25).toString(36)
      };

      if (this.formValid) {
        this.$store.commit("createMeetup", meetupData);
        console.log("commited", this.$store.getters.loadedMeetups);
      }
    }
  }
};
</script>
