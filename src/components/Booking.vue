<template>
    <h1>WELCOME TO AVANI RESTAURANT</h1>
    <h3>Where Class Meets Fine Dining</h3>
    <v-container>
    <v-card class="mx-auto" elevation="24">

<v-carousel hide-delimiters cycle>
   
    <v-carousel-item src="../public/restaurant-with-tables-chairs-outside.jpg" cover> </v-carousel-item>
   
</v-carousel>
</v-card>
</v-container>


<p>Book a Reservation for any event right here at Avani Restaurant</p><br>
<p>HIGH CLASS SERVICE AND CATERING</p><br>



<v-container>
    <v-card class="mx-auto" elevation="24">

<v-carousel hide-delimiters cycle>
   
    <v-carousel-item src="../public/restaurant-hall-with-round-square-tables-some-chairs-plants.jpg" cover> </v-carousel-item>
   
</v-carousel>
</v-card>
</v-container>

<h4>The Restaurant Provides:</h4><br>
<p>
~Prestigious meeting place<br>
~A world-class bar<br>
~Excuisite African and International cuisines<br>
~High Class Service and Catering<br>
~Spacious dining section<br>
</p><br>


<v-row>
   <v-img
   
   src="../public/chef-showing-his-fine-cuisine-professional-food-decoration.jpg"
  
   height="350"
   width="350"
    
  ></v-img>
  
  <v-img
   src="../public/sliced-meat-along-with-sliced-vegetables-green-leafs-inside-white-plate-along-with-crisps-bread-loafs-grey.jpg"
  
   height="350"
   width="350"
    
  ></v-img>

  <v-img
   src="../public/tips-gratuities-happy-african-american-waitress-wearing-uniform-receiving-tip-from-satisfied-generous-customer-hotel-bar-feeling-excited-traveler-paying-with-cash-resort-services.jpg"
   height="350"
   width="350"
    
  ></v-img>

</v-row> <br>

<v-container>
    <!-- Main booking stepper -->
    <v-stepper v-model="step">
      <!-- Step 1: Date & Time Selection -->
      <v-stepper-step :complete="step > 1" step="1">
      <p> SELECT DATE AND TIME</p>
      </v-stepper-step><br>
      <v-stepper-content step="1">
        <v-card class="mb-4">
          <v-card-text>
            <!-- Date Picker for Check-in/Check-out -->
            <v-date-picker
              v-model="dates"
              range
              label="Select Dates"
              :min="new Date().toISOString().substr(0, 10)"
            ></v-date-picker>
            <!-- Time Picker -->
            <v-time-picker
              v-model="time"
              format="24hr"
              label="Select Time"
            ></v-time-picker>
          </v-card-text>
        </v-card>
        <v-btn color="primary" @click="step = 2">Continue</v-btn>
      </v-stepper-content>

      <!-- Step 2: Table Selection -->
      <v-stepper-step :complete="step > 2" step="2">
        Select Table
      </v-stepper-step>
      <v-stepper-content step="2">
        <v-card class="mb-4">
          <v-card-text>
            <!-- Table Type Selector -->
            <v-select
              v-model="tableType"
              :items="tableTypes"
              label="Table Type"
            ></v-select>
            <!-- Number of Guests -->
            <v-text-field
              v-model="guests"
              type="number"
              label="Number of Guests"
              min="1"
              max="10"
            ></v-text-field>
          </v-card-text>
        </v-card>

        <v-btn color="primary" @click="step = 3">Continue</v-btn>
        <v-btn text @click="step = 1">Back</v-btn>
      </v-stepper-content>

      <!-- Step 3: Guest Information -->
      <v-stepper-step :complete="step > 3" step="3">
        Guest Information
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-card class="mb-4">
          <v-card-text>
            <!-- Guest Details Form -->
            <v-text-field v-model="name" label="Full Name"></v-text-field>
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="phone" label="Phone Number"></v-text-field>
          </v-card-text>
        </v-card>
        <v-btn color="primary" @click="step = 4">Continue</v-btn>
        <v-btn text @click="step = 2">Back</v-btn>
      </v-stepper-content>
      </v-stepper>
      </v-container>
<br><br>

<p>BOOK NOW TO ENJOY YOUR OWN EVENT AT AVANI</p><br><br>

<v-btn color="deep-purple-darken-2" elevation="24" large>Book Now</v-btn><br><br>

<h1>AVANI RESTAURANT</h1>
    <h3>Where Class Meets Fine Dining</h3>
  

  </template>

<script setup>
</script>
<style>
    h1{
       font-family: 'Georgia'
    }
    h3{
        font-family: 'lato';
        display: flex; justify-content: center;align-items: center; width: 100%;
        color: #65605d;
    }
    p{
        font-family: 'lato ';
        font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #65605d;
    display: flex; justify-content: center;align-items: center; width: 100%;

    }
    .v-btn{
        
        display: block; justify-content: center;align-items: center; width: 100%;
    
        text-align: center;
        margin: 0 auto;  

       }
       h4{ 
        font-family: 'Georgia';
        display: flex; justify-content: center;align-items: center; width:70%;
        font-weight: 400;
    line-height: 1.5;
    text-align: left;

        
         }
         
        
    
</style>
<script>

import { ref } from 'vue'

// Reactive state for form data
const step = ref(1)
const dates = ref([])
const time = ref(null)
const tableType = ref(null)
const guests = ref(1)

const name = ref('')
const email = ref('')
const phone = ref('')
const cardNumber = ref('')
const expiry = ref('')
const cvv = ref('')
const termsAgreed = ref(false)

// Table type options
const tableTypes = [
  'Standard Table',
  'Window Table',
  'Private Booth',
  'Outdoor Table'
]


// Booking submission function
function submitBooking() {
  // Validate all fields
  if (!validateBooking()) {
    alert('Please fill all required fields correctly')
    return
  }
  
  // Process booking (would typically send to backend)
  const bookingDetails = {
    dates: dates.value,
    time: time.value,
    tableType: tableType.value,

    guests: guests.value,
    name: name.value,
    email: email.value,
    phone: phone.value
  }
  
  console.log('Booking Submitted:', bookingDetails)
  alert('Booking successful!')
}

// Basic validation function


</script>


