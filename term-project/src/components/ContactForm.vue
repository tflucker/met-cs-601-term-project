<script>
export default {
    name: "add-contact-form",
    data() {
        return {
            contactForm: {
                id: null,
                contactName: '',
                contactEmail: '',
                contactMessage: '',
                submissionDate: null
            },
            submitted: false,
            errorMessages: []
        };
    },
    methods: {

        submitContactForm(event) {

            // validate content, if true save data else do not save data
            if (this.validateForm()) {
                const contactFormData = {
                    name: this.contactForm.contactName,
                    email: this.contactForm.contactEmail,
                    message: this.contactForm.contactMessage,
                    metadata: {
                        submissionDate: new Date(),
                        requestID: this.generateUUID()
                    }
                }

                event.target[1].value = new Date();
                event.target[2].value = this.generateUUID();

                const submittedForm = event.target;

                submittedForm.getAttribute("")

                const formData = new FormData(submittedForm);

                fetch("/contactForm", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                })
                    .then(() => {
                        console.log("Form Successfully submitted!");
                        // document.getElementById("responseViewer").textContent = JSON.stringify(contactFormData, undefined, 2);
                        alert('Submission Received!');
                        this.submitted = true;
                    })
                    .catch((error) => {
                        alert(error);
                    });
                // reset values in form
                this.clearForm();
            } else {
                alert(this.errorMessages);
            }
        },
        clearForm() {
            this.contactForm.contactName = '';
            this.contactForm.contactEmail = '';
            this.contactForm.contactMessage = '';
        },
        newForm() {
            this.submitted = false;
            this.clearForm();
        },
        validateForm() {

            let validName = false, validEmail = false, validMessage = false;
            let errorMessage = "";

            // validate name
            if (this.contactForm.contactName && this.contactForm.contactName.trim() != "") {
                validName = true;
            } else {
                errorMessage = "ERROR: Contact Name cannot be null or blank!";
            }
            // validate email
            // verify value is not null and not blank
            if (this.contactForm.contactEmail && this.contactForm.contactEmail.trim() != "") {

                // validate that email matches email pattern (ex. test@gmail.com)
                let emailRegEx = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$")
                if (this.contactForm.contactEmail.match(emailRegEx)) {
                    validEmail = true;
                } else {
                    errorMessage += "\nERROR: Contact Email must be valid email format!";
                }
            } else {
                errorMessage += "\nERROR: Contact Email cannot be null or blank!";
            }

            // validate message 
            if (this.contactForm.contactMessage && this.contactForm.contactMessage.trim() != "") {
                validMessage = true;
            } else {
                errorMessage += "\nERROR: Contact Message cannot be null or blank!"
            }

            if (errorMessage.length > 0) {
                alert(errorMessage);
            }

            return (validName && validEmail && validMessage);

        },
        generateUUID: () => {
            //https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
            let
                d = new Date().getTime(),
                d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                let r = Math.random() * 16;
                if (d > 0) {
                    r = (d + r) % 16 | 0;
                    d = Math.floor(d / 16);
                } else {
                    r = (d2 + r) % 16 | 0;
                    d2 = Math.floor(d2 / 16);
                }
                return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
            });
        }
    },
    mounted: function () {
        // finds current 'active' navigation element and removes 'active' class
        const activeElements = document.getElementsByClassName('active');
        Array.from(activeElements).forEach(el => el.classList.remove('active'));
        // add active class to current page
        document.getElementById("contactForm").classList.add('active');
    }
}
</script>

<template>
    <main id="main-content" class="body-style">
        <section class="page-jumbotron sea-green" v-if="!submitted">
            <h2 class="text-center">Contact Form</h2>
            <p class="text-center">If you want to get in touch with me please fill out this contact form so that we can
                connect!</p>
            <article id="contactMeFormContainer" class="flex-center">
                <form name="contactMeFormSubmission" method="POST" data-netlify="true" data-netlify-recaptcha="true">
                    <!-- @submit.prevent="submitContactForm" -->
                    <input type="hidden" id="formSubmitDate" name="formSubmitDate" value="" />
                    <input type="hidden" id="formUUID" name="formUUID" value="" />
                    <label for="contactName">Name:</label><br>
                    <input type="text" id="contactName" name="contactName" v-model="contactForm.contactName"
                        placeholder="Ex. John Doe" required><br><br>
                    <label for="contactEmail">Email:</label><br>
                    <input type="email" id="contactEmail" name="contactEmail" v-model="contactForm.contactEmail"
                        placeholder="Ex. jdoe@email.com" required><br><br>
                    <label for="contactMessage">Message:</label><br>
                    <textarea id="contactMessage" name="contactMessage" cols="40" rows="10" class="responsive-textarea"
                        placeholder="This is a really cool site! It should get an A+ !!!"
                        v-model="contactForm.contactMessage" required></textarea>
                    <br><br>
                    <div data-netlify-recaptcha="true"></div>
                    <div class="flex-center">
                        <button type="button" class="btn-style" @click="clearForm">Clear Form</button>&nbsp;&nbsp;
                        <button type="submit" class="btn-style" @click="submitContactForm">Submit</button>
                    </div>

                </form>

            </article>
        </section>

        <section id="formSubmissionView" class="page-jumbotron sea-green" v-else>
            <h2 class="text-center">Successful form submission!</h2>
            <p class="text-center">Thank you for submitting this contact form! Please click the button if you would like
                to submit another form.</p>
            <div class="flex-center">
                <button type="button" class="btn-style" @click="newForm">New Form</button>
            </div>
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