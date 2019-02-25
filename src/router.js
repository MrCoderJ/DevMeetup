import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Profile from "./components/User/Profile";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";
import Meetups from "./components/Meetup/Meetups";
import CreateMeetup from "./components/Meetup/CreateMeetup";
import Meetup from "./components/Meetup/Meetup";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },

    {
      path: "/meetup/new",
      name: "CreateMeetup",
      component: CreateMeetup
    },
    {
      path: "/meetups/:id",
      name: "Meetup",
      props: true,
      component: Meetup
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/meetups",
      name: "Meetups",
      component: Meetups
    }
  ]
});
