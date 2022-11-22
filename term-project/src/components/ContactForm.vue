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

            // validate content, if true save data else do not save data
            if (this.validateForm()) {
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
        },
        validateForm() {

            let validName = false, validEmail = false, validMessage = false;
            let errorMessage = "";

            // validate name
            if (this.contactName && this.contactName.trim() != "") {
                validName = true;
            } else {
                errorMessage = "ERROR: Contact Name cannot be null or blank!";
            }
            // validate email
            // verify value is not null and not blank
            if (this.contactEmail && this.contactEmail.trim() != "") {
                
                // validate that email matches email pattern (ex. test@gmail.com)
                let emailRegEx = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$")
                if (this.contactEmail.match(emailRegEx)) {
                    validEmail = true;
                } else {
                    errorMessage += "\nERROR: Contact Email must be valid email format!";
                }
            } else {
                errorMessage += "\nERROR: Contact Email cannot be null or blank!";
            }

            // validate message 
            if (this.contactMessage && this.contactMessage.trim() != "") {
                validMessage = true;
            } else {
                errorMessage += "\nERROR: Contact Message cannot be null or blank!"
            }

            if (errorMessage.length > 0) {
                alert(errorMessage);
            }

            return (validName && validEmail && validMessage);

        }
    }
}
</script>

<template>
    <main id="main-content">
        <section class="page-jumbotron sea-green">
            <h2 class="text-center">Contact Form</h2>
            <p class="text-center">If you want to get in touch with me please fill out this contact form so that we can
                connect!</p>
            <article id="contactMeForm" class="flex-center">
                <form action="#" @submit.prevent="submitContactForm">
                    <label for="contactName">Name:</label><br>
                    <input type="text" id="contactName" name="contactName" v-model="contactName"
                        placeholder="Ex. John Doe" required><br>
                    <label for="contactEmail">Email:</label><br>
                    <input type="email" id="contactEmail" name="contactEmail" v-model="contactEmail"
                        placeholder="Ex. jdoe@email.com" required><br>
                    <label for="contactMessage">Message:</label><br>
                    <textarea id="contactMessage" name="contactMessage" cols="30" rows="10"
                        placeholder="This is a really cool site! It should get an A+ !!!" v-model="contactMessage"
                        required></textarea>
                    <br>
                    <input type="submit" value="Submit" class="text-center">
                </form>

            </article>
            <article id="formSubmissionView">
                <h2 class="text-center">Contact Form Response</h2>
                <pre id="responseViewer" class="flex-center">Waiting for form submission ...</pre>
            </article>
        </section>
    </main>
</template>

<style scoped>
.text-left {
    text-align: left;
}

.flex-center {
    display: flex;
    justify-content: center
}
</style>