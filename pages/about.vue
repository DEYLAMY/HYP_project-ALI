<template>
  <div class="container-lg container-fluid-sm my-2 pt-3 pb-4">
    <h1 class="lead py-3 px-5 text">We love Montreal. And you will too!</h1>
    <div class="row mb-5 d-flex justify-content-around">
      <div class="col-sm-5 text-sm-start">
        <p class="text">
       with warm weather around the corner and restrictions slowly being lifted, summer 2022 is looking fun and, after almost 2 years, back to normal. If you’re traveling through Italy and are looking to spruce up your holiday with some good music, look no further: we got you covered with a great selection of Italy’s best summer festivals!.
        </p>
      </div>
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://images.unsplash.com/photo-1613060688005-0bbcc1d7fbe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
      </div>
    </div>
    <div class="row mb-5 d-flex justify-content-around">
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://images.unsplash.com/photo-1519178251-5390a0fb6a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
      </div>
      <div class="col-sm-5 d-flex flex-column">
        <h1 class="lead text">Something you'd like to ask?</h1>
        <NuxtLink to="/contact-us"
          ><button type="button" class="btn btn-primary my-3">
            Contact Us
          </button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",

  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.contact {
  border: 1px solid white;
  text-align: center;
  height: 60px;
  padding: 14px 0;
}
a:link {
  color: white;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: white;
  text-decoration: underline;
}

a:visited {
  color: white;
}

/* selected link */
a:active {
  color: white;
}

a:active {
  color: white;
}
</style>
