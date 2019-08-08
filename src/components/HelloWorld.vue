<template>
  <div class="hello">
    <img class="head_icon"
         :src="userDetail.headImg"
         :alt="userDetail.name">
    <p>{{userDetail.name}}</p>
    <p>{{userDetail.phone}}</p>
    <p>{{userDetail.email}}</p>
    <p>{{userDetail.homeAddress}}</p>
    <p>{{userDetail.sex}}</p>
    <p>简历: 【{{userDetail.resumes.map(item => item.name).join('】【')}}】</p>
  </div>
</template>

<script>
import qs from 'querystring'
// import { requestUserDetail } from '../../../plugins-3d/lib/domains/user/service'
// import { requestJobDetail } from '../../../plugins-3d/lib/domains/job/service'
// import { isEmpty } from '../../../plugins-3d/src/utils'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      userInfo: {},
      userDetail: {
        resumes: []
      },
      jobDetail: {}
    }
  },
  async mounted () {
    // let getUserDetailPromise = this.getUserDetail()
    // let getJobDetailPromise = this.getJobDetail()
    // await Promise.all([getUserDetailPromise, getJobDetailPromise])
  },
  methods: {
    getUserDetail () {
      return new Promise(async (resolve, reject) => {
        await requestUserDetail({
          resumeNumber: 1,
          nodeName: 'ProfileStatus'
        }).then(res => {
          if (res.code === 200) {
            this.userDetail = res.data
          }
          resolve(true)
        }).catch(err => {
          this.userDetail = { resumes: [] }
          reject(new Error(err.message))
        })
      })
    },
    getJobDetail () {
      return new Promise(async (resolve, reject) => {
        await requestJobDetail({
          number: 'CC407312210J00139254515'
        }).then(res => {
          if (res.code === 200) {
            this.jobDetail = res.data
          }
          console.log('getJobDetail: ', JSON.stringify(this.jobDetail, null, 2))
          resolve(true)
        }).catch(err => {
          this.jobDetail = {}
          console.log('getJobDetail error: ', err.message)
          reject(new Error(err.message))
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
}
.head_icon {
  width: 128px;
  height: 128px;
}
</style>
