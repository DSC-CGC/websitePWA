<template>
  <v-content class="pa-0">

    <!-- <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#616161">Our lineup of big thinkers and even bigger doers</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup.. </p>


        </v-flex>
      </v-layout>
    </v-container> -->

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <speakers/>
        </v-flex>
      </v-layout>
    </v-container>




  </v-content>

</template>

<script>
import speakers from '@/components/challenges'
  export default {
    components: {
      speakers
    },
    data() {
      return {
      }
    },
  }
</script>
