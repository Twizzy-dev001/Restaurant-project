<template>
     <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
    
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for= "Item in menuItems " :key="Item" >
                    <v-card>
                        <v-card color="pink-lighten-1">
                            <v-card-item>
                                <v-card-title>{{ Item.name }}</v-card-title>

                                <v-card-subtitle>{{ Item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="../public/potato-skins-loaded-with-mushrooms-onion-herbs-vegetables-melted-cheese.jpg" cover ></v-img>
                            <v-card-text>
                         {{ Item.price }}
                        </v-card-text>
                        </v-card>
                        </v-card>
                </v-col>
             </v-row>
            </v-container>          
        </v-card>
    </v-container>    
    </template>

<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name: "Soda",
        price: 100,
        description: "Best soda in town",
        size: "Large",
        offers: "None",
        image: "../public/public/colorful-soda-drinks-macro-shot.jpg"
    },
    {
        name: "Chapati",
        price: 20,
        description: "Best chapati in town",
        size: "None",
        offers: "None",
        image: "../public/public/indian-tasty-roti-composition.jpg"
    },
    {
        name: "Tea",
        price: 80,
        description: "Best tea in town",
        size: "Large",
        offers: "None",
        image: "../public/public/homemade-fruit-berry-tea-with-mint.jpg"
    },
    {
        name: "Wine",
        price: 5000,
        description: "Best wine in town",
        size: "None",
        offers: "None",
        image: "../public/public/side-view-red-wine-with-grape-crate-with-sackcloth-black-stone-vertical.jpg"
    },
    
]

</script>
