<template>
<v-row>
    <v-col cols="10" offset="1" md="4" offset-md="4">
    <v-card>
        <v-toolbar color="primary" dark>Login</v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field 
                name="email"
                label="Email"
                type="email"
                />
                <v-text-field 
                name="password"
                label="Password"
                type="password"
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Login</v-btn>
        </v-card-actions>
    </v-card>
</v-col>
</v-row>
</template>