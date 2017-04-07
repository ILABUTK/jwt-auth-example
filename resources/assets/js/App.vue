<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

// require('bootstrap-sass');

export default {
    name: 'app',
    created: function() {

    }
}
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap";
</style>
