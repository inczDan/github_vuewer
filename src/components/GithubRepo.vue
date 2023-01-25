<template>
    <div>
        <v-row class="text-center">
            <v-col cols="6">
                <v-autocomplete
                v-model="user"
                label="Procure um user"
                :items="userlist"
                :loading="userloading"
                :search-input.sync="usersearch"
                item-text="login"
                prepend-icon="mdi-account-search"
                />
            </v-col>
            <v-col cols="6">
                <v-select
                    v-model="repo"
                    :items="repolist"
                    :loading="repoloading"
                    item-text="name"
                    label="Selecione o repositorio desejado"
                    return-object
                    single-line
                    prepend-icon="mdi-file-code-outline"
                ></v-select>
            </v-col>
        </v-row>
       
        
    </div>
</template>
  
<script>

    import {debouncerdecorator} from '@/helpers/debouncer.js'
    import {api} from '@/api/api.js'
    // import {Octokit} from "octokit"

    export default {
        data: () => ({
            user: null,
            repo: null,
            usersearch: null,
            userlist: [],
            repolist: [],
            arquivolist: [],
            userloading: false,
            repoloading: false,
            arquivoloading: false,
        }),
        methods: {
            procuraUsuariosGithub: debouncerdecorator(async function() {
                this.userloading = true
                const data = await api.search_users(this.usersearch)
                this.userlist = data.items
                this.userloading = false
            },500),
            async listaRepositorios(){
                this.repoloading= true
                const data = await api.lista_repos(this.user)
                this.repolist = data
                this.repoloading= false
            },
            async buscaInfo(){
                const data = await api.repos(this.user)
                this.userInfo = data
            },
        },
        watch: {
            usersearch (){
                this.procuraUsuariosGithub()
            },
            user(){
                if(this.user){
                    this.listaRepositorios()
                    this.buscaInfo()
                }
            },
            repo (){
                this.$emit('reposelected', this.repo)
            },
        }
    }
</script>
