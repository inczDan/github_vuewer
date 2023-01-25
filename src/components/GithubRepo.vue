<template>
    <div>
        <v-autocomplete
        v-model="user"
        :items="userlist"
        :loading="userloading"
        :search-input.sync="usersearch"
        item-text="login"
        />
    </div>
</template>
  
<script>

    import {debouncerdecorator} from '@/helpers/debouncer.js'
    import {api} from '@/api/api.js'
    // import {Octokit} from "octokit"

    export default {
        data: () => ({
            user: null,
            usersearch: null,
            userlist: [],
            userloading: false
        }),
        methods: {
            procuraUsuariosGithub: debouncerdecorator(function() {
                 this.userloading = true
                 api.search_users(this.usersearch).then(data => {
                    this.userlist = data.items
                    this.userloading = false
                 })
            },500),
        },
        watch: {
            usersearch (){
                this.procuraUsuariosGithub()
            }
        }
    }
</script>
