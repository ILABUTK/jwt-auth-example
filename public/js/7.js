webpackJsonp([7],{

/***/ 32:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create_task",
  data: function data() {
    return {
      name: ''
    };
  },

  methods: {
    hideAlert: function hideAlert() {
      $("#success-alert").hide();
    },
    createTask: function createTask(task) {
      var _this = this;

      window.axios.post('tasks', { name: task }).then(function (response) {
        console.log(response);
        _this.name = '';
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kaikezhang/Code/jwt-auth-example/resources/assets/js/components/create_task.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create_task.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49af2f79", Component.options)
  } else {
    hotAPI.reload("data-v-49af2f79", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "task name"
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "focus": _vm.hideAlert,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.createTask(_vm.name)
      }
    }
  }, [_vm._v("Submit")])]), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-sm-12 alert alert-success",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "role": "alert",
      "id": "success-alert"
    }
  }, [_c('strong', [_vm._v("Success! ")]), _vm._v("\n          Task added.\n      ")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-49af2f79", module.exports)
  }
}

/***/ })

});