<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">Number</th>
                                <th class="text-left">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="conteudo in conteudos" :key="conteudo.name">
                                <td>{{ conteudo.name }}</td>
                                <td> {{ conteudo.type }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
              <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
              <v-btn color="primary" v-if="temmais" @click="listaIssues">MAIS</v-btn>
            </v-col>
            
        </v-row>
    </div>
</template>
  
<script>
    
    import {api} from '@/api/api.js'

    export default {
        props: ['repo'],
        data: () => ({
            conteudo: [],
            loading: false,
            temmais: false,
            currentPage: 1
        }),
        methods: {
            async listaIssues(){
                this.loading = true
                const maisiconteudo =  await api.listaIssues(this.repo.owner.login, this.repo.name, this.currentPage)
                this.issues = this.issues.concat(maisissues)
                this.currentPage++
                this.loading = false
                this.temais = maisissues.lenght > 0
            }
        },
        watch: {
            repo(){
                this.issues = []
                if (this.repo){
                    this.temmais = false
                    this.currentPage = 1
                    this.listaIssues()
                } else {
                    this.issues = []
                    this.temmais = false
                    this.currentPage = 1
                }
            },
            
        }
    }
</script>
