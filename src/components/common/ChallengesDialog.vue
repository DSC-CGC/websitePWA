<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          small
          dark
          outline
          color="grey"
          v-on="on"
        >
          see more
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        <v-avatar size="50">
            <v-img
            :src="(data.jsonData.profileImage)"
            :lazy-src="(data.jsonData.profileImage)">

                <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>

            </v-img>
        </v-avatar>
          &nbsp;&nbsp;{{data.jsonData.name}}
        </v-card-title>

        <v-card-text>
            <p class="google-font mb-0">{{data.jsonData.city}}, {{data.jsonData.country}}</p>
            <p class="google-font mt-1">{{data.jsonData.designation}}, {{data.jsonData.company}}</p>

            <p class="google-font">{{data.jsonData.des}}</p>
            <v-btn class="mt-0 mx-0" icon v-if="(data.jsonData.twitter).length>0" :href="data.jsonData.twitter" target="_blank">
                <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
            </v-btn>

            <v-btn class="mt-0 mx-0" icon v-if="(data.jsonData.linkedin).length>0" :href="data.jsonData.linkedin" target="_blank">
                <v-icon small style="color:#0077b5">fab fa-linkedin-in</v-icon>
            </v-btn>

            <v-btn class="mt-0 mx-0" icon v-if="(data.jsonData.github).length>0" :href="data.jsonData.github" target="_blank">
                <v-icon small style="color:#333">fab fa-github</v-icon>
            </v-btn>
            <v-btn class="mt-0 mx-0" icon v-if="(data.jsonData.website).length>0" :href="data.jsonData.website" target="_blank">
                <v-icon style="color:#333">link</v-icon>
            </v-btn>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props:{
        data:{
            jsonData:[]
        }
    },
    data () {
      return {
        dialog: false
      }
    },
    methods: {
        getImgUrl(pic) {
            if(pic.length>0){
                return ('https://magenta.tensorflow.org/assets/magenta-logo-bottom-text.png')
            }else{
                return ('https://magenta.tensorflow.org/assets/magenta-logo-bottom-text.png')
            }
        },
    },
  }
</script>