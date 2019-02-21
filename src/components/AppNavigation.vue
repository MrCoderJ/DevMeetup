<template>
    <span>
      <v-navigation-drawer app v-model="isSideBar">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link"> 
          <v-list-tile-action>
            <v-icon >{{item.icons}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
  <v-toolbar app dark color="pink darken-1">
      <v-toolbar-side-icon @click.native.stop=" isSideBar = !isSideBar" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
       <router-link to="/" tag="span" style="cursor: pointer">DevMeetUp</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn 
        flat v-for="item in menuItems" 
        :key="item" 
        router :to="item.link">
        <v-icon left>{{item.icons}}
          </v-icon>{{item.title}}</v-btn>
      </v-toolbar-items >
    </v-toolbar>
     <main><router-view></router-view></main>
    </span>
</template>

<script>
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      isSideBar: false,
      menuItems: [
        {icons: "supervisor_account", title: "View Meetups", link: "/meetups"},
        {icons: "room", title: "Organize Meetup", link: "/meetup/new"},
        {icons: "person", title: "Profile", link: "/profile"},
        {icons: "face", title: "Sign Up", link: "/signup"},
        {icons: "lock_open", title: "Sign In", link: "/signin"}
      ]
    }
  }
}
</script>

