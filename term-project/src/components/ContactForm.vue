<script>

import axios from "axios";

export default {
    name: "add-contact-form",
    data() {
        return {
            contactForm: {
                UID: null,
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
            event.preventDefault();
            // validate content, if true save data else do not save data
            if (this.validateForm()) {

                this.contactForm.UID = this.generateUUID();
                this.contactForm.submissionDate = new Date();

                axios.post("/",
                    this.encode({
                        "form-name": "contactMeFormSubmission",
                        ...this.contactForm

                    }),
                    { header: { "Content-Type": "application/x-www-form-urlencoded" } }
                ).then(() => {
                    console.log("Form Successfully submitted!");
                    this.submitted = true;
                })
                    .catch((error) => {
                        document.getElementById("error-message-container").innerHTML = error.message;
                    });

                // reset values in form
                this.clearForm();
            } else {

                let hasErrorText = document.createElement("p");
                hasErrorText.appendChild(document.createTextNode("The following errors were detected.  Please modify your values and submit the form again."));

                let list = document.createElement("ul");
                this.errorMessages.forEach((value, index) => {
                    let li = document.createElement("li");
                    li.appendChild(document.createTextNode(value));
                    list.appendChild(li);
                });
                document.getElementById("error-message-container").appendChild(hasErrorText);
                document.getElementById("error-message-container").appendChild(list);
            }
        },
        encode(data) {
            return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
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

            // validate name
            if (this.contactForm.contactName && this.contactForm.contactName.trim() != "") {

                if (this.contactForm.contactName.length > 2) {
                    validName = true;
                } else {
                    this.errorMessages.push("ERROR: Contact Name must be greater than 2 characters!");
                }
            } else {
                this.errorMessages.push("ERROR: Contact Name cannot be null or blank!");
            }
            // validate email
            // verify value is not null and not blank
            if (this.contactForm.contactEmail && this.contactForm.contactEmail.trim() != "") {

                // validate that email matches email pattern (ex. test@gmail.com)
                let emailRegEx = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$")
                if (this.contactForm.contactEmail.match(emailRegEx)) {
                    validEmail = true;
                } else {
                    this.errorMessages.push("ERROR: Contact Email must be valid email format!");

                }
            } else {
                this.errorMessages.push("ERROR: Contact Email cannot be null or blank!");
            }

            // validate message 
            if (this.contactForm.contactMessage && this.contactForm.contactMessage.trim() != "") {
                validMessage = true;
            } else {
                this.errorMessages.push("ERROR: Contact Message cannot be null or blank!");
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
            <div id="error-message-container" class="margin-y-sm text-center red-text"></div>
            <article id="contactMeFormContainer" class="flex-center">
                <h4 hidden>Form Title</h4>
                <form name="contactMeFormSubmission" method="POST" data-netlify="true" netlify
                    data-netlify-recaptcha="true" data-netlify-honeypot="bot-field" @submit.prevent="submitContactForm">
                    <input type="hidden" name="form-name" value="contactMeFormSubmission" />
                    <input type="hidden" id="formSubmitDate" name="formSubmitDate"
                        v-model="contactForm.submissionDate" />
                    <input type="hidden" id="formUUID" name="formUUID" v-model="contactForm.UID" />
                    <label for="contactName">Name:</label>
                    <input type="text" id="contactName" class="margin-bottom-1" name="contactName"
                        v-model="contactForm.contactName" placeholder="Ex. John Doe" required>
                    <label for="contactEmail">Email:</label>
                    <input type="email" id="contactEmail" class="margin-bottom-1" name="contactEmail"
                        v-model="contactForm.contactEmail" placeholder="Ex. jdoe@email.com" required>
                    <label for="contactMessage">Message:</label>
                    <textarea id="contactMessage" class="margin-bottom-1" name="contactMessage" cols="40" rows="10"
                        placeholder="This is a really cool site! It should get an A+ !!!"
                        v-model="contactForm.contactMessage" required></textarea>

                    <div data-netlify-recaptcha="true"></div>
                    <div class="flex-center">
                        <button type="button" class="btn-style" @click="clearForm">Clear Form</button>&nbsp;&nbsp;
                        <button type="submit" class="btn-style">Submit</button>
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