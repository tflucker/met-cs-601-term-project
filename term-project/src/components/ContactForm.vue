<script>

export default {
    data() {
        return {
            contactName: '',
            contactEmail: '',
            contactMessage: ''
        }
    },
    methods: {
        submitContactForm() {

            // TEST - verify that user input is being captured!
            console.log(this.contactName);
            console.log(this.contactEmail);
            console.log(this.contactMessage);


            var contactFormData = {
                name: this.contactName,
                email: this.contactEmail,
                message: this.contactMessage,
                submissionDate: new Date()
            }

            document.getElementById("responseViewer").textContent = JSON.stringify(contactFormData, undefined, 2);


            alert('input received!');
            // reset values in form
            this.contactName = '';
            this.contactEmail = '';
            this.contactMessage = '';
        }
    }
}
</script>

<template>
    <main id="main-content">
        <section class="page-jumbotron sea-green">
            <h2 class="text-center">Contact Form</h2>
            <p class="text-center">If you want to get in touch with me please fill out this contact form so that we can connect!</p>
            <article id="contactMeForm" class="flex-center">
                <form action="#" @submit.prevent="submitContactForm">
                    <label for="contactName">Name:</label><br>
                    <input type="text" id="contactName" name="contactName" v-model="contactName"
                        placeholder="Ex. John Doe" required><br>
                    <label for="contactEmail">Email:</label><br>
                    <input type="text" id="contactEmail" name="contactEmail" v-model="contactEmail"
                        placeholder="Ex. jdoe@email.com" required><br>
                    <label for="contactMessage">Message:</label><br>
                    <textarea id="contactMessage" name="contactMessage" cols="30" rows="10"
                        placeholder="This is a really cool site! It should get an A+ !!!" v-model="contactMessage"
                        required></textarea>
                    <br>
                    <input type="submit" value="Submit"  class="text-center">
                </form>

            </article>
            <article id="formSubmissionView">
                <h2 class="text-center">Contact Form Response</h2>
                <pre id="responseViewer"  class="flex-center">Waiting for form submission ...</pre>
            </article>
        </section>
    </main>
</template>

<style scoped>

.text-left{
    text-align: left;
}

.flex-center {
    display: flex;
    justify-content: center
}
</style>