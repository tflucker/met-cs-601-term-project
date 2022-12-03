<script setup></script>
<template>
    <main id="main-content" class="body-style">
        <section id="formSubmissionView" class="page-jumbotron sea-green">
            <h2 class="text-center">Successful form submission!</h2>
            <p class="text-center">Thank you for submitting this contact form! Please click the button if you would like
                to submit another form.</p>
            <div class="flex-center">
                <router-link id="contactForm" to="/contactForm">
                    <button type="button" class="btn-style">New Form</button>
                </router-link>
            </div>
        </section>
    </main>
</template>