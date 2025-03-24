<template>
     <v-container>
        <v-card color="deep-purple-darken-2" >
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
                        <v-card color="teal">
                            <v-card-item>
                                <v-card-title>{{ Item.name }}</v-card-title>

                                <v-card-subtitle>{{ Item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="Item.image" cover ></v-img>
                            <v-card-text>
                         {{ Item.price }}
                        </v-card-text>
                        <v-btn @click="addToOrder(item)">Order</v-btn>
                        <v-card-actions>
        <v-btn  background-color= "white" color="black" variant="tonal" @click="removeFromOrder(item)"> Remove</v-btn>
    </v-card-actions>


                        </v-card>
                        </v-card>
                </v-col>
             </v-row>
            </v-container>          
        </v-card>
    </v-container> 
    
    <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
    </template>

<script setup>
import { ref } from 'vue'

const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "../public/crispy-french-fries-with-ketchup-mayonnaise.jpg"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "../public/fried-delicious-sausages.jpg"
    },
    {
        name: "Soda",
        price: 100,
        description: "Best soda in town",
        size: "Large",
        offers: "None",
        image: "../public/colorful-soda-drinks-macro-shot.jpg"
    },
    {
        name: "Chapati",
        price: 20,
        description: "Best chapati in town",
        size: "None",
        offers: "None",
        image: "../public/indian-tasty-roti-composition.jpg"
    },
    {
        name: "Tea",
        price: 80,
        description: "Best tea in town",
        size: "Large",
        offers: "None",
        image: "../public/homemade-fruit-berry-tea-with-mint.jpg"
    },
    {
        name: "Wine",
        price: 5000,
        description: "Best wine in town",
        size: "None",
        offers: "None",
        image: "../public/side-view-red-wine-with-grape-crate-with-sackcloth-black-stone-vertical.jpg"
    },
    
]

//manage the current state of the order
const orderItems  = ref([])
const totalOrderAmount = ref(0)

function calculateTotalAmount(price){
    totalOrderAmount.value += price

}

function addToOrder (item){
    orderItems.value.push(item)
    calculateTotalAmount(item.price)
}

function removeFromOrder(item){
    orderItems.value.pop(item)
    totalOrderAmount.value -= item.price
}
</script>
