/*
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2021-05-15 14:08:17
 */
//https://a4275099-09b6-4613-9ef0-3d0cb76e6c70.bspapp.com/http/user-center
import request from '@/utils/request'

export default {
    login(params) {
        return request({
            url: 'https://a4275099-09b6-4613-9ef0-3d0cb76e6c70.bspapp.com/http/user-center',
            method: 'post',
            data: {
                action: 'login',
                params: {
                    username: 'lcp',
                    password: '123456'
                }
            }
        })
    },
    friendList() {
        return request({
            url: 'https://a4275099-09b6-4613-9ef0-3d0cb76e6c70.bspapp.com/http/friends',
            method: 'post',
            data: {
                action: 'get'
            }
        })
    }
}