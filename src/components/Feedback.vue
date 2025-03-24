<template>
   <v-container>
    <v-card mx class="mx auto" elevation="24">
    <div class="image-container">
    <v-img src="../public/woman-is-choosing-food-menu-order-restaurant.jpg" cover alt="Image" class="image" />
    <div class="overlay-text">
     FEEDBACK
    </div>
  </div>
  </v-card>
  </v-container>
  <P>GIVE US FEEDBACK ON YOUR AVANI EXPERIENCE</P><br>
  <p>Reach out to us on any of our platforms to share your thoughts and suggestions on the Avani experience</p><br><br>
  <v-container>
  <v-card class="mx-auto" elevation="24" id="card2" >
                            <v-card-item>
                            <v-card-title>Give feedback on any of our platforms</v-card-title>

                            </v-card-item>
                            <v-card-text><v-icon icon="mdi-instagram" /> myrestaurant</v-card-text>
                            <v-card-text><v-icon icon="mdi-twitter" /> myrestaurant</v-card-text>
                            <v-card-text><v-icon icon="mdi-facebook" /> myrestaurant</v-card-text>
                        </v-card>
                        </v-container><br>

                        <h1>AVANI RESTAURANT</h1>
    <h3>Where Class Meets Fine Dining</h3>
    <font-awesome-icon :icon="['fas', 'champagne-glasses']" />
  
</template>

<script>
export default {
  name: "ImageOverlay"
};
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%; /* Or a fixed size */
  max-width:100%; /* Set max width for responsive */
}

.image {
  width: 100%;
  height: 500px;
}

.overlay-text {
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%); /* Center the text */
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Optional text shadow */
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: "deep-purple-darken-2"
}
p{
    font-family: 'lato';
    font-size: 20px;
    color: #65605d;
}
#card2{
    background-color:#f7f7f7;
  justify-content: center;align-items: center;max-width: fit-content;

}
.v-card-title{
    font-family: 'lato';
    color: #65605d;
    font-weight: 700;

}
</style>
  

<script setup>


</script>
