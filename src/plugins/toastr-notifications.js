import toastr from 'toastr';

/**
 * AVAILABLE OPTIONS
 *    closeButton: true,
 *    debug: false,
 *    newestOnTop: false,
 *    progressBar: true,
 *    positionClass: 'toast-bottom-right',
 *    preventDuplicates: false,
 *    onclick: null,
 *    showDuration: '300',
 *    hideDuration: '1000',
 *    timeOut: '3000',
 *    extendedTimeOut: '1000',
 *    showEasing: 'swing',
 *    hideEasing: 'linear',
 *    showMethod: 'fadeIn',
 *    hideMethod: 'fadeOut'
 */

export default {
  install: (Vue, options = {}) => {
    toastr.options = options;
    /* eslint-disable-next-line no-param-reassign */
    Vue.prototype.$toast = new Proxy(toastr, {});
  },
};
