<template>
    <v-container>
        <GithubRepo @reposelected="onRepoSelected"/>
        <!-- <GithubIssues :repo="repo"/> -->
        <GithubContent :repo="repo"/>
    </v-container>
</template>
  
<script>
    import GithubRepo from './GithubRepo';
    // import GithubIssues from './GithubIssues';
    import GithubContent from './GithubContent'

    export default {
        // name: "GithubVuewer",

        components: {
            GithubRepo,
            GithubContent,
            // GithubIssues,
        },
        data: () => ({
            repo:null,
        }),
        methods:{
            onRepoSelected(repo){
                this.repo = repo
            },
        },
    }
</script>
