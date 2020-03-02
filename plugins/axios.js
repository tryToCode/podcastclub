const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'

export default function ( { store, $axios } ) {

    $axios.setHeader('Content-Type', 'application/json')
    $axios.setHeader('Accept', 'application/json')
    
    
}