<template>
    <v-container class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <v-flex xs12>
                <p class="google-font mt-2 mb-0" style="font-size:170%;color:#37474F;" >Our lineup of big thinkers and even bigger doers</p>
                <p class="google-font">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup. See More</p>
            </v-flex>
            <v-flex xs6 sm3 md3 lg2 v-for="(item,i) in SpeakerDetails" :key="i" class="text-xs-center" style="text-align:center">
                <!-- style="text-align:center;border: 1px solid #e0e0e0;min-height:250px;border-radius:7px" -->
                <v-hover>
                <div slot-scope="{ hover }"
                    style="border-radius: 5px; border:1px solid white"
                    :class="`elevation-${hover ? 2 : 0}`"
                    class="text-xs-center ma-1 pa-1 py-3 my-0" >
                    <v-avatar size="150">
                        <v-img
                        :src="(item.profileImage)"
                        :lazy-src="(item.profileImage)">

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
                    <p class="mt-3 mb-0 google-font" style="font-size:130%">{{item.name}}</p>
                    Deadline-
                    <p class="mt-1 mb-0 google-font">{{item.Deadline}}</p>

                    <SpeakerDialog :data="{jsonData:item}" />

                </div>
                </v-hover>


            </v-flex>
        </v-layout>



    </v-container>
</template>

<script>
import SpeakerDetails from '@/assets/data/challenges.json'
import SpeakerDialog from '@/components/common/ChallengesDialog.vue'
export default {
    components:{
        SpeakerDialog
    },
    data() {
        return {
            SpeakerDetails: SpeakerDetails,
            showLoader: true,
            showData:false,
            dialog:false
        }
    },
    mounted(){

    },
    methods:{
        getImgUrl(pic) {
            if(pic.length>0){
                return ('https://magenta.tensorflow.org/assets/magenta-logo-bottom-text.png')
            }else{
                return ('https://magenta.tensorflow.org/assets/magenta-logo-bottom-text.png')
            }
        },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
