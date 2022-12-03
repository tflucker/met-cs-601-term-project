<script setup></script>

<template>
  <!-- Navigation bar to access other pages. -->
  <header id="navbar-container" class="navbar-style">
    <div id="header-title-container" class="gradient-background">
      <h1 id="header-title">Portfolio Website - Timothy Flucker</h1>
    </div>
    <div id="navbar-links">
      <ul id="top-nav-menu">
        <li><router-link id="homepage" to="/">Home</router-link></li>
        <li><router-link id="resume" to="/resume">Resume</router-link></li>
        <li><router-link id="aboutMe" to="/aboutMe">About Me</router-link></li>
        <li><router-link id="skillShowcase" to="/skill-showcase">Skill Showcase</router-link></li>
        <li><router-link id="contactForm" to="/contactForm">Contact Form</router-link></li>
        <li><router-link id="badLink" to="/bad-link">Bad Link</router-link></li>

      </ul>
    </div>
  </header>
</template>
