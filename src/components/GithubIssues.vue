<template>
    <div>
        <v-row class="text-center">
            <v-col cols="12">
                <template>
                    <v-treeview
                      v-model="tree"
                      :open="initiallyOpen"
                      :items="items"
                      activatable
                      item-key="name"
                      open-on-click
                    >
                      <template v-slot:prepend="{ item, open }">
                        <v-icon v-if="!item.file">
                          {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
                        </v-icon>
                        <v-icon v-else>
                          {{ files[item.file] }}
                        </v-icon>
                      </template>
                    </v-treeview>
                </template>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
    
    import {api} from '@/api/api.js'

    export default {
        props: ['repo'],
        data: () => ({
            issues: []
            
        }),
        methods: {
           
        },
        watch: {
            repo(){
                this.listaIssues()
            },
            listaIssues(){

            }
        }
    }
</script>
