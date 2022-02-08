### Installation

    npm install --save axios
    npm install --save nprogress
    npm install --save @haosheng/axios-nprogress

### Usage
    import 'nprogress/nprogress.css'
    import axios from 'axios'
    import NProgress from 'nprogress'
    import AxiosNProgress from 'axios-nprogress'
    
    AxiosNProgress(NProgress, axios)
