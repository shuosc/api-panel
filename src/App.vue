<template>
    <v-app dark id="inspire">
        <v-toolbar app color="indigo" dark fixed>
            <v-toolbar-title>SHUAPI Panel</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fill-height fluid>
                <v-layout
                        align-center
                        justify-center>
                    <router-view></router-view>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
