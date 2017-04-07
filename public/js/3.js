webpackJsonp([3],{

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "task-list",
  data: function data() {
    return {
      auth: {
        authenticated: false,
        user: {
          name: '',
          email: ''
        }
      },
      tasks: []
    };
  },

  mounted: function mounted() {
    var _this = this;

    console.log('here');
    console.log(localStorage.getItem("id_token"));
    if (localStorage.getItem("id_token") != null) {
      console.log('here11');
      this.getUser();
    }
    window.axios.get('tasks').then(function (response) {
      console.log(response);
      _this.tasks = response.data;
    }).catch(function (erro) {
      console.log(erro);
    });
  },
  methods: {
    getUser: function getUser() {
      var _this2 = this;

      window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
      window.axios.get('auth/user').then(function (response) {
        console.log(response);
        _this2.auth.authenticated = true;
        _this2.auth.user = response.data.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    signout: function signout() {
      localStorage.removeItem('id_token');
      this.auth.authenticated = false;
      this.auth.user = null;
    },
    deleteTask: function deleteTask(id) {
      var _this3 = this;

      window.axios.delete('tasks/' + id).then(function (response) {
        console.log(response);
        var index = _this3.tasks.findIndex(function (task) {
          return task.id === id;
        });
        _this3.tasks.splice(index, 1);
      }).catch(function (erro) {
        console.log(erro);
      });
    }
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kaikezhang/Code/jwt-auth-example/resources/assets/js/components/task_list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] task_list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3aa5d42e", Component.options)
  } else {
    hotAPI.reload("data-v-3aa5d42e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', [_c('ul', {
    staticClass: "list-inline"
  }, [(!_vm.auth.authenticated) ? _c('li', {
    staticClass: "pull-right"
  }, [_c('router-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Register")])], 1) : _vm._e(), _vm._v(" "), (!_vm.auth.authenticated) ? _c('li', {
    staticClass: "pull-right"
  }, [_c('router-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Login")])], 1) : _vm._e(), _vm._v(" "), (_vm.auth.authenticated) ? _c('li', {
    staticClass: "pull-right"
  }, [_vm._v("\n              Hi, " + _vm._s(_vm.auth.user.name) + "\n          ")]) : _vm._e(), _vm._v(" "), (_vm.auth.authenticated) ? _c('li', {
    staticClass: "pull-right"
  }, [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.signout($event)
      }
    }
  }, [_vm._v("Logout")])]) : _vm._e()])]), _vm._v(" "), _c('h3', [_vm._v("Tasks List")]), _vm._v(" "), _c('ul', {
    staticClass: "list-group"
  }, _vm._l((_vm.tasks), function(task) {
    return _c('li', {
      staticClass: "list-group-item"
    }, [_c('span', [_vm._v(_vm._s(task.name) + " "), _c('a', {
      staticClass: "pull-right",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          _vm.deleteTask(task.id)
        }
      }
    }, [_vm._v("X")])])])
  })), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/create"
    }
  }, [_vm._v("Create a new task")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3aa5d42e", module.exports)
  }
}

/***/ })

});