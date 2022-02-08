export default (NProgress, axios) => {
  axios.defaults.onUploadProgress = e => NProgress.inc((Math.floor(e.loaded) / e.total))
  axios.defaults.onDownloadProgress = e => NProgress.inc((Math.floor(e.loaded) / e.total))

  let count = 0

  axios.interceptors.request.use(config => {
    count++

    if (count <= 1) {
      NProgress.start()
    }

    return config
  })

  axios.interceptors.response.use(
    response => {
      count--

      if (count <= 0) {
        NProgress.done()
      }

      return response
    },
    error => {
      count--

      if (count <= 0) {
        NProgress.done()
      }

      return Promise.reject(error)
    },
  )
}
