import request from '@/utils/request.js'

// 将请求参数改为x-www-form-urlencoded格式
let NewMusic_Param = new URLSearchParams();
NewMusic_Param.append("params", 'Q4phoQa8eTgc447zN422xcqUGf2FEBBcP4BxqRMDJKLB76aRYPInsDfrKRt7f/m0');
NewMusic_Param.append("encSecKey", '75157afb02edc95d8fe6b31eb2ecf5635b4c5e6fcd10bf09dcad7294b3149b1767c6bf40fa3958a85489751d04e49d6eff94afb9b1019052df3b20f3b958736318e51c50370f50d733bdbf92612c229960b31572c75c22acf5ecc4b1044d6a942dc7443172e465e480b440e627a9d67323e414e5ca080908e6399d4f121f9b7c');

let HotMusic_Param = new URLSearchParams();
HotMusic_Param.append("params", "xN5YfYqkfEE7BobMEzmJ3lZWG2ilkms9Vfn3RpJR9L2WD6v0gvFS0KqW1UWqzNGz");
HotMusic_Param.append("encSecKey", "9b8d5fdc78895f16bdc02847009276293c24cf5ae8a19d28e8ec217e53ce8d2b6f0dfb0ac3d33f3a0f19ac65b7b5d566b57038a5b4ff3fac36bd806fd507e5191ab33f6793dfb2c8f622ddff95fd4fd77978efd7e1ef0d5a4ba0beab083a7e2c4fc52a55139362af508084b8c1752f84755e612a13cdcb5958637dd40723c13c")



const api = {
  getPsnMusicAPI(limit) {
    return request.get('/api/personalized', {
      params: {
        limit
      }
    })
  },
  getNewMusicAPI() {
    return request.post('/foo/weapi/personalized/newsong', NewMusic_Param)
  },
  getHotMusicAPI() {
    return request.post('/foo/weapi/v6/playlist/detail', HotMusic_Param)
  }
}

export default api